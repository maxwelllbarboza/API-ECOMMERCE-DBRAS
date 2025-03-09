/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ModulesModule } from './modules/modules.module';
import { InfraModule } from './infra/infra.module';


@Module({  
  imports: [PrismaModule, ModulesModule, ModulesModule, InfraModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
