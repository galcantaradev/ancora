import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import styled from 'styled-components';

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
  const [isPlaying, setIsPlaying] = useState(true);

  const handlePlayPause = () => setIsPlaying(isPlaying => !isPlaying);

  return (
    <MediaContainer>
      <FontAwesomeIcon icon="arrow-left" color="white" size="lg" />
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
      <FontAwesomeIcon icon="arrow-right" color="white" size="lg" />
    </MediaContainer>
  );
};
