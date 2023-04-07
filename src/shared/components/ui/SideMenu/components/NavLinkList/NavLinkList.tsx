import {
  capitalize,
  Icon,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { Link } from 'react-router-dom';

export interface NavLinkListProps {
  path: string;
  title: string;
}

const NavLinkList: React.FC<NavLinkListProps> = ({ path, title }) => {
  return (
    <Link to={path}>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <Icon />
          </ListItemIcon>
          <ListItemText>{capitalize(title)}</ListItemText>
        </ListItemButton>
      </ListItem>
    </Link>
  );
};

export default NavLinkList;
