import { ICharacterResponse } from '@/interfaces';
import { rickAxiosApi } from '@/shared';
import { isAxiosError } from 'axios';
import { useDispatch, useSelector } from 'react-redux';

import { onLoadCharacters, onSetCharacterNotFount } from '../store/characters';
import { RootState } from '../store/store';

export const useCharactersStore = () => {
  const dispatch = useDispatch();

  const { charactersResponse, isLoadingEvents, noCharacterFound } = useSelector(
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
        dispatch(onLoadCharacters({ info: {}, results: [] }));
        dispatch(onSetCharacterNotFount(true));
      }
      console.log(error);
    }
  };

  return {
    // Properties
    charactersResponse,
    isLoadingEvents,
    noCharacterFound,

    // Methods
    startLoadingCharacters,
    searchCharacter,
  };
};
