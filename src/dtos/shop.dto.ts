import {  IsNotEmpty, IsString, IsNumber, IsOptional, IsDecimal} from 'class-validator';
import { ApiProperty } from "@nestjs/swagger";
import { ShopEmployeeDto } from '.';
export default class ShopDto {

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
    address?: string;

    @IsOptional()
    @IsString()
    @IsNotEmpty()
    @ApiProperty({required:false})
    telephone?: string;

    @IsOptional()
    @ApiProperty({readOnly:true})
    employees?: ShopEmployeeDto[]
}
