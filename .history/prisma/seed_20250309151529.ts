import { PrismaClient, Role } from '@prisma/client';
import * as


const prisma = new PrismaClient();

async function main() {
  // Criando categorias de exemplo
  const category1 = await prisma.category.create({
    data: {
      name: 'Eletrônicos',
    },
  });
  const category2 = await prisma.category.create({
    data: {
      name: 'Livros',
    },
  });

  // Criando produtos de exemplo
  const product1 = await prisma.product.create({
    data: {
      name: 'Smartphone',
      description: 'Smartphone de última geração',
      price: 2999.99,
      stock: 50,
      categoryId: category1.id,
    },
  });

  const product2 = await prisma.product.create({
    data: {
      name: 'Livro de Programação',
      description: 'Aprenda NestJS de forma prática',
      price: 89.99,
      stock: 100,
      categoryId: category2.id,
    },
  });

  // Criando user ADMIN
  const userAdmin = await prisma.user.create({
    data: {
      email: 'admin@hotmail.com',
      password: '123456',
      role: Role.ADMIN  
    },
  });

  const userClient = await prisma.user.create({
    data: {
      email: 'client@hotmail.com',
      password: '123456',
      role: Role.USER  
    },
  });


  console.log('Categorias e produtos criados com sucesso!');
}


main()
  .catch(e => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });


