import {  IsNotEmpty, IsString, IsNumber, IsOptional, IsDecimal} from 'class-validator';
import { ApiProperty } from "@nestjs/swagger";
import { EmployeeDto } from '.';
export default class EmployeeTypeDto {

    @ApiProperty({readOnly:true})
    @IsOptional()
    id?: number;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    name!: string;
    
    @IsOptional()
    @IsNumber()
    @ApiProperty({required:false})
    salary?: number;

    @IsOptional()
    @ApiProperty({readOnly:true})
    employees?: EmployeeDto[];
}
