import styled from 'styled-components';

import { AlbumImage } from './AlbumImage';

const Container = styled.div`
  align-items: center;
  background-color: #999;
  border: 4px solid #000;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  height: 40rem;
  padding: 1rem;
  width: 20rem;
`;

export const Player = () => {
  return (
    <Container>
      <AlbumImage />
    </Container>
  );
};
