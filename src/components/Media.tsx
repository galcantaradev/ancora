import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext } from 'react';
import styled from 'styled-components';

import { TrackContext } from '../providers';

const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-around;
  width: 100%;

  svg {
    :hover {
      cursor: pointer;
    }
  }
`;

export const Media = () => {
  const { isPlaying, handlePlayPause, handleQueue } = useContext(TrackContext);

  return (
    <Container>
      <FontAwesomeIcon
        icon="arrow-left"
        color="white"
        size="lg"
        onClick={() => handleQueue('previous')}
      />
      {!isPlaying && (
        <FontAwesomeIcon
          icon="play-circle"
          color="white"
          size="3x"
          onClick={handlePlayPause}
        />
      )}
      {isPlaying && (
        <FontAwesomeIcon
          icon="pause-circle"
          color="white"
          size="3x"
          onClick={handlePlayPause}
        />
      )}
      <FontAwesomeIcon
        icon="arrow-right"
        color="white"
        size="lg"
        onClick={() => handleQueue('next')}
      />
    </Container>
  );
};
