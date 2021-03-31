import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShopController } from '../controllers';
import { ShopService, ShopEmployeeService } from '../services';
import {Entities} from '@djorellanab/n8-orm';
@Module({
    imports: [TypeOrmModule.forFeature([Entities.Shop, Entities.ShopEmployee])],
    controllers:[ShopController],
    providers:[ShopService, ShopEmployeeService]
})
export default class ShopModule {}
