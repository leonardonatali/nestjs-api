import { Body, Controller, Post } from '@nestjs/common'
import { CreatePlayerDto } from './entities/dtos/create.player.dto'

@Controller('players')
export class PlayersController {
    @Post()
  async savePlayer (@Body() createPlayer: CreatePlayerDto) {
    return createPlayer
  }
}
