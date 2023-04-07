import { useGetCharactersQuery } from '@/redux/store/rickApi';
import { Grid } from '@mui/material';
import CharacterCard from '../CharacterCard/CharacterCard';

export interface CharacterListProps {}

const CharacterList: React.FC<CharacterListProps> = () => {
  const { isLoading, data } = useGetCharactersQuery();
  !isLoading && console.log(data);

  return (
    <Grid container spacing={4}>
      {data?.results.map(character => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </Grid>
  );
};

export default CharacterList;
