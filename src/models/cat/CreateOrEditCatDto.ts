import { IsNotEmpty, IsString } from "class-validator";

export class CreateOrEditCatDto {
    @IsString()
    @IsNotEmpty()
    public name: string;
}
