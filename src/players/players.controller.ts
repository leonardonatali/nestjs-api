import { Body, Controller, Get, Post } from '@nestjs/common'
import { CreatePlayerDto } from './entities/dtos/create.player.dto'
import { PlayersService } from './players.service'

@Controller('players')
export class PlayersController {
  private playersService: PlayersService

  constructor (playersService: PlayersService) {
    this.playersService = playersService
  }

    @Post()
  async savePlayer (@Body() createPlayer: CreatePlayerDto) {
    await this.playersService.save(createPlayer)
    return createPlayer
  }

  @Get()
    async index () {
      return this.playersService.getAll()
    }
}
