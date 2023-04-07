import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../store/store';
import { onToggleMenu } from '@/redux/store/ui';

export const useUiStore = () => {
  const dispatch = useDispatch();

  const { isMenuOpen } = useSelector((state: RootState) => state.ui);

  const toggleMenu = () => {
    dispatch(onToggleMenu());
  };

  return {
    // Properties
    isMenuOpen,

    // Methods
    toggleMenu,
  };
};
