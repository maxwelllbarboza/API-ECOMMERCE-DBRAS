/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './config/prisma/prisma.module';
import { ModulesModule } from './modules/modules.module';
import { InfraModule } from './infra/infra.module';
import { UtilsService } from './utils/utils.service';
import { ConfigService } from './config/config.service';
import { CommonService } from './common/common.service';


@Module({  
  imports: [PrismaModule, ModulesModule, InfraModule],
  controllers: [AppController],
  providers: [AppService, UtilsService, ConfigService, CommonService],
})
export class AppModule {}
