import { Grid } from '@mui/material';

import { useCharactersStore } from '@/redux';
import { NoCharacterFound } from '@/rickapp/shared';
import CharacterCard from '../CharacterCard/CharacterCard';

export interface CharacterListProps {}

const CharacterList: React.FC<CharacterListProps> = () => {
  const { charactersResponse } = useCharactersStore();

  return (
    <Grid container spacing={4}>
      {charactersResponse.results.length ? (
        <>
          {charactersResponse.results.map(character => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </>
      ) : (
        <NoCharacterFound />
      )}
    </Grid>
  );
};

export default CharacterList;
