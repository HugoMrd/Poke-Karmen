import styled from "styled-components";

// Couleur des pokemons (arriere plan)
const getTypeColor = (type: string) => {
  const typeColors: Record<string, string> = {
    normal: "#a8a878",
    fire: "#f08030",
    water: "#6890f0",
    grass: "#78c850",
    electric: "#f8d030",
    ice: "#98d8d8",
    fighting: "#c03028",
    poison: "#a040a0",
    ground: "#e0c068",
    flying: "#a890f0",
    psychic: "#f85888",
    bug: "#a8b820",
    rock: "#b8a038",
    ghost: "#705898",
    dragon: "#7038f8",
    dark: "#705848",
    steel: "#b8b8d0",
    fairy: "#ee99ac",
  };

  return typeColors[type] || "#a4acaf";
};

const baseCardStyles = `
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  margin-top: 20px;
`;

export const CardContainer = styled.div`
  ${baseCardStyles}
  background-color: #fff;
`;

export const LoadingCard = styled.div`
  ${baseCardStyles}
  padding: 40px;
  text-align: center;
  color: ${({ theme }) => theme.colors.textLight};
`;

export const ErrorCard = styled.div`
  ${baseCardStyles}
  padding: 40px;
  text-align: center;
  color: ${({ theme }) => theme.colors.error};
`;

export const EmptyCard = styled.div`
  ${baseCardStyles}
  padding: 40px;
  text-align: center;
  color: ${({ theme }) => theme.colors.textLight};
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  padding-bottom: 10px;

  h2 {
    margin: 0;
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.text};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    gap: 10px;
  }
`;

export const PokemonImage = styled.img`
  width: 120px;
  height: 120px;
`;

export const TypesSection = styled.div`
  margin-bottom: 20px;
`;

export const TypesList = styled.div`
  display: flex;
  gap: 10px;
`;

export const TypeBadge = styled.span<{ pokemonType: string }>`
  padding: 5px 15px;
  border-radius: 20px;
  color: white;
  font-size: 14px;
  text-transform: capitalize;
  background-color: ${(props) => getTypeColor(props.pokemonType)};
`;

export const InfoSection = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
  padding: 10px 0;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    gap: 10px;
  }
`;

export const InfoItem = styled.div`
  font-size: 16px;

  span {
    font-weight: bold;
    color: ${({ theme }) => theme.colors.textLight};
  }
`;

export const StatsSection = styled.div`
  h3 {
    margin-bottom: 10px;
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const StatItem = styled.div`
  margin-bottom: 8px;
`;

export const StatName = styled.span`
  display: inline-block;
  width: 120px;
  text-align: left;
  text-transform: capitalize;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.textLight};
`;

export const StatBarContainer = styled.div`
  display: inline-flex;
  align-items: center;
  width: calc(100% - 130px);
  height: 12px;
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  border-radius: 6px;
  overflow: hidden;
`;

export const StatBar = styled.div<{ width: number }>`
  height: 100%;
  width: ${(props) => props.width}%;
  background-color: ${({ theme }) => theme.colors.success};
  border-radius: 6px;
`;

export const StatValue = styled.span`
  margin-left: 8px;
  font-weight: bold;
`;
