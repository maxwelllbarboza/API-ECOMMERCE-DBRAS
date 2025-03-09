/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ModulesModule } from './modules/modules.module';
import { InfraModule } from './infra/infra.module';
import { CommonService } from './common/common.service';
import { ConfigModule } from './config/config.module';
import { UtilsModule } from './utils/utils.module';


@Module({  
  imports: [ModulesModule, InfraModule, ConfigModule, UtilsModule],
  controllers: [AppController],
  providers: [AppService, UtilsService, CommonService],
})
export class AppModule {}
