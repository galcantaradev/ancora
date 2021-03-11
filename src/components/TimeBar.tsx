import { useContext, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import { TrackContext } from '../providers';
import { msToMinutes } from '../utils';

const TimeBarContainer = styled.div`
  align-items: center;
  display: flex;
`;

const MinuteTracker = styled.span`
  font-size: 10px;
  margin: 1rem;
`;

const Meter = styled.meter`
  width: 14rem;
`;

export const TimeBar = () => {
  const { track, isPlaying } = useContext(TrackContext);
  const maxTime = useRef(track.time);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    setCurrentTime(0);
  }, [track]);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (isPlaying && currentTime < maxTime.current) {
      intervalId = setInterval(() => {
        setCurrentTime(prevTime => prevTime + 1000);
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [currentTime, isPlaying]);

  return (
    <TimeBarContainer>
      <MinuteTracker>{msToMinutes(currentTime)}</MinuteTracker>
      <Meter min={0} max={maxTime.current} value={currentTime} />
      <MinuteTracker>
        {msToMinutes(maxTime.current - currentTime)}
      </MinuteTracker>
    </TimeBarContainer>
  );
};
