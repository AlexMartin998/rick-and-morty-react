import { CssBaseline, ThemeProvider } from '@mui/material';

import { lightTheme } from '../light-theme';

export interface AppThemeProps {
  children: React.ReactNode;
}

const AppTheme: React.FC<AppThemeProps> = ({ children }: AppThemeProps) => {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default AppTheme;
