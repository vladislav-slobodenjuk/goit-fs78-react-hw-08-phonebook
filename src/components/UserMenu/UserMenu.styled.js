import styled from 'styled-components';

export const StyledUserMenu = styled.div`
  p {
    display: inline-flex;
    margin-right: 10px;
    font-weight: 700;
  }

  button {
    padding: 6px;

    font-weight: 700;
    font-size: 16px;
    color: black;

    border-radius: 4px;
    border: 1px solid black;

    transition: 0.2s all;

    &.active,
    &:hover {
      color: white;
      background-color: orangered;
    }
  }
`;
