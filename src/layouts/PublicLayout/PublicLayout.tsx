import { Outlet } from 'react-router-dom';

import { Navbar } from '@/shared';

export interface PublicLayoutProps {}

const PublicLayout: React.FC<PublicLayoutProps> = () => {
  return (
    <>
      <nav>
        <Navbar />
      </nav>

      <main
        style={{ margin: '80px auto', maxWidth: '1440px', padding: '0 30px' }}
      >
        <Outlet />
      </main>

      <footer></footer>
    </>
  );
};

export default PublicLayout;
