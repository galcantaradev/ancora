import styled from 'styled-components';

import { Header, Track } from './components';
import { GlobalStyle } from './theme';
import { minutesToMs } from './utils';

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

const currentTrack = {
  album: 'Astroworld',
  music: 'ASTROTHUNDER',
  artist: 'Travis Scott',
  image: 'https://upload.wikimedia.org/wikipedia/pt/6/63/Astroworld_Travis.jpg',
  time: minutesToMs(2, 23)
};

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Header />
        <Track track={currentTrack} />
      </Container>
    </>
  );
};

export default App;
