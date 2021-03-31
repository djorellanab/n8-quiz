import {  IsNotEmpty, IsString, IsNumber, IsOptional} from 'class-validator';
import { ApiProperty } from "@nestjs/swagger";
import {EmployeeTypeDto, ShopEmployeeDto} from '.';

export default class EmployeeDto {

    @ApiProperty({readOnly:true})
    @IsOptional()
    id?: number;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    name!: string;
    
    @IsOptional()
    @IsString()
    @IsNotEmpty()
    @ApiProperty({required:false})
    telephone?: string;

    @IsOptional()
    @IsString()
    @IsNotEmpty()
    @ApiProperty({required:false})
    address?: string;

    @IsOptional()
    @ApiProperty({readOnly:true})
    employmentDate?: Date;
    
    @IsNumber()
    @ApiProperty()
    typeId!: number;

    @IsOptional()
    type?: EmployeeTypeDto;

    @IsOptional()
    @ApiProperty({readOnly:true})
    shops?: ShopEmployeeDto[]
}
