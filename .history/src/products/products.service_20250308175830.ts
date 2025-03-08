/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from '../prisma/prisma.service';



@Injectable()
export class ProductsService {
  constructor(private prismaService: PrismaService){}
  async create(createProductDto: CreateProductDto) {
    try {
      return await this.prismaService.product.create({
        data: createProductDto
      });
    } catch (error) {
      console.error('Error creating product: ', error);
      throw new Error('Unable to create product');
    }    
  }

  async findAll(page: number =1, pageSize: number =10) {
    try {
      const [products, totalCount] = await Promise.all([
        this.prismaService.product.findMany({
          skip: (page -1) * pageSize,
          take: pageSize,
        }),
        this.prismaService.product.count(),
      ]);
  
      return {
        products,
        totalCount,
        totalPages: Math.ceil(totalCount / pageSize),
        currentPage: page,
      }   
      
    } catch (error) {
      console.error('Error creating product: ', error);
      throw new Error('Unable to create product');
    }
    
  }

  findOne(id: string) {
    try {
      const product = await this.prismaService.product.findFirst({
        where: {id}
      })
      
      return this.prismaService.product.findUnique({
        where: {id},
      })
      
    } catch (error) {
      
    }
    
  }

  update(id: string, updateProductDto: UpdateProductDto) {
    return this.prismaService.product.update({
      where:{id},
      data: updateProductDto,
    });
  }

  remove(id: string) {
    return this.prismaService.product.delete({where: {id}});
  }
}
