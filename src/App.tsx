import './icons/Library';

import styled from 'styled-components';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Header } from './components';
import { Queue, Track } from './pages';
import { TrackProvider } from './providers';
import { GlobalStyle } from './theme';

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
    <BrowserRouter>
      <GlobalStyle />
      <Container>
        <TrackProvider>
          <Header />
          <Switch>
            <Route path="/" component={Queue} exact />
            <Route path="/:track" component={Track} />
          </Switch>
        </TrackProvider>
      </Container>
    </BrowserRouter>
  );
};

export default App;
