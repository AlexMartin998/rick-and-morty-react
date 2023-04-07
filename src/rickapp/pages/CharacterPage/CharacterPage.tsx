import { Box, Grid, Typography, useMediaQuery } from '@mui/material';
import { useLocation } from 'react-router-dom';

import { useGetCharacterQuery } from '@/redux/store/rickApi';
import { CardImage } from '@/rickapp/shared';

export interface CharacterPageProps {}

const CharacterPage: React.FC<CharacterPageProps> = () => {
  const { state } = useLocation();
  const { isLoading, data: character } = useGetCharacterQuery(
    state.characterId
  );
  const isMobile = useMediaQuery('(max-width: 450px)');

  if (isLoading || !character) return <h1>Loading</h1>;

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={7} md={6}>
        <Box width={'80%'} margin="0 auto">
          <CardImage character={character} />
        </Box>
      </Grid>

      <Grid item xs={12} sm={5} md={6}>
        <Box
          display="flex"
          flexDirection="column"
          sx={{ alignItems: `${isMobile && 'center'}` }}
        >
          <Typography variant="h1" component="h1">
            {character.name}
          </Typography>

          <Box sx={{ mt: 3 }} display="flex" flexDirection="column" gap={1}>
            <Box display="flex" flexDirection="column" alignItems="start">
              <Typography variant="subtitle1">Location:</Typography>
              <Typography variant="body1">{character.location.name}</Typography>
            </Box>
            <Box display="flex" flexDirection="column" alignItems="start">
              <Typography variant="subtitle1">Gender:</Typography>
              <Typography variant="body1">{character.gender}</Typography>
            </Box>
            <Box display="flex" flexDirection="column" alignItems="start">
              <Typography variant="subtitle1">Origin:</Typography>
              <Typography variant="body1">{character.origin.name}</Typography>
            </Box>
            <Box display="flex" flexDirection="column" alignItems="start">
              <Typography variant="subtitle1">Species:</Typography>
              <Typography variant="body1">{character.species}</Typography>
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default CharacterPage;
