import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {Entities} from '@djorellanab/n8-orm';
import { Repository } from 'typeorm';
import { EmployeeTypeDto, PaginationDto } from 'src/dtos';

@Injectable()
export default class EmployeeTypeService {
    constructor( 
        @InjectRepository(Entities.EmployeeType)
        private employeeTypeRepository: Repository<Entities.EmployeeType>){}

    async post(employeeTypeDto: EmployeeTypeDto): Promise<EmployeeTypeDto> {
        let data = await this.employeeTypeRepository.insert({
            name: employeeTypeDto.name,
            salary: employeeTypeDto.salary,
        });
        return {...employeeTypeDto, ...data.raw[0]};
    }

    async get(id: number): Promise<EmployeeTypeDto>{
        let data = await this.employeeTypeRepository.findOne({id, active:true});
        if(data == undefined)
            throw new NotFoundException();
        return {...data};
    }

    async getAll(take:number, skip:number): Promise<PaginationDto>{
        let [result, total] = await this.employeeTypeRepository.findAndCount({
            where:{active:true},
            order:{id: "ASC"},
            take,
            skip
        });
        return {
            data: result,
            count: total
        };
    }

    async update(id: number, employeeTypeDto: EmployeeTypeDto): Promise<EmployeeTypeDto>{
        let data = await this.employeeTypeRepository.update({
            id,
            active:true
        }, {
            name: employeeTypeDto.name,
            salary: employeeTypeDto.salary
        });
        return {...employeeTypeDto, ...data.raw[0]};
    }

    async delete(id: number):  Promise<void>{
        await this.employeeTypeRepository.update({
            id,
            active:true
        }, {active: false, deletedAt: new Date()});    
    }
}
