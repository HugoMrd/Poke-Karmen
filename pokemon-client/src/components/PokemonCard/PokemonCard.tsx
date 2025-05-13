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
  EmptyCard,
} from "./PokemonCard.styled";

interface PokemonCardProps {
  // Objet représentant les données d'un Pokémon ou Null dans le cas où il n'y a pas encore de résultat
  pokemon: Pokemon | null;
  // Booléen indiquant si les données du Pokémon sont en cours de chargement
  loading: boolean;
  // Message d'erreur éventuel (ou null s'il n'y a pas d'erreur)
  error: string | null;
}

// Composant qui affiche la fiche détaillée d’un Pokémon (image, types, taille, poids, stats) ou un état de chargement / erreur si applicable
const PokemonCard: React.FC<PokemonCardProps> = ({
  pokemon,
  loading,
  error,
}) => {
  if (loading) {
    return <LoadingCard>Chargement du Pokémon...</LoadingCard>;
  }

  if (error) {
    return <ErrorCard>{error}</ErrorCard>;
  }

  if (!pokemon) {
    return (
      <EmptyCard>
        Recherchez un Pokémon par son numéro pour afficher ses détails
      </EmptyCard>
    );
  }

  return (
    <CardContainer>
      <CardHeader>
        <h2>
          #{pokemon.id.toString().padStart(3, "0")} {pokemon.name}
        </h2>
        {pokemon.sprites.front_default && (
          <PokemonImage
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
          />
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
          <span>Taille</span> {(pokemon.height / 10).toFixed(1)} m
        </InfoItem>
        <InfoItem>
          <span>Poids</span> {(pokemon.weight / 10).toFixed(1)} kg
        </InfoItem>
      </InfoSection>

      <StatsSection>
        <h3>Statistiques</h3>
        {pokemon.stats.map((stat, index) => (
          <StatItem key={index}>
            <StatName>{stat.name}</StatName>
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
