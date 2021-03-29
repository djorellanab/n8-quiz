import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {Entities} from '@djorellanab/n8-orm';
import { Repository } from 'typeorm';
@Injectable()
export default class StartService {

    constructor( 
        @InjectRepository(Entities.EmployeeType)
        private employeeTypeRepository: Repository<Entities.EmployeeType>){}

    async getAll(): Promise<any> {
        return await this.employeeTypeRepository.find({});
    }
}
