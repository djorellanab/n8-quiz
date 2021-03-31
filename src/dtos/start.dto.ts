import {  IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from "@nestjs/swagger";

export default class StartDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    message!: string;
}
