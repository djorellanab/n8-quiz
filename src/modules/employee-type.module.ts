import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeeTypeController } from '../controllers';
import { EmployeeTypeService } from '../services';
import {Entities} from '@djorellanab/n8-orm';
@Module({
    imports: [TypeOrmModule.forFeature([Entities.EmployeeType])],
    controllers:[EmployeeTypeController],
    providers:[EmployeeTypeService]
})
export default class EmployeeTypeModule {}
