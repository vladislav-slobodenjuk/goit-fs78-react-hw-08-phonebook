import { StyledNavLink } from 'components/NavLink/NavLink.styled';

export const AuthNav = () => {
  return (
    <div>
      <StyledNavLink to="/register">Register</StyledNavLink>
      <StyledNavLink to="/login">Login</StyledNavLink>
    </div>
  );
};
