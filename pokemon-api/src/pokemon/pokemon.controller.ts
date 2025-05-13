import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { PokemonDto } from './dto/pokemon.dto';

@Controller('pokemon')
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  @Get(':id')
  getPokemonById(@Param('id', ParseIntPipe) id: number): Promise<PokemonDto> {
    return this.pokemonService.getPokemonById(id);
  }
}
