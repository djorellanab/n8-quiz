import { Controller, Post, Body, Get,
    Param, Query, Put, Delete } from '@nestjs/common';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
  import { ShopDto } from 'src/dtos';
  import { ShopService } from '../services';
  
  @ApiTags("shops")
  @Controller("shops")
  export default class ShopController {
   constructor(private shopService: ShopService) {}
  
   @ApiOperation({ summary: 'delete a shope' })
   @ApiResponse({status:200, description: "ok, the shop employe was deleted"})
   @ApiResponse({status:404, description: "shop was not founded"})
   @Delete(":id")
   async delete(@Param('id') id: number): Promise<any> {
     return await this.shopService.delete(id);
   }
  
   @ApiOperation({ summary: 'get a specific shop'})
   @ApiResponse({status:201, description: "shop was founded"})
   @ApiResponse({status:404, description: "shop was not founded"})
   @Get(":id")
   async get(@Param('id') id: number): Promise<any> {
     return await this.shopService.get(id);
   }
  
   @ApiOperation({ summary: 'get all shops' })
   @ApiResponse({status:201, description: "ok, the shop with pagination"})
   @ApiQuery({name:"take", required:false, description: "How many registers do you want to get"})
   @ApiQuery({name:"skip", required:false, description: "How many registers do you want to jump (from the first register)"})
   @Get()
   async getAll(@Query('take') take: number = 10, @Query('skip') skip: number = 0): Promise<any> {
     return await this.shopService.getAll(take, skip);
   }
  
   @ApiOperation({ summary: 'update an shop'})
   @ApiResponse({status:201, description: "the shop was updated"})
   @ApiResponse({status:404, description: "shop was not founded"})
   @Put()
   async update(@Param('id') id: number, @Body() employeeDto: ShopDto): Promise<any>{
     return await this.shopService.update(id, employeeDto);
   }
   
   
   @ApiOperation({ summary: 'create a shop'})
   @ApiResponse({status:201, description: "the shop was created"})
   @Post()
   async post( @Body() employeeDto: ShopDto): Promise<any> {
     return await this.shopService.post(employeeDto);
   }
   
  }
  