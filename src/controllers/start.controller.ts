import { Controller, Get, Post, Body,HttpCode } from '@nestjs/common';
import { StartService } from '../services';
import { ApiTags, ApiResponse, ApiOperation } from "@nestjs/swagger";

@ApiTags("general")
@Controller()
export default class StartController {
  constructor(private readonly startService: StartService) {}

  @ApiOperation({ summary: 'Service to check the health of the server' })
  @ApiResponse({status:200, description: "return hello world"})
  @HttpCode(200)
  @Get()
  async getHello(): Promise<string> {
    return await this.startService.getHello();
  }
}
