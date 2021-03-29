import { Controller, Get } from '@nestjs/common';
import { EmployeeTypeService } from '../services';

@Controller("employee-types")
export default class EmployeeTypeController {
  constructor(private employeeTypeService: EmployeeTypeService) {}

  @Get()
  async getHello(): Promise<any> {
    return await this.employeeTypeService.getAll();
  }
}
