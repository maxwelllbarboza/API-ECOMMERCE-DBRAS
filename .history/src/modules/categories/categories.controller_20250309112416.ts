import { Body, Controller, Get, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';

@Controller('categories')
export class CategoriesController {
    constructor(private readonly categoriesService: CategoriesService)

    @Post()
    @UsePipes(new ValidationPipe({ whitelist: true, transform: true }))
    async create(@Body() createCategoryDto: CreateCategoryDto) {
        return this.categoriesService.create(createCategoryDto);
    }
        
    @Get()
    findAll(
        @Query('page') page?: string, 
        @Query('pageSize') pageSize? : string
    ) {
        const pageNumber = page ? parseInt(page, 10) : 1;
        const size = pageSize ? parseInt(pageSize, 10) : 10;
        return this.productsService.findAll(pageNumber, size);
    }
        
          @Get(':id')
          findOne(@Param('id') id: string) {
            return this.productsService.findOne(id);
          }
          @HttpCode(200)
          @Patch(':id')
          update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
            return this.productsService.update(id, updateProductDto);
          }
          
          @HttpCode(204)
          @Delete(':id')
          remove(@Param('id') id: string) {
            return this.productsService.remove(id);
          }
}
