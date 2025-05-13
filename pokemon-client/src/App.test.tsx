import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";
import { getPokemonById } from "./services/api";

jest.mock("./services/api");
const mockedGetPokemonById = getPokemonById as jest.MockedFunction<
  typeof getPokemonById
>;

// Données de test pour un Pokémon
const mockPokemon = {
  id: 25,
  name: "pikachu",
  height: 40,
  weight: 60,
  types: ["electric"],
  stats: [
    { name: "hp", value: 35 },
    { name: "attack", value: 55 },
    { name: "defense", value: 40 },
    { name: "special-attack", value: 50 },
    { name: "special-defense", value: 50 },
    { name: "speed", value: 90 },
  ],
  sprites: {
    front_default:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
  },
};

describe("App Component", () => {
  beforeEach(() => {
    // Reset des mocks avant chaque test
    jest.clearAllMocks();
  });

  test("affiche correctement le titre de l'application", () => {
    render(<App />);
    const headerElement = screen.getByText("Pokédex");
    expect(headerElement).toBeInTheDocument();
  });

  test("affiche le formulaire de recherche", () => {
    render(<App />);
    const searchLabel = screen.getByText(/entrez le numéro du pokémon/i);
    const searchInput = screen.getByPlaceholderText(/ex: 25 pour pikachu/i);
    const searchButton = screen.getByText(/rechercher/i);

    expect(searchLabel).toBeInTheDocument();
    expect(searchInput).toBeInTheDocument();
    expect(searchButton).toBeInTheDocument();
  });

  test("affiche un message vide au chargement initial", () => {
    render(<App />);
    const emptyMessage = screen.getByText(
      /recherchez un pokémon par son numéro/i
    );
    expect(emptyMessage).toBeInTheDocument();
  });

  test("effectue une recherche et affiche les détails du Pokémon", async () => {
    mockedGetPokemonById.mockResolvedValue(mockPokemon);

    render(<App />);

    // Saisit l'ID du Pokémon et soumet le formulaire
    const searchInput = screen.getByPlaceholderText(/ex: 25 pour pikachu/i);
    fireEvent.change(searchInput, { target: { value: "25" } });

    const searchButton = screen.getByText(/rechercher/i);
    fireEvent.click(searchButton);

    expect(screen.getByText(/chargement du pokémon/i)).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText(/#025 pikachu/i)).toBeInTheDocument();
    });

    expect(mockedGetPokemonById).toHaveBeenCalledWith(25);

    expect(screen.getByText(/types/i)).toBeInTheDocument();
    expect(screen.getByText(/electric/i)).toBeInTheDocument();
    expect(screen.getByText(/taille/i)).toBeInTheDocument();
    expect(screen.getByText(/poids/i)).toBeInTheDocument();
    expect(screen.getByText(/statistiques/i)).toBeInTheDocument();

    const pokemonImage = screen.getByAltText("pikachu");
    expect(pokemonImage).toBeInTheDocument();
    expect(pokemonImage).toHaveAttribute(
      "src",
      mockPokemon.sprites.front_default
    );
  });

  test("affiche un message d'erreur en cas d'échec de la requête", async () => {
    // Configure le mock pour simuler une erreur
    mockedGetPokemonById.mockRejectedValue(new Error("API error"));

    render(<App />);

    const searchInput = screen.getByPlaceholderText(/ex: 25 pour pikachu/i);
    fireEvent.change(searchInput, { target: { value: "9999" } });

    const searchButton = screen.getByText(/rechercher/i);
    fireEvent.click(searchButton);

    expect(screen.getByText(/chargement du pokémon/i)).toBeInTheDocument();

    await waitFor(() => {
      expect(
        screen.getByText(/impossible de trouver ce pokémon/i)
      ).toBeInTheDocument();
    });
  });

  test("n'effectue aucune recherche si l'entrée est invalide", () => {
    render(<App />);

    // Tente de soumettre le formulaire avec une entrée vide
    const searchInput = screen.getByPlaceholderText(/ex: 25 pour pikachu/i);
    fireEvent.change(searchInput, { target: { value: "" } });

    const searchButton = screen.getByText(/rechercher/i);
    fireEvent.click(searchButton);

    expect(mockedGetPokemonById).not.toHaveBeenCalled();
  });
});

describe("PokemonSearch Component", () => {
  test("appelle la fonction onSearch avec l'ID correct lors de la soumission", () => {
    render(<App />);

    // Saisit l'ID du Pokémon et soumet le formulaire
    const searchInput = screen.getByPlaceholderText(/ex: 25 pour pikachu/i);
    fireEvent.change(searchInput, { target: { value: "25" } });

    const searchButton = screen.getByText(/rechercher/i);
    fireEvent.click(searchButton);

    expect(searchInput).toHaveValue(25);
  });

  test("n'appelle pas onSearch avec des entrées invalides", () => {

    render(<App />);

    const searchInput = screen.getByPlaceholderText(/ex: 25 pour pikachu/i);
    fireEvent.change(searchInput, { target: { value: "-1" } });

    const searchButton = screen.getByText(/rechercher/i);
    fireEvent.click(searchButton);

    expect(mockedGetPokemonById).not.toHaveBeenCalled();
  });
});

describe("PokemonCard Component", () => {
  test("affiche correctement les détails du Pokémon", async () => {
    mockedGetPokemonById.mockResolvedValue(mockPokemon);

    render(<App />);

    const searchInput = screen.getByPlaceholderText(/ex: 25 pour pikachu/i);
    fireEvent.change(searchInput, { target: { value: "25" } });

    const searchButton = screen.getByText(/rechercher/i);
    fireEvent.click(searchButton);

    const pokemonHeader = await screen.findByText(/#025 pikachu/i);
    expect(pokemonHeader).toBeInTheDocument();

    expect(screen.getByText(/electric/i)).toBeInTheDocument();
    expect(screen.getByText(/4.0 m/i)).toBeInTheDocument();
    expect(screen.getByText(/6.0 kg/i)).toBeInTheDocument();

    const stats = [
      "hp",
      "attack",
      "defense",
      "special-attack",
      "special-defense",
      "speed",
    ];

    stats.forEach((stat) => {
      const elements = screen.queryAllByText((content, element) => {
        return (
          content.toLowerCase() === stat &&
          element !== null &&
          element.tagName.toLowerCase() === "span"
        );
      });
      expect(elements.length).toBeGreaterThan(0);
    });
    expect(screen.getByText("35")).toBeInTheDocument();
    expect(screen.getByText("55")).toBeInTheDocument();
    expect(screen.getByText("90")).toBeInTheDocument();
  });

  test("affiche le message vide lorsqu'aucun Pokémon n'est chargé", () => {
    render(<App />);
    expect(
      screen.getByText(/recherchez un pokémon par son numéro/i)
    ).toBeInTheDocument();
  });
});
