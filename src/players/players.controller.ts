import { Body, Controller, Get, Post } from '@nestjs/common'
import { SavePlayerDto } from './dtos/save.player.dto'
import { PlayersService } from './players.service'

@Controller('players')
export class PlayersController {
  private playersService: PlayersService

  constructor (playersService: PlayersService) {
    this.playersService = playersService
  }

    @Post()
  async savePlayer (@Body() dto: SavePlayerDto) {
    await this.playersService.save(dto)
    return dto
  }

  @Get()
    async index () {
      return this.playersService.getAll()
    }
}
