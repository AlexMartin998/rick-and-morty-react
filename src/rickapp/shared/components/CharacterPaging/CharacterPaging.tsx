import { useCharactersStore } from '@/redux';
import { Stack, Pagination } from '@mui/material';

export interface CharacterPagingProps {}

const CharacterPaging: React.FC<CharacterPagingProps> = () => {
  const { startLoadingCharacters } = useCharactersStore();

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    startLoadingCharacters(value);
  };

  return (
    <Stack spacing={2}>
      <Pagination count={10} color="primary" onChange={handleChange} />
    </Stack>
  );
};

export default CharacterPaging;
