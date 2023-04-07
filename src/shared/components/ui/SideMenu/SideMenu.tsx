import {
  Box,
  Drawer,
  IconButton,
  Input,
  InputAdornment,
  List,
  ListItem,
  useMediaQuery,
} from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

import { useUiStore } from '@/redux';
import { NavLinkList } from './components';
import { navLinks } from '@/shared/utils';

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
        <ListItem>
          <Input
            autoFocus
            type="text"
            placeholder="Search..."
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  // onClick={onSearchTerm}
                >
                  <SearchOutlinedIcon />
                </IconButton>
              </InputAdornment>
            }
            //
            // value={searchTerm}
            // onChange={e => setSearchTerm(e.target.value)}
            // onKeyUp={e => e.key === 'Enter' && onSearchTerm()}
          />
        </ListItem>

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
