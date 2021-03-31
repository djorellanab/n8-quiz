import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeeController } from '../controllers';
import { EmployeeService, ShopEmployeeService } from '../services';
import {Entities} from '@djorellanab/n8-orm';

@Module({
    imports: [TypeOrmModule.forFeature([Entities.Employee, Entities.ShopEmployee])],
    controllers:[EmployeeController],
    providers:[EmployeeService, ShopEmployeeService]
})
export default class EmployeeModule {}
