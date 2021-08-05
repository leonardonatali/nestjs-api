import { Injectable, Logger } from '@nestjs/common'
import { randomUUID } from 'crypto'
import { SavePlayerDto } from './dtos/save.player.dto'
import { Player } from './entities/player.entity'

@Injectable()
export class PlayersService {
    private players: Player[] = []
    private readonly logger = new Logger(PlayersService.name)

    async save (savePlayerDto: SavePlayerDto) {
      const found = this.findPlayerByEmail(savePlayerDto.email)
      if (found) {
        this.logger.log('a player has been updated')
        this.update(found, savePlayerDto)
        return
      }

      this.logger.log('new player has been created')
      this.create(savePlayerDto)
    }

    async getAll (): Promise<Player[]> {
      return this.players
    }

    getByEmail (email: string): Player|undefined {
      return this.players.find(player => player && player.email === email)
    }

    deleteByEmail (email: string) {
      const i = this.players.findIndex(player => player.email === email)
      if (i > -1) {
        delete this.players[i]
      }
    }

    private findPlayerByEmail (email: string): Player|undefined {
      return this.players.find(player => player.email === email)
    }

    private async create (createPlayerDto: SavePlayerDto): Promise<void> {
      const player: Player = {
        _id: randomUUID(),
        email: createPlayerDto.email,
        name: createPlayerDto.name,
        phone: createPlayerDto.phone,
        generalPosition: 1,
        positionRanking: 1,
        ranking: 'A'
      }

      this.players.push(player)
    }

    private update (player: Player, dto: SavePlayerDto): void {
      player.name = dto.name
      player.phone = dto.phone
    }
}
