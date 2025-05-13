import styled from "styled-components";

// Couleur des pokemons (arriere plan)
const getTypeColor = (type: string) => {
  const typeColors: Record<string, string> = {
    normal: "#A8A77A",
    fire: "#EE8130",
    water: "#6390F0",
    grass: "#7AC74C",
    electric: "#F7D02C",
    ice: "#96D9D6",
    fighting: "#C22E28",
    poison: "#A33EA1",
    ground: "#E2BF65",
    flying: "#A98FF3",
    psychic: "#F95587",
    bug: "#A6B91A",
    rock: "#B6A136",
    ghost: "#735797",
    dragon: "#6F35FC",
    dark: "#705746",
    steel: "#B7B7CE",
    fairy: "#D685AD",
  };

  return typeColors[type.toLowerCase()] || "#A4ACAF";
};

const baseCardStyles = `
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  margin-top: 1.5rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  }
`;

export const CardContainer = styled.div`
  ${baseCardStyles}
  background-color: #fff;
  overflow: hidden;
`;

export const LoadingCard = styled.div`
  ${baseCardStyles}
  padding: 3rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.textLight};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 200px;

  &:after {
    content: "";
    width: 30px;
    height: 30px;
    border: 4px solid #f3f3f3;
    border-top: 4px solid ${({ theme }) => theme.colors.primary};
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin-top: 1rem;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const ErrorCard = styled.div`
  ${baseCardStyles}
  padding: 2.5rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.error};
  border-left: 4px solid ${({ theme }) => theme.colors.error};
`;

export const EmptyCard = styled.div`
  ${baseCardStyles}
  padding: 3rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.textLight};
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  border: 2px dashed ${({ theme }) => theme.colors.border};
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  h2 {
    margin: 0;
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.text};
    font-size: 1.75rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const PokemonImage = styled.img`
  width: 150px;
  height: 150px;
  filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1));
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1) rotate(5deg);
  }
`;

export const TypesSection = styled.div`
  margin-bottom: 1.5rem;

  h3 {
    font-size: 1.25rem;
    margin-bottom: 0.75rem;
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const TypesList = styled.div`
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
`;

export const TypeBadge = styled.span<{ pokemonType: string }>`
  padding: 0.5rem 1rem;
  border-radius: 20px;
  color: white;
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: capitalize;
  background-color: ${(props) => getTypeColor(props.pokemonType)};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-2px);
  }
`;

export const InfoSection = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 1.5rem 0;
  padding: 1rem;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.backgroundLight};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    gap: 1rem;
    align-items: center;
  }
`;

export const InfoItem = styled.div`
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    font-weight: 600;
    color: ${({ theme }) => theme.colors.textLight};
    margin-bottom: 0.25rem;
  }
`;

export const StatsSection = styled.div`
  h3 {
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.colors.text};
    font-size: 1.25rem;
  }
`;

export const StatName = styled.span`
  display: inline-block;
  width: 120px;
  text-align: left;
  text-transform: capitalize;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
`;

export const StatItem = styled.div`
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  position: relative;
`;

export const StatBarContainer = styled.div`
  display: inline-flex;
  align-items: center;
  width: calc(100% - 130px);
  height: 16px;
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  border-radius: 4px;
  overflow: visible;
  position: relative;
`;

export const StatBar = styled.div<{ width: number }>`
  height: 100%;
  width: ${(props) => props.width}%;
  background: linear-gradient(to right, #ff5350, #ff7e78);
  border-radius: 4px;
  transition: width 0.6s ease-out;
`;

export const StatValue = styled.span`
  margin-left: 0.75rem;
  font-weight: 600;
  position: absolute;
  right: -40px;
  top: -3px;
  width: 36px;
  text-align: left;
`;
