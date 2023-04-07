import { useCharactersStore } from '@/redux';
import { Stack, Pagination } from '@mui/material';

export interface CharacterPagingProps {}

const CharacterPaging: React.FC<CharacterPagingProps> = () => {
  const { charactersResponse, startLoadingCharacters } = useCharactersStore();

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    startLoadingCharacters(value);
  };

  return (
    <Stack spacing={2}>
      <Pagination
        count={charactersResponse?.info?.pages}
        color="primary"
        onChange={handleChange}
      />
    </Stack>
  );
};

export default CharacterPaging;
