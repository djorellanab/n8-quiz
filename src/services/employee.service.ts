import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {Entities} from '@djorellanab/n8-orm';
import { Repository } from 'typeorm';
import { EmployeeDto, PaginationDto } from 'src/dtos';

@Injectable()
export default class EmployeeService {
    constructor( 
        @InjectRepository(Entities.Employee)
        private employeeRepository: Repository<Entities.Employee>){}

    async post(employeeDto: EmployeeDto): Promise<EmployeeDto> {
        let data = await this.employeeRepository.insert({
            name: employeeDto.name,
            telephone: employeeDto.telephone,
            address: employeeDto.address,
            typeId: employeeDto.typeId
        });
        return {...employeeDto, ...data.raw[0]};
    }

    async get(id: number): Promise<EmployeeDto>{
        let data = await this.employeeRepository.findOne({id, active:true});
        if(data == undefined)
            throw new NotFoundException();
        return {...data};
    }

    async getAll(take:number, skip:number): Promise<PaginationDto>{
        let [result, total] = await this.employeeRepository.findAndCount({
            where:{active:true},
            order:{employmentDate: "ASC"},
            take,
            skip
        });
        return {
            data: result,
            count: total
        };
    }

    async update(id: number, employeeDto: EmployeeDto): Promise<EmployeeDto>{
        let data = await this.employeeRepository.update({
            id,
            active:true
        }, {
            name: employeeDto.name,
            telephone: employeeDto.telephone,
            address: employeeDto.address,
            typeId: employeeDto.typeId
        });
        return {...employeeDto, ...data.raw[0]};
    }

    async delete(id: number):  Promise<void>{
        await this.employeeRepository.update({
            id,
            active:true
        }, {active: false, deletedAt: new Date()});

    }
}
