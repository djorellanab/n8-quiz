import {IsNumber, IsOptional, IsUUID} from 'class-validator';
import { ApiProperty } from "@nestjs/swagger";
import { ShopDto, EmployeeDto } from '.';
export default class ShopEmployeeDto {

    @ApiProperty({readOnly:true})
    @IsOptional()
    @IsUUID()
    id?: string;

    @ApiProperty()
    @IsNumber()
    shopId!: number

    @IsOptional()
    @ApiProperty({readOnly:true})
    shop?: ShopDto;

    @ApiProperty()
    @IsNumber()
    employeeId!: number

    @IsOptional()
    @ApiProperty({readOnly:true})
    employee?: EmployeeDto;

    @ApiProperty()
    employmentDate!: Date;
}
