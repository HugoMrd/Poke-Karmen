export class PokemonDto {
  id: number;
  name: string;
  height: number;
  weight: number;
  types: string[];
  stats: {
    name: string;
    value: number;
  }[];
  sprites: {
    front_default: string;
  };
}
