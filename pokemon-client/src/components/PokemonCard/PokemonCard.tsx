import React from "react";
import { Pokemon } from "../../types/Pokemon";
import {
  CardContainer,
  CardHeader,
  PokemonImage,
  TypesSection,
  TypesList,
  TypeBadge,
  InfoSection,
  InfoItem,
  StatsSection,
  StatItem,
  StatName,
  StatBarContainer,
  StatBar,
  StatValue,
  LoadingCard,
  ErrorCard,
  EmptyCard
} from "./PokemonCard.styled";

interface PokemonCardProps {
  pokemon: Pokemon | null;
  loading: boolean;
  error: string | null;
}

const PokemonCard: React.FC<PokemonCardProps> = ({
  pokemon,
  loading,
  error,
}) => {
  if (loading) {
    return <LoadingCard>Loading...</LoadingCard>;
  }

  if (error) {
    return <ErrorCard>{error}</ErrorCard>;
  }

  if (!pokemon) {
    return (
      <EmptyCard>
        Search for a Pokémon to display its details
      </EmptyCard>
    );
  }

  return (
    <CardContainer>
      <CardHeader>
        <h2>
          #{pokemon.id} {pokemon.name}
        </h2>
        {pokemon.sprites.front_default && (
          <PokemonImage src={pokemon.sprites.front_default} alt={pokemon.name} />
        )}
      </CardHeader>

      <TypesSection>
        <h3>Types</h3>
        <TypesList>
          {pokemon.types.map((type, index) => (
            <TypeBadge key={index} pokemonType={type}>
              {type}
            </TypeBadge>
          ))}
        </TypesList>
      </TypesSection>

      <InfoSection>
        <InfoItem>
          <span>Height:</span> {pokemon.height} m
        </InfoItem>
        <InfoItem>
          <span>Weight:</span> {pokemon.weight} kg
        </InfoItem>
      </InfoSection>

      <StatsSection>
        <h3>Stats</h3>
        {pokemon.stats.map((stat, index) => (
          <StatItem key={index}>
            <StatName>{stat.name}:</StatName>
            <StatBarContainer>
              <StatBar width={Math.min(100, (stat.value / 150) * 100)} />
              <StatValue>{stat.value}</StatValue>
            </StatBarContainer>
          </StatItem>
        ))}
      </StatsSection>
    </CardContainer>
  );
};

export default PokemonCard;