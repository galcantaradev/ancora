import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';

import { Meter } from './Meter';
import { TrackContext } from '../providers';
import { msToMinutes } from '../utils';

const Container = styled.div`
  align-items: center;
  display: flex;
  width: 100%;
`;

const Minute = styled.span`
  font-size: 10px;
  margin: 1rem;
`;

export const TimeBar = () => {
  const { track, isPlaying } = useContext(TrackContext);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (isPlaying && currentTime < track.time) {
      intervalId = setInterval(() => {
        setCurrentTime(prevTime => prevTime + 1000);
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [track.time, currentTime, isPlaying]);

  return (
    <Container>
      <Minute>{msToMinutes(currentTime)}</Minute>
      <Meter min={0} max={track.time} value={currentTime} />
      <Minute>{msToMinutes(track.time - currentTime)}</Minute>
    </Container>
  );
};
