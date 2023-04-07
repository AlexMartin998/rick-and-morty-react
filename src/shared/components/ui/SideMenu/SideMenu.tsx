import { Box, Drawer, List, ListItem, useMediaQuery } from '@mui/material';

import { NavLinkList } from './components';
import { navLinks } from '../Navbar/utils/navLinks';

export interface SideMenuProps {}

const SideMenu: React.FC<SideMenuProps> = () => {
  const isMobile = useMediaQuery('(max-width: 600px)');

  return (
    <Drawer
      open={true}
      // onClose={toggleMenu}
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
