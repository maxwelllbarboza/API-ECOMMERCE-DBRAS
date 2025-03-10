import { Module } from '@nestjs/common';
import { ModulesModule } from './modules/modules.module';
import { ConfigModule } from './config/config.module';




@Module({  
  imports: [ModulesModule, ConfigModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
