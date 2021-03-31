import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShopEmployeeController } from '../controllers';
import { ShopEmployeeService } from '../services';
import {Entities} from '@djorellanab/n8-orm';
@Module({
    imports: [TypeOrmModule.forFeature([Entities.ShopEmployee])],
    controllers:[ShopEmployeeController],
    providers:[ShopEmployeeService]
})
export default class ShopEmployeeModule {}
