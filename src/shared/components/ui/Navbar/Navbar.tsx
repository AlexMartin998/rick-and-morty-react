import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Input,
  InputAdornment,
  Link,
  Toolbar,
  Typography,
} from '@mui/material';
import { useMediaQuery } from '@mui/material';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

import { useCharactersStore, useUiStore } from '@/redux';
import { CustomNavLink } from './components';
import { navLinks } from '@/shared/utils';

export interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const { toggleMenu } = useUiStore();
  const { searchCharacter } = useCharactersStore();
  const isMobile = useMediaQuery('(max-width: 600px)');
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchTerm(query);

    if (!query.trim()) return;
    searchCharacter({ search: query.trim() });
  };

  const onSearchTerm = () => {
    if (!searchTerm.trim().length) return;
    searchCharacter({ search: searchTerm.trim() });
  };

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

        {!isMobile && (
          <>
            {isSearchVisible ? (
              <Input
                autoFocus
                type="text"
                placeholder="Buscar..."
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => {
                        setIsSearchVisible(false);
                        setSearchTerm('');
                        searchCharacter({});
                      }}
                    >
                      <ClearOutlinedIcon />
                    </IconButton>
                  </InputAdornment>
                }
                className="fadeIn"
                //
                value={searchTerm}
                onChange={handleSearchChange}
                onKeyDown={e => e.key === 'Enter' && onSearchTerm()}
                sx={{ zIndex: '999' }}
              />
            ) : (
              <IconButton onClick={() => setIsSearchVisible(true)}>
                <SearchOutlinedIcon />
              </IconButton>
            )}
          </>
        )}

        {/* mobile */}
        {isMobile && (
          <IconButton onClick={toggleMenu}>
            <SearchOutlinedIcon />
          </IconButton>
        )}

        <Button onClick={toggleMenu}>Menu</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
