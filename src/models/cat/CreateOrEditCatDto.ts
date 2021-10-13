import { IsNotEmpty, IsString, IsUUID } from "class-validator";

export class CreateOrEditCatDto {
    @IsUUID()
    public accountId: string;

    @IsString()
    @IsNotEmpty()
    public name: string;
}
