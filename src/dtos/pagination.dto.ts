import {IsNumber, IsOptional, IsUUID} from 'class-validator';
import { ApiProperty } from "@nestjs/swagger";

export default class PaginationDto {
    @ApiProperty()
    @IsOptional()
    data!: any;

    @ApiProperty()
    @IsOptional()
    count!: number;
}
