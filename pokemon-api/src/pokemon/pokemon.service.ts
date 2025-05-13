import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { catchError, firstValueFrom } from 'rxjs';
import { PokemonDto } from './dto/pokemon.dto';
import { AxiosError } from 'axios';

interface PokemonTypeSlot {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

interface PokemonStatBlock {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}

interface PokemonSprites {
  front_default: string;
  [key: string]: any;
}

interface PokemonApiResponse {
  id: number;
  name: string;
  height: number;
  weight: number;
  types: PokemonTypeSlot[];
  stats: PokemonStatBlock[];
  sprites: PokemonSprites;
}

@Injectable()
export class PokemonService {
  private readonly pokeApiUrl = 'https://pokeapi.co/api/v2';

  constructor(private readonly httpService: HttpService) {}

  async getPokemonById(id: number): Promise<PokemonDto> {
    try {
      const response = await firstValueFrom(
        this.httpService
          .get<PokemonApiResponse>(`${this.pokeApiUrl}/pokemon/${id}`)
          .pipe(
            catchError((error: AxiosError) => {
              //Je vérifie si il existe
              if (error.response?.status === 404) {
                throw new HttpException(
                  'Pokemon not found',
                  HttpStatus.NOT_FOUND,
                );
              }
              //Sinon erreur lors de la récupération
              throw new HttpException(
                'Failed to fetch Pokemon',
                HttpStatus.INTERNAL_SERVER_ERROR,
              );
            }),
          ),
      );

      return this.transformPokemonData(response.data);
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException(
        'Failed to fetch Pokemon',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  private transformPokemonData(data: PokemonApiResponse): PokemonDto {
    return {
      id: data.id,
      name: data.name,
      height: data.height / 10,
      weight: data.weight / 10,
      types: data.types.map((type) => type.type.name),
      stats: data.stats.map((stat) => ({
        name: stat.stat.name,
        value: stat.base_stat,
      })),
      sprites: {
        front_default: data.sprites.front_default,
      },
    };
  }
}
