import { Injectable, Logger } from '@nestjs/common'
import { randomUUID } from 'crypto'
import { CreatePlayerDto } from './entities/dtos/create.player.dto'
import { Player } from './entities/player.entity'

@Injectable()
export class PlayersService {
    private players: Player[] = []
    private readonly logger = new Logger(PlayersService.name)

    async save (savePlayerDto: CreatePlayerDto) {
      this.logger.log('new player has been created')
      this.create(savePlayerDto)
    }

    async getAll (): Promise<Player[]> {
      return this.players
    }

    private async create (createPlayerDto: CreatePlayerDto): Promise<void> {
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
}
