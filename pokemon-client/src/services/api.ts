import axios from 'axios';
import { Pokemon } from '../types/Pokemon';

const API_URL = 'http://localhost:3001';

export const getPokemonById = async (id: number): Promise<Pokemon> => {
  try {
    const response = await axios.get<Pokemon>(`${API_URL}/pokemon/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching pokemon:', error);
    throw error;
  }
};