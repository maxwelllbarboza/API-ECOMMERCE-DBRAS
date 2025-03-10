import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post, Query, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { AuthGuard } from '../auth/auth.guard';


@Controller('categories')
export class CategoriesController {
    constructor(private readonly categoriesService: CategoriesService){}
  
        
    @Get()
    findAll(
        @Query('page') page?: string, 
        @Query('pageSize') pageSize? : string
    ){
        const pageNumber = page ? parseInt(page, 10) : 1;
        const size = pageSize ? parseInt(pageSize, 10) : 10;
        return this.categoriesService.findAll(pageNumber, size);
    }
        
    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.categoriesService.findOne(id);
    }

    @UseGuards(AuthGuard)
    @HttpCode(200)
    @Patch(':id')
    update(@Param('id') id: string, @Body() updateCategoryDto: UpdateCategoryDto) {
        return this.categoriesService.update(id, updateCategoryDto);
    }
    
    @UseGuards(AuthGuard)
    @HttpCode(204)
    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.categoriesService.remove(id);
    }
}
