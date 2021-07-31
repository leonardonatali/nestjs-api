import { NestFactory } from '@nestjs/core'
import { AppModule } from './app/app.module'
import { AppConfig } from './config/app/app.config'

async function bootstrap () {
  const cfg = new AppConfig()

  const app = await NestFactory.create(AppModule)
  app.listen(cfg.port)
}

bootstrap()
