import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { AppRouter } from './router';
import { AppTheme } from '@/themes';
import { store } from '@/redux/store/store';

function App() {
  return (
    <Provider store={store}>
      <AppTheme>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </AppTheme>
    </Provider>
  );
}

export default App;
