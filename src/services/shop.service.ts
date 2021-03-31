import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {Entities} from '@djorellanab/n8-orm';
import { Repository } from 'typeorm';
import { PaginationDto, ShopDto } from 'src/dtos';

@Injectable()
export default class ShopService {
    constructor( 
        @InjectRepository(Entities.Shop)
        private shopRepository: Repository<Entities.Shop>){}

    async post(shopDto: ShopDto): Promise<ShopDto> {
        let data = await this.shopRepository.insert({
            name: shopDto.name,
            address: shopDto.address,
            telephone: shopDto.telephone
        });
        return {...shopDto, ...data.raw[0]};
    }

    async get(id: number): Promise<ShopDto>{
        let data = await this.shopRepository.findOne({id, active:true});
        if(data == undefined)
            return new NotFoundException();
        return {...data};
    }

    async getAll(take:number, skip:number): Promise<PaginationDto>{
        let [result, total] = await this.shopRepository.findAndCount({
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

    async update(id: number, shopDto: ShopDto): Promise<ShopDto>{
        let data = await this.shopRepository.update({
            id,
            active:true
        }, {
            name: shopDto.name,
            address: shopDto.address,
            telephone: shopDto.telephone
        });
        return {...shopDto, ...data.raw[0]};
    }

    async delete(id: number):  Promise<void>{
        await this.shopRepository.update({
            id,
            active:true
        }, {active: false, deletedAt: new Date()});
    }
}
