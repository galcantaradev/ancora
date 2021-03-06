import styled from 'styled-components';

import { AlbumImage } from './AlbumImage';
import { Header } from './Header';

const Container = styled.div`
  align-items: center;
  background-color: #111;
  border: 4px solid #000;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  height: 40rem;
  width: 20rem;
`;

export const Player = () => {
  return (
    <Container>
      <Header />
      <AlbumImage src="https://upload.wikimedia.org/wikipedia/pt/6/63/Astroworld_Travis.jpg" />
      <h2>ASTROTHUNDER</h2>
      <small>Travis Scott - Astroworld</small>
    </Container>
  );
};
