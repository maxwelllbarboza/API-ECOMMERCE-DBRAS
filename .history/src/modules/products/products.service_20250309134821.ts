import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from '../../config/prisma.service';
import { 
  ProductNotFoundException,
  ProductCreationException,
  ProductFetchException,
  ProductUpdateException,
  ProductIdRequiredException,
  ProductUpdateFieldRequiredException,
  InvalidPaginationException 
} from './exceptions/products.exceptions';

@Injectable()
export class ProductsService {    
  constructor(private prismaService: PrismaService){}
  async create(createProductDto: CreateProductDto) {
    return await this.prismaService.product.create({
      data: createProductDto
    });
  }
  
  async findAll(page: number =1, pageSize: number =10) {
    if (page < 1 || pageSize < 1) {
      throw new InvalidPaginationException();
    }        
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
  }

  async findOne(id: string) {
    
    const product = await this.prismaService.product.findUnique({
      where: {id},
    });

      if(!product){
        throw new ProductNotFoundException(id)
      }
      return product;
    } catch (error) {      
      throw new ProductFetchException();
    }
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    try {
      if (!id) {
        throw new ProductIdRequiredException();
      }

      const existingProduct = await this.prismaService.product.findUnique({
        where: { id },
      });

      if (!existingProduct) {
        throw new ProductNotFoundException(id);
      }
      const data = Object.fromEntries(
        Object.entries(updateProductDto).filter(([_, value]) => value !== undefined)
      );

      if (Object.keys(data).length === 0) {
        throw new ProductUpdateFieldRequiredException();
      }

      return await this.prismaService.product.update({
        where: { id },
        data,
      });
    } catch (error) {      
      throw new ProductUpdateException();
    }
  }

  remove(id: string) {
    return this.prismaService.product.delete({where: {id}});
  }
}
