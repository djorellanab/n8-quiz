import { Controller, Post, Body, Get,
   Param, Query, Put, Delete } from '@nestjs/common';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { EmployeeDto } from 'src/dtos';
import { EmployeeService } from '../services';

@ApiTags("employees")
@Controller("employees")
export default class EmployeeController {
  constructor(private employeeService: EmployeeService) {}

  @ApiOperation({ summary: 'delete an employee' })
  @ApiResponse({status:200, description: "ok, the employee was deleted"})
  @ApiResponse({status:404, description: "employee was not founded"})
  @Delete(":id")
  async delete(@Param('id') id: number): Promise<any> {
    return await this.employeeService.delete(id);
  }

  @ApiOperation({ summary: 'get a specific employee'})
  @ApiResponse({status:201, description: "employee was founded"})
  @ApiResponse({status:404, description: "employee was not founded"})
  @Get(":id")
  async get(@Param('id') id: number): Promise<any> {
    return await this.employeeService.get(id);
  }

  
  @ApiOperation({ summary: 'get all employees' })
  @ApiResponse({status:201, description: "ok, the employee with pagination"})
  @ApiQuery({name:"take", required:false, description: "How many registers do you want to get"})
  @ApiQuery({name:"skip", required:false, description: "How many registers do you want to jump (from the first register)"})
  @Get()
  async getAll(@Query('take') take: number = 10, @Query('skip') skip: number = 0): Promise<any> {
    return await this.employeeService.getAll(take, skip);
  }

  @ApiOperation({ summary: 'update an employee'})
  @ApiResponse({status:201, description: "the employee was updated"})
  @ApiResponse({status:404, description: "employee was not founded"})
  @Put()
  async update(@Param('id') id: number, @Body() employeeDto: EmployeeDto): Promise<any>{
    return await this.employeeService.update(id, employeeDto);
  }

  @ApiOperation({ summary: 'create an employee'})
  @ApiResponse({status:201, description: "the employee was created"})
  @Post()
  async post( @Body() employeeDto: EmployeeDto): Promise<any> {
    return await this.employeeService.post(employeeDto);
  }
  
}
