import { AppBar, Box, Link, Toolbar, Typography } from '@mui/material';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { CustomNavLink } from './components';
import { navLinks } from './utils';

export interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  return (
    <AppBar>
      <Toolbar>
        <NavLink to="/">
          <Link component="span" display="flex" alignItems="center">
            <Typography variant="h6">Rick &</Typography>
            <Typography sx={{ ml: 0.5 }}>Morty</Typography>
          </Link>
        </NavLink>

        <Box flex={1} />

        <Box
          sx={{
            display: isSearchVisible
              ? { xs: 'none', md: 'block' }
              : { xs: 'none', sm: 'block' },
          }}
        >
          <Box>
            {navLinks.map(({ path, title }) => (
              <CustomNavLink key={path} path={path} title={title} />
            ))}
          </Box>
        </Box>

        <Box flex={1} />

        
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
