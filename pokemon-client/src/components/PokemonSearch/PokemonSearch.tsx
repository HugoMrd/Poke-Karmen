import React, { useState } from "react";
import {
  SearchContainer,
  FormGroup,
  SearchInputContainer,
  SearchInput,
  SearchButton,
} from "./PokemonSearch.styled";

interface PokemonSearchProps {
  onSearch: (id: number) => void;
}

const PokemonSearch: React.FC<PokemonSearchProps> = ({ onSearch }) => {
  const [pokemonId, setPokemonId] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const id = parseInt(pokemonId);
    if (!isNaN(id) && id > 0) {
      onSearch(id);
    }
  };

  return (
    <SearchContainer>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <label htmlFor="pokemon-id">Enter Pokémon Number:</label>
          <SearchInputContainer>
            <SearchInput
              id="pokemon-id"
              type="number"
              min="1"
              value={pokemonId}
              onChange={(e) => setPokemonId(e.target.value)}
              placeholder="Ex: 25 for Pikachu"
            />
            <SearchButton type="submit">Search</SearchButton>
          </SearchInputContainer>
        </FormGroup>
      </form>
    </SearchContainer>
  );
};

export default PokemonSearch;
