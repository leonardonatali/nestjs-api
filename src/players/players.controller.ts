import { Body, Controller, Get, Post, Query, NotFoundException, Delete } from '@nestjs/common'
import { QueryPlayerDto } from './dtos/get.player.dto'
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
  async index (@Query() query: QueryPlayerDto) {
    if (query.email) {
      const player = this.playersService.getByEmail(query.email)

      if (player) {
        return player
      }

      throw new NotFoundException()
    }

    return this.playersService.getAll()
  }

  @Delete()
  async delete (@Query() query: QueryPlayerDto) {
    if (query.email) {
      const player = this.playersService.getByEmail(query.email)

      if (player) {
        this.playersService.deleteByEmail(player.email)
        return
      }
    }
    throw new NotFoundException()
  }
}
