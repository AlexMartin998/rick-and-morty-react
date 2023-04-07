import { ICharacterResponse } from '@/interfaces';
import { createSlice } from '@reduxjs/toolkit';

interface InitialState {
  charactersResponse: ICharacterResponse;
  isLoadingEvents: boolean;
  noCharacterFound: boolean;
}

const initialState: InitialState = {
  charactersResponse: {} as ICharacterResponse,
  isLoadingEvents: true,
  noCharacterFound: false,
};

export const characterSlice = createSlice({
  name: 'characters',
  initialState,

  reducers: {
    onLoadCharacters: (state, { payload }) => {
      state.isLoadingEvents = false;
      state.noCharacterFound = false;
      state.charactersResponse = payload;
    },
    onSetCharacterNotFount: (state, { payload }) => {
      state.noCharacterFound = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { onLoadCharacters, onSetCharacterNotFount } =
  characterSlice.actions;
