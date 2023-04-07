import { ICharacterResponse } from '@/interfaces';
import { createSlice } from '@reduxjs/toolkit';

interface InitialState {
  charactersResponse: ICharacterResponse;
  isLoadingEvents: boolean;
}

const initialState: InitialState = {
  charactersResponse: {} as ICharacterResponse,
  isLoadingEvents: true,
};

export const characterSlice = createSlice({
  name: 'characters',
  initialState,

  reducers: {
    onLoadCharacters: (state, { payload }) => {
      state.isLoadingEvents = false;
      state.charactersResponse = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { onLoadCharacters } = characterSlice.actions;
