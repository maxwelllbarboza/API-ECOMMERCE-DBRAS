import { Controller, Get, Post, Body, Patch, Param, Delete, Query, HttpCode, UsePipes, ValidationPipe, UseGuards } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { AuthGuard } from '../auth/auth.guard';

@UseGuards(AuthGuard)
@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) {}
    
    @Post()
    @UsePipes(new ValidationPipe({ whitelist: true, transform: true }))
    async create(@Body() createProductDto: CreateProductDto) {     
      return this.productsService.create(createProductDto);      
     
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
