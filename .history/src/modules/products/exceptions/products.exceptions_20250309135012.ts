import { BadRequestException, InternalServerErrorException, NotFoundException } from '@nestjs/common';

export class ProductNotFoundException extends Error {
  constructor(productId: string) {
    super(`Produto com ID ${productId} não encontrado.`);
    this.name = ''
  }
}

export class ProductCreationException extends InternalServerErrorException {
  constructor() {
    super('Não foi possível criar o produto.');
  }
}

export class ProductFetchException extends InternalServerErrorException {
  constructor() {
    super('Não foi possível buscar os produtos.');
  }
}

export class ProductUpdateException extends InternalServerErrorException {
  constructor() {
    super('Não foi possível atualizar o produto.');
  }
}

export class ProductIdRequiredException extends BadRequestException {
  constructor() {
    super('O ID do produto é obrigatório.');
  }
}

export class ProductUpdateFieldRequiredException extends BadRequestException {
  constructor() {
    super('Pelo menos um campo deve ser atualizado');
  }
}

export class InvalidPaginationException extends BadRequestException {
  constructor() {
    super('Página e tamanho da página devem ser maiores que 0.');
  }
}
