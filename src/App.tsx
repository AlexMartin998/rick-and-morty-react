import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './router';

import { AppTheme } from '@/themes';

function App() {
  return (
    <AppTheme>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </AppTheme>
  );
}

export default App;
