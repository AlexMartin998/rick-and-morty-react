import { ICharacterResponse } from '@/interfaces';
import { createSlice } from '@reduxjs/toolkit';

interface InitialState {
  charactersResponse: ICharacterResponse;
}

const initialState: InitialState = {
  charactersResponse: {} as ICharacterResponse,
};

export const characterSlice = createSlice({
  name: 'characters',
  initialState,

  reducers: {
    onLoadCharacters: (state, { payload }) => {
      state.charactersResponse = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { onLoadCharacters } = characterSlice.actions;
