import { Card, CardActionArea, CardMedia, Chip } from '@mui/material';

import { ICharacter } from '@/interfaces';

export interface CardImageProps {
  character: ICharacter;
}

const CardImage: React.FC<CardImageProps> = ({ character }) => {
  return (
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
  );
};

export default CardImage;
