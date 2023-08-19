import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 16px;

  width: 370px;

  font-size: 20px;
  color: #010101;

  h1,
  h2 {
    margin-bottom: 20px;
  }

  input {
    border-radius: 5px;
    border: 1px solid #7d8c9b;
  }

  input {
    padding: 3px 5px;
  }

  button {
    cursor: pointer;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
  }
  /* @media screen and (min-width: 1280px) {
    width: 1280px;
  } */
`;
