import { useEffect } from 'react';
import { Grid } from '@mui/material';

import { useCharactersStore } from '@/redux';
import CharacterCard from '../CharacterCard/CharacterCard';

export interface CharacterListProps {}

const CharacterList: React.FC<CharacterListProps> = () => {
  const { charactersResponse, isLoadingCharacters, startLoadingCharacters } =
    useCharactersStore({ pageNumber: 1 });

  useEffect(() => {
    !isLoadingCharacters && startLoadingCharacters();
  }, [isLoadingCharacters, startLoadingCharacters]);

  if (isLoadingCharacters || !charactersResponse?.results?.length)
    return <h1>Loading</h1>;

  return (
    <Grid container spacing={4}>
      {charactersResponse.results.map(character => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </Grid>
  );
};

export default CharacterList;
