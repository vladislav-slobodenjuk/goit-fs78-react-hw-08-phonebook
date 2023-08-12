import styled from 'styled-components';

export const Container = styled.div`
  /* display: grid; */
  /* grid-template-columns: 1fr; */
  /* grid-gap: 16px; */

  padding: 0 16px;
  padding-bottom: 16px;
  margin: 0 auto;

  width: 320px;
  color: #010101;

  transition: all 0.5s;

  @media screen and (min-width: 768px) {
    width: 768px;
    font-size: 20px;
  }

  @media screen and (min-width: 1280px) {
    width: 1280px;
  }
`;
