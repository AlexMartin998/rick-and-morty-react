/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect } from 'react';
import { Box } from '@mui/material';

import { CharacterList } from './components';
import { CharacterPaging } from '@/rickapp/shared';
import { useCharactersStore } from '@/redux';
import { FullScreenLoading } from '@/shared';

export interface CharactersPageProps {}

const CharactersPage: React.FC<CharactersPageProps> = () => {
  const { noCharacterFound, isLoadingEvents, startLoadingCharacters } =
    useCharactersStore();

  useEffect(() => {
    startLoadingCharacters(1);
  }, []);

  if (isLoadingEvents) return <FullScreenLoading />;

  return (
    <>
      <CharacterList />

      {!noCharacterFound && (
        <Box mt={9} display="flex" justifyContent="center">
          <CharacterPaging />
        </Box>
      )}
    </>
  );
};

export default CharactersPage;
