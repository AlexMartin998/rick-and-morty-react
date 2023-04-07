import { ICharacterResponse } from '@/interfaces';
import { rickAxiosApi } from '@/shared';
import { useDispatch, useSelector } from 'react-redux';

import { onLoadCharacters } from '../store/characters';
import { RootState } from '../store/store';

export const useCharactersStore = () => {
  const dispatch = useDispatch();

  const { charactersResponse, isLoadingEvents } = useSelector(
    (state: RootState) => state.characters
  );

  const startLoadingCharacters = async (page: number) => {
    try {
      const { data } = await rickAxiosApi.get<ICharacterResponse>(
        `/character?page=${page}`
      );

      dispatch(onLoadCharacters(data));
    } catch (error) {
      console.log(error);
    }
  };

  return {
    // Properties
    charactersResponse,
    isLoadingEvents,

    // Methods
    startLoadingCharacters,
  };
};
