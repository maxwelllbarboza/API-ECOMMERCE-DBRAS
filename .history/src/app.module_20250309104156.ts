/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ModulesModule } from './modules/modules.module';
import { InfraModule } from './infra/infra.module';
import { UtilsService } from './utils/utils.service';
import { CommonService } from './common/common.service';
import { ConfigModule } from './config/config.module';


@Module({  
  imports: [PrismaModule, ModulesModule, InfraModule, ConfigModule],
  controllers: [AppController],
  providers: [AppService, UtilsService, CommonService],
})
export class AppModule {}
