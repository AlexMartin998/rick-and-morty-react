import { ICharacterResponse } from '@/interfaces';
import { rickAxiosApi } from '@/shared';
import { isAxiosError } from 'axios';
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

  const searchCharacter = async ({
    pageNumber = '',
    search = '',
    status = '',
    gender = '',
    species = '',
  }) => {
    try {
      const { data } = await rickAxiosApi.get<ICharacterResponse>(
        `/character?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`
      );

      dispatch(onLoadCharacters(data));
    } catch (error) {
      if (isAxiosError(error)) {
        return dispatch(onLoadCharacters({ info: {}, results: [] }));
      }
      console.log(error);
    }
  };

  return {
    // Properties
    charactersResponse,
    isLoadingEvents,

    // Methods
    startLoadingCharacters,
    searchCharacter,
  };
};
