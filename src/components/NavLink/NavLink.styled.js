import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
  display: inline-block;
  padding: 8px;

  font-weight: 700;
  color: black;

  border-radius: 4px;
  text-decoration: none;

  transition: 0.2s all;

  &.active,
  &:hover {
    color: white;
    background-color: orangered;
  }

  &:not(:last-child) {
    margin-right: 5px;
  }
`;
