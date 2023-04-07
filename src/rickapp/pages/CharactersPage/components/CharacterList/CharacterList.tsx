/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { Grid } from '@mui/material';

import { useCharactersStore } from '@/redux';
import CharacterCard from '../CharacterCard/CharacterCard';

export interface CharacterListProps {}

const CharacterList: React.FC<CharacterListProps> = () => {
  const { charactersResponse, isLoadingEvents, startLoadingCharacters } =
    useCharactersStore();

  useEffect(() => {
    startLoadingCharacters(1);
  }, []);

  if (isLoadingEvents) return <h1>Loading</h1>;

  return (
    <Grid container spacing={4}>
      {charactersResponse.results.map(character => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </Grid>
  );
};

export default CharacterList;
