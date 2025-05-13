import React, { useState } from "react";
import {
  SearchContainer,
  FormGroup,
  SearchInputContainer,
  SearchInput,
  SearchButton,
} from "./PokemonSearch.styled";

interface PokemonSearchProps {
   // Fonction appelée lorsqu'une recherche est soumise avec un ID de Pokémon valide
  onSearch: (id: number) => void;
}

// Composant permettant de rechercher un Pokémon par son ID via un champ de saisie
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
          <label htmlFor="pokemon-id">Entrez le numéro du Pokémon :</label>
          <SearchInputContainer>
            <SearchInput
              id="pokemon-id"
              type="number"
              min="1"
              value={pokemonId}
              onChange={(e) => setPokemonId(e.target.value)}
              placeholder="Ex: 25 pour Pikachu"
            />
            <SearchButton type="submit">Rechercher</SearchButton>
          </SearchInputContainer>
        </FormGroup>
      </form>
    </SearchContainer>
  );
};

export default PokemonSearch;