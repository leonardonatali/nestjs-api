import { Injectable } from '@nestjs/common'

@Injectable()
export class AppConfig {
    public readonly port: number

    constructor () {
      const env = process.env

      this.port = env.APP_PORT ? Number(env.APP_PORT) : 80
    }
}
