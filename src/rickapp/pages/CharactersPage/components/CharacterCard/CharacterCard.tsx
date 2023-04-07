import { Link } from 'react-router-dom';
import {
  Card,
  CardActionArea,
  CardMedia,
  Grid,
  Box,
  Typography,
  Chip,
} from '@mui/material';

import { IResultCharacter } from '@/interfaces';

export interface CharacterCardProps {
  character: IResultCharacter;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Link
        to={`/characters/${character.id}`}
        state={{ characterId: character.id }}
      >
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

        <Box
          className="fadeIn"
          display="flex"
          flexDirection="column"
          gap={1}
          mt={2}
        >
          <Box display="flex" justifyContent="space-between">
            <Typography variant="h2" fontWeight={700}>
              {character.name}
            </Typography>
            <Typography variant="body1" fontWeight={500} color="#2a9d8f">
              {character.species}
            </Typography>
          </Box>

          <Box>
            <Typography variant="subtitle1" fontWeight={400}>
              Last Location: {character.location.name}
            </Typography>
          </Box>
        </Box>
      </Link>
    </Grid>
  );
};

export default CharacterCard;
