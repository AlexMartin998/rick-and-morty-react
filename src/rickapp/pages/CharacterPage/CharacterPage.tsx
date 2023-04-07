import { Box, Grid, Typography, useMediaQuery } from '@mui/material';
import { useParams } from 'react-router-dom';

import { useGetCharacterQuery } from '@/redux/store/rickApi';
import { CardImage, NoCharacterFound } from '@/rickapp/shared';
import { FullScreenLoading } from '@/shared';

export interface CharacterPageProps {}

const CharacterPage: React.FC<CharacterPageProps> = () => {
  const { id = '1' } = useParams();
  const { isLoading, data: character } = useGetCharacterQuery(id);
  const isMobile = useMediaQuery('(max-width: 450px)');

  if (isLoading) return <FullScreenLoading />;
  if (!character) return <NoCharacterFound />;

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
