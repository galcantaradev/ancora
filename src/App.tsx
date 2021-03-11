import './icons/Library';

import styled from 'styled-components';

import { Header, Track } from './components';
import { GlobalStyle } from './theme';
import { TrackProvider } from './providers';

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

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <TrackProvider>
          <Header />
          <Track />
        </TrackProvider>
      </Container>
    </>
  );
};

export default App;
