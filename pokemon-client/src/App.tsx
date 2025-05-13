import React, { useState } from "react";
import { Container, Header, Main, Footer } from "./App.styled";
import PokemonSearch from "./components/PokemonSearch/PokemonSearch";
import PokemonCard from "./components/PokemonCard/PokemonCard";
import { getPokemonById } from "./services/api";
import { Pokemon } from "./types/Pokemon";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (id: number) => {
    setLoading(true);
    setError(null);

    try {
      const data = await getPokemonById(id);
      setPokemon(data);
    } catch (err) {
      console.error("Error fetching pokemon:", err);
      setError("Failed to fetch Pokémon. Please try again.");
      setPokemon(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <Header>
          <h1>Karmen Pokédex</h1>
        </Header>
        <Main>
          <PokemonSearch onSearch={handleSearch} />
          <PokemonCard pokemon={pokemon} loading={loading} error={error} />
        </Main>
        <Footer>
          <p>Created for Karmen by Hugo Mouraud</p>
        </Footer>
      </Container>
    </ThemeProvider>
  );
}

export default App;