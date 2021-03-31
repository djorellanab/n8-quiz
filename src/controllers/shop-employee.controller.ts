import { Controller, Post, Body, Get,
   Param, Query, Put, Delete } from '@nestjs/common';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ShopEmployeeDto } from 'src/dtos';
import { ShopEmployeeService } from '../services';

@ApiTags("shop-employees")
@Controller("shop-employees")
export default class ShopEmployeeController {
  constructor(private shopEmployeeTypeService: ShopEmployeeService) {}

  @ApiOperation({ summary: 'delete a shop employeee' })
  @ApiResponse({status:200, description: "ok, the shop employe was deleted"})
  @ApiResponse({status:404, description: "shop employee was not founded"})
  @Delete(":id")
  async delete(@Param('id') id: string): Promise<any> {
    return await this.shopEmployeeTypeService.delete(id);
  }

  @ApiOperation({ summary: 'get a specific shop employee'})
  @ApiResponse({status:201, description: "shop employee was founded"})
  @ApiResponse({status:404, description: "shop employee was not founded"})
  @Get(":id")
  async get(@Param('id') id: string): Promise<any> {
    return await this.shopEmployeeTypeService.get(id);
  }

  @ApiOperation({ summary: 'get all shop employees' })
  @ApiResponse({status:201, description: "ok, the shop employee with pagination"})
  @ApiQuery({name:"take", required:false, description: "How many registers do you want to get"})
  @ApiQuery({name:"skip", required:false, description: "How many registers do you want to jump (from the first register)"})
  @Get()
  async getAll(@Query('take') take: number = 10, @Query('skip') skip: number = 0): Promise<any> {
    return await this.shopEmployeeTypeService.getAll(take, skip);
  }

  @ApiOperation({ summary: 'update an shop employee'})
  @ApiResponse({status:201, description: "the shop employee was updated"})
  @ApiResponse({status:404, description: "shop employee was not founded"})
  @Put()
  async update(@Param('id') id: string, @Body() shopEmployeeDto: ShopEmployeeDto): Promise<any>{
    return await this.shopEmployeeTypeService.update(id, shopEmployeeDto);
  }
  
  @ApiOperation({ summary: 'create a shop employee'})
  @ApiResponse({status:201, description: "the employee was created"})
  @Post()
  async post( @Body() shopEmployeeDto: ShopEmployeeDto): Promise<any> {
    return await this.shopEmployeeTypeService.post(shopEmployeeDto);
  }
  
}
