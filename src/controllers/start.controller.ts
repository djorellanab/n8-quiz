import { Controller, Get, Post, Body } from '@nestjs/common';
import { StartDto } from 'src/dtos';
import { StartService } from '../services';
import { ApiTags, ApiResponse } from "@nestjs/swagger";

@ApiTags("general")
@Controller()
export default class StartController {
  constructor(private readonly startService: StartService) {}

  @ApiResponse({status:201})
  @Get()
  async getHello(): Promise<string> {
    return await this.startService.getHello();
  }

  @ApiResponse({status:201})
  @Post()
  async post( @Body() startDto: StartDto): Promise<any>{
    return startDto;
  }
}
