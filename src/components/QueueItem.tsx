import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext } from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { TrackContext } from '../providers';

interface QueueItemProps {
  item: Track;
}

const Container = styled.div`
  background-color: #000;
  padding: 1rem;
  height: 1rem;
  border-radius: 0.5rem;
  margin: 0.5rem;
  width: 16rem;

  span {
    display: flex;
    justify-content: space-between;
  }

  :hover {
    cursor: pointer;
  }
`;

export const QueueItem = ({ item }: QueueItemProps) => {
  const history = useHistory();
  const { track, setTrack, setIsPlaying, setCurrentTime } = useContext(
    TrackContext
  );

  const changeTrack = (nextTrack: Track): void => {
    if (nextTrack.name !== track.name) {
      setTrack(nextTrack);
      setCurrentTime(0);
    }

    setIsPlaying(true);
    history.push(`/${track.name}`);
  };

  return (
    <Container onClick={() => changeTrack(item)}>
      <span>
        {item.name}
        <FontAwesomeIcon icon="play-circle" size="1x" />
      </span>
    </Container>
  );
};
