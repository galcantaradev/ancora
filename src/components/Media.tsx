import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext } from 'react';
import styled from 'styled-components';
import { TrackContext } from '../providers';

const MediaContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 14rem;

  svg {
    :hover {
      cursor: pointer;
    }
  }
`;

export const Media = () => {
  const { isPlaying, handlePlayPause, handleQueue } = useContext(TrackContext);

  return (
    <MediaContainer>
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
    </MediaContainer>
  );
};
