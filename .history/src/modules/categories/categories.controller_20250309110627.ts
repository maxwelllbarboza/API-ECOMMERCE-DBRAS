import { Controller } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
    constructor(private readonly categoryService: CategoriesService)
}
