import { Module } from '@nestjs/common';
import {StartModule, EmployeeTypeService, OrmModule} from './modules';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [
    StartModule,
    EmployeeTypeService,
    OrmModule,
    TypeOrmModule]
})
export class AppModule {}
