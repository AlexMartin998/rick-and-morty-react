import { Box, Grid, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';

import { useGetCharacterQuery } from '@/redux/store/rickApi';
import { CardImage } from '@/rickapp/shared';

export interface CharacterPageProps {}

const CharacterPage: React.FC<CharacterPageProps> = () => {
  const { state } = useLocation();
  const { isLoading, data: character } = useGetCharacterQuery(
    state.characterId
  );

  if (isLoading || !character) return <h1>Loading</h1>;

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={7} md={4}>
        <CardImage character={character} />
      </Grid>

      <Grid item xs={12} sm={5} md={8}>
        <Box display="flex" flexDirection="column">
          <Typography variant="h1" component="h1">
            {character.name}
          </Typography>

          <Box sx={{ mt: 3 }}>
            <Typography variant="subtitle2">Location:</Typography>
            <Typography variant="body2">{character.location.name}</Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default CharacterPage;
