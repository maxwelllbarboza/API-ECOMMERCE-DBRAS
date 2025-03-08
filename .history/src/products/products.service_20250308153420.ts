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
    return 'This action adds a new product';
  }

  findAll() {
    return this
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
