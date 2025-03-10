import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ModulesModule } from './modules/modules.module';
import { InfraModule } from './infra/infra.module';
import { ConfigModule } from './config/config.module';
import { UtilsModule } from './utils/utils.module';
import { CommonModule } from './common/common.module';
import { AuthController } from './auth/auth.controller';

import { ModuleController } from './auth/module/module.controller';



@Module({  
  imports: [ModulesModule, InfraModule, ConfigModule, UtilsModule, CommonModule],
  controllers: [AppController, AuthController, ModuleController],
  providers: [AppService],
})
export class AppModule {}
