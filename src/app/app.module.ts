import { Module } from '@nestjs/common'
import { AppConfig } from '../config/app/app.config'
import { PlayersModule } from '../players/players.module'

const appConfigProvider = {
  useClass: AppConfig,
  provide: AppConfig
}

@Module({
  controllers: [],
  imports: [PlayersModule],
  providers: [appConfigProvider],
  exports: [appConfigProvider]
})

export class AppModule {}
