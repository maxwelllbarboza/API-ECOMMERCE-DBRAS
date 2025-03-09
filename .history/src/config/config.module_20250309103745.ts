import { Module } from '@nestjs/common';

@Module({})
export class ConfigModule {}


@Global()
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
