import { Module } from '@nestjs/common';
import {StartModule, EmployeeModule, OrmModule,
   EmployeeTypeModule, ShopEmployeeModule, ShopModule} from './modules';

@Module({
  imports: [
    StartModule,
    OrmModule,
    EmployeeTypeModule, 
    ShopEmployeeModule,
    EmployeeModule,
    ShopModule
  ]
})
export class AppModule {}
