import { Module } from '@nestjs/common'
import { AppConfig } from '../config/app/app.config'

const appConfigProvider = {
  useClass: AppConfig,
  provide: AppConfig
}

@Module({
  controllers: [],
  providers: [appConfigProvider],
  exports: [appConfigProvider]
})

export class AppModule {}
