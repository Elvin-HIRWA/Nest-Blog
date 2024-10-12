import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreatePostDto {

    @IsNotEmpty()
    @IsString()
    title: string;

    @IsNotEmpty()
    @IsString()
    snippet: string;

    @IsNotEmpty()
    @IsString()
    description: string

    @IsNotEmpty()
    @IsNumber()
    userId: number;
}