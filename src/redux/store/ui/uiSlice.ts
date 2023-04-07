import { createSlice } from '@reduxjs/toolkit';

interface InitialState {
  isMenuOpen: boolean;
}

const initialState: InitialState = {
  isMenuOpen: false,
};

export const uiSlice = createSlice({
  name: 'ui',

  initialState,

  reducers: {
    onToggleMenu: (state): void => {
      state.isMenuOpen = !state.isMenuOpen;
    },
  },
});

// Action creators are generated for each case reducer function
export const { onToggleMenu } = uiSlice.actions;
