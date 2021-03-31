import { Controller, Post, Body, Get,
  Param, Query, Put, Delete } from '@nestjs/common';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags, } from '@nestjs/swagger';
import { EmployeeTypeDto } from 'src/dtos';
import { EmployeeTypeService } from '../services';

@ApiTags("employee-types")
@Controller("employee-types")
export default class EmployeeTypeController {
 constructor(private employeeTypeTypeService: EmployeeTypeService) {}

 @ApiOperation({ summary: 'delete an employee type' })
 @ApiResponse({status:200, description: "ok, the employee type was deleted"})
 @ApiResponse({status:404, description: "employee type was not founded"})
 @Delete(":id")
 async delete(@Param('id') id: number): Promise<void> {
  await this.employeeTypeTypeService.delete(id);
 }

 
 @ApiOperation({ summary: 'get a specific an employee type'})
 @ApiResponse({status:201, description: "employee type was founded"})
 @ApiResponse({status:404, description: "employee type was not founded"})
 @Get(":id")
 async get(@Param('id') id: number): Promise<EmployeeTypeDto> {
   return await this.employeeTypeTypeService.get(id);
 }

 @ApiOperation({ summary: 'get all employee types' })
 @ApiResponse({status:201, description: "ok, the employee types with pagination"})
 @ApiQuery({name:"take", required:false, description: "How many registers do you want to get"})
 @ApiQuery({name:"skip", required:false, description: "How many registers do you want to jump (from the first register)"})
 @Get()
 async getAll(@Query('take') take: number = 10, @Query('skip') skip: number = 0): Promise<any> {
   return await this.employeeTypeTypeService.getAll(take, skip);
 }

 @ApiOperation({ summary: 'update an employee type'})
 @ApiResponse({status:201, description: "the employee type was updated"})
 @ApiResponse({status:404, description: "employee type was not founded"})
 @Put(":id")
 async update(@Param('id') id: number, @Body() employeeTypeDto: EmployeeTypeDto): Promise<any>{
   return await this.employeeTypeTypeService.update(id, employeeTypeDto);
 }
 
 @ApiOperation({ summary: 'create an employee type'})
 @ApiResponse({status:201, description: "the employee type was created"})
 @Post()
 async post( @Body() employeeTypeDto: EmployeeTypeDto): Promise<any> {
   return await this.employeeTypeTypeService.post(employeeTypeDto);
 }
 
}
