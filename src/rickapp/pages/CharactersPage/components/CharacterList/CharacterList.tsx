import { useGetCharactersQuery } from '@/redux/store/rickApi';
import { Grid } from '@mui/material';

export interface CharacterListProps {}

const CharacterList: React.FC<CharacterListProps> = () => {
  const { isLoading, data } = useGetCharactersQuery('');
  !isLoading && console.log(data);

  return (
    <Grid container spacing={4}>
      Grid
    </Grid>
  );
};

export default CharacterList;
