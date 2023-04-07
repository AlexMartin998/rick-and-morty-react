import { Box } from '@mui/material';

import { CharacterList } from './components';
import { CharacterPaging } from '@/rickapp/shared';

export interface CharactersPageProps {}

const CharactersPage: React.FC<CharactersPageProps> = () => {
  return (
    <>
      <CharacterList />

      <Box mt={9} display="flex" justifyContent="center">
        <CharacterPaging />
      </Box>
    </>
  );
};

export default CharactersPage;
