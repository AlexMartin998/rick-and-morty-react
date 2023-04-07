import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';

export interface CustomNavLinkProps {
  path: string;
  title: string;
}

const CustomNavLink: React.FC<CustomNavLinkProps> = ({ path, title }) => {
  return (
    <NavLink to={path}>
      <Button>{title}</Button>
    </NavLink>
  );
};

export default CustomNavLink;
