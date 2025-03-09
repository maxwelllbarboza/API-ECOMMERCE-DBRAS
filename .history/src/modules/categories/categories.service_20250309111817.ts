import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/config/prisma.service';
import { CreateCategoryDto } from './dto/create-category.dto';

@Injectable()
export class CategoriesService {
    constructor(private prismaService: PrismaService){}
          async create(createCategoryDto: CreateCategoryDto) {
            try {
              return await this.prismaService.category.create({
                data: createCategoryDto
              });
            } catch (error) {      
              throw new Error('Unable to create product');
            }    
          }
        
          async findAll(page: number =1, pageSize: number =10) {
            if (page < 1 || pageSize < 1) {
              throw new BadRequestException('Page and pageSize must be greater than 0');
            }    
            try {
              const [categories, totalCount] = await Promise.all([
                this.prismaService.category.findMany({
                  skip: (page -1) * pageSize,
                  take: pageSize,
                  orderBy: {name: 'asc'},
                }),
                this.prismaService.category.count(),
              ]);
          
              return {
                categories,
                totalCount,
                totalPages: Math.ceil(totalCount / pageSize),
                currentPage: page,
                hasNextPage: page * pageSize < totalCount,
                hasPrevPage: page > 1,
              };   
              
            } catch (error) {      
              throw new InternalServerErrorException('Unable to fetch products');
            }
          }
        
          async findOne(id: string) {
            try {
              const product = await this.prismaService.category.findUnique({
                where: {id},
              });
        
              if(!product){
                throw new NotFoundException(`Product with ID ${id} not found`)
              }
              return product;
            } catch (error) {      
              throw new InternalServerErrorException('Unable to fetch product');
            }
          }
        
          async update(id: string, updateProductDto: UpdateCategoryDto) {
            try {
              if (!id) {
                throw new BadRequestException('Product ID is required');
              }
        
              const existingProduct = await this.prismaService.category.findUnique({
                where: { id },
              });
        
              if (!existingProduct) {
                throw new NotFoundException(`Product with ID ${id} not found`);
              }
              const data = Object.fromEntries(
                Object.entries(updateProductDto).filter(([_, value]) => value !== undefined)
              );
        
              if (Object.keys(data).length === 0) {
                throw new BadRequestException('At least one field must be updated');
              }
        
              return await this.prismaService.category.update({
                where: { id },
                data,
              });
            } catch (error) {      
              throw new InternalServerErrorException('Unable to update product');
            }
          }
        
          remove(id: string) {
            return this.prismaService.category.delete({where: {id}});
          }
}
