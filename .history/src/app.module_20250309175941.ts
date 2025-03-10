import { Module } from '@nestjs/common';
import { ModulesModule } from './modules/modules.module';
import { InfraModule } from './infra/infra.module';
import { ConfigModule } from './config/config.module';
import { UtilsModule } from './utils/utils.module';
import { CommonModule } from './common/common.module';



@Module({  
  imports: [ModulesModule, InfraModule, ConfigModule, UtilsModule, CommonModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
