import { Box, Drawer, List, useMediaQuery } from '@mui/material';

import { NavLinkList } from './components';
import { navLinks } from '../Navbar/utils/navLinks';
import { useUiStore } from '@/redux';

export interface SideMenuProps {}

const SideMenu: React.FC<SideMenuProps> = () => {
  const { isMenuOpen, toggleMenu } = useUiStore();
  const isMobile = useMediaQuery('(max-width: 600px)');

  return (
    <Drawer
      open={isMenuOpen}
      onClose={toggleMenu}
      anchor="right"
      sx={{ backdropFilter: 'blur(4px)', transition: 'all 0.5s ease-out' }}
    >
      <Box sx={{ width: 250, paddingTop: 5 }}>
        <List>
          {isMobile &&
            navLinks.map(navLink => (
              <NavLinkList key={navLink.path} {...navLink} />
            ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default SideMenu;
