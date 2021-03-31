import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {Entities} from '@djorellanab/n8-orm';
import { Repository } from 'typeorm';
import { PaginationDto, ShopEmployeeDto } from 'src/dtos';

@Injectable()
export default class ShopEmployeeService {
    constructor( 
        @InjectRepository(Entities.ShopEmployee)
        private shopEmployeeRepository: Repository<Entities.ShopEmployee>){}

    async post(shopEmployeeDto: ShopEmployeeDto): Promise<ShopEmployeeDto> {
        let data = await this.shopEmployeeRepository.insert({
            shopId: shopEmployeeDto.shopId,
            employeeId: shopEmployeeDto.employeeId,
            employmentDate: shopEmployeeDto.employmentDate
        });
        return {...shopEmployeeDto, ...data.raw[0]};
    }

    async get(id: string): Promise<ShopEmployeeDto>{
        let data = await this.shopEmployeeRepository.findOne({id, active:true});
        if(data == undefined)
            throw new NotFoundException();
        return {...data};
    }

    async getAll(take:number, skip:number): Promise<PaginationDto>{
        let [result, total] = await this.shopEmployeeRepository.findAndCount({
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

    async update(id: string, shopEmployeeDto: ShopEmployeeDto): Promise<PaginationDto>{
        let data = await this.shopEmployeeRepository.update({
            id,
            active:true
        }, {
            shopId: shopEmployeeDto.shopId,
            employeeId: shopEmployeeDto.employeeId,
            employmentDate: shopEmployeeDto.employmentDate
        });
        return {...shopEmployeeDto, ...data.raw[0]};
    }

    async delete(id: string):  Promise<void>{
        await this.shopEmployeeRepository.update({
            id,
            active:true
        }, {active: false, deletedAt: new Date()});
    }
}
