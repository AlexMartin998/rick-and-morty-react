import { useLocation } from 'react-router-dom';

import { useGetCharacterQuery } from '@/redux/store/rickApi';
import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  Chip,
  Grid,
  Typography,
} from '@mui/material';

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
        <Card>
          <CardActionArea>
            <Chip
              label={character.status}
              color="primary"
              sx={{
                position: 'absolute',
                zIndex: 99,
                top: '10px',
                left: '10px',
              }}
            />

            <CardMedia
              component="img"
              image={character.image}
              alt={character.name}
              className="fadeIn"
            />
          </CardActionArea>
        </Card>
      </Grid>

      <Grid item xs={12} sm={5} md={8}>
        <Box display="flex" flexDirection="column">
          {/* titles */}
          <Typography variant="h1" component="h1">
            {character.name}
          </Typography>

          {/* Description: */}
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
