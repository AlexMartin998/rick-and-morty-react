import { Navigate, Route, Routes } from 'react-router-dom';

import { PublicLayout } from '@/layouts';
import { CharacterPage, CharactersPage } from '@/rickapp';

export interface AppRouterProps {}

const AppRouter: React.FC<AppRouterProps> = () => {
  return (
    <Routes>
      <Route path="/" element={<PublicLayout />}>
        <Route index element={<CharactersPage />} />
        <Route path="characters/:id" element={<CharacterPage />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
