import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from '../../config/prisma.service';

@Injectable()
export class ProductsService {    
  constructor(private prismaService: PrismaService){}
  async create(createProductDto: CreateProductDto) {
    try {
      return await this.prismaService.product.create({
        data: createProductDto
      });
    } catch (error) {      
      throw new Error('Não foi possível criar o produto.');
    }    
  }
  
  async findAll(page: number =1, pageSize: number =10) {
    if (page < 1 || pageSize < 1) {
      throw new BadRequestException('Página e tamanho da página devem ser maiores que 0.');
    }    
    try {
      const [products, totalCount] = await Promise.all([
        this.prismaService.product.findMany({
          skip: (page -1) * pageSize,
          take: pageSize,
          orderBy: {name: 'asc'},
        }),
        this.prismaService.product.count(),
      ]);
  
      return {
        products,
        totalCount,
        totalPages: Math.ceil(totalCount / pageSize),
        currentPage: page,
        hasNextPage: page * pageSize < totalCount,
        hasPrevPage: page > 1,
      };   
      
    } catch (error) {      
      throw new InternalServerErrorException('Não foi possível buscar os produtos.');
    }
  }

  async findOne(id: string) {
    try {
      const product = await this.prismaService.product.findUnique({
        where: {id},
      });

      if(!product){
        throw new NotFoundException(`Produto com ID ${id} não encontrado.`)
      }
      return product;
    } catch (error) {      
      throw new InternalServerErrorException('Não foi possível buscar o produto');
    }
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    try {
      if (!id) {
        throw new BadRequestException('Product ID is required');
      }

      const existingProduct = await this.prismaService.product.findUnique({
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

      return await this.prismaService.product.update({
        where: { id },
        data,
      });
    } catch (error) {      
      throw new InternalServerErrorException('Unable to update product');
    }
  }

  remove(id: string) {
    return this.prismaService.product.delete({where: {id}});
  }
}
