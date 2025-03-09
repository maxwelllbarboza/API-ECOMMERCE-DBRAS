import { PartialType } from "@nestjs/mapped-types";
import { Transform } from "class-transformer";
import { IsNotEmpty, IsString } from "class-validator";
import { CreateCategoryDto } from "./create-category.dto";

export class UpdateCategoryDto extends PartialType(CreateCategoryDto){
   
}
