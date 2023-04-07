import { useDispatch, useSelector } from 'react-redux';

import { onLoadCharacters } from '../store/characters';
import { useGetCharactersPagedQuery } from '../store/rickApi';
import { RootState } from '../store/store';

interface UseCharactersStoreProps {
  pageNumber?: number;
}

export const useCharactersStore = ({
  pageNumber = 1,
}: UseCharactersStoreProps) => {
  const dispatch = useDispatch();
  const { isLoading: isLoadingCharacters, data } = useGetCharactersPagedQuery({
    page: pageNumber,
  });

  const { charactersResponse } = useSelector(
    (state: RootState) => state.characters
  );

  const startLoadingCharacters = async () => {
    dispatch(onLoadCharacters(data));
  };

  return {
    // Properties
    charactersResponse,
    isLoadingCharacters,

    // Methods
    startLoadingCharacters,
  };
};
