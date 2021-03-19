import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { TrackContext } from '../providers';

import { Paragraph } from './Paragraph';

const Container = styled.header`
  background-color: #000;
  border-radius: 5px 5px 0 0;
  height: 3rem;
  width: inherit;
  position: sticky;
  text-align: center;

  p {
    display: inline-block;
    margin-top: 0.75rem;
  }

  svg {
    position: absolute;
    margin-top: 0.75rem;

    :first-child {
      left: 0.5rem;
    }
  }
`;

export const Header = () => {
  const history = useHistory();
  const { track } = useContext(TrackContext);
  const [isHome, setIsHome] = useState(true);

  useEffect(() => {
    history.listen(location => {
      setIsHome(location.pathname === '/');
    });
  }, [history]);

  return (
    <Container>
      {!isHome && (
        <FontAwesomeIcon icon="chevron-left" onClick={history.goBack} />
      )}
      <Paragraph>{isHome ? 'Playa' : track.name}</Paragraph>
    </Container>
  );
};
