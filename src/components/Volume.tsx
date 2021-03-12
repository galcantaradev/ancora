import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

import { Meter } from './Meter';

const Container = styled.div`
  align-items: center;
  display: flex;
  width: 100%;

  svg {
    margin: 1rem;
  }
`;

export const Volume = () => {
  return (
    <Container>
      <FontAwesomeIcon icon="volume-off" size="sm" />
      <Meter />
      <FontAwesomeIcon icon="volume-up" size="sm" />
    </Container>
  );
};
