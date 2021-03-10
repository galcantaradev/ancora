import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import { msToMinutes } from '../utils';

interface TimeBarProps {
  timeInMs: number;
}

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

export const TimeBar = ({ timeInMs }: TimeBarProps) => {
  const maxTime = useRef(timeInMs);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    let intervalId: any;

    if (currentTime < maxTime.current) {
      intervalId = setInterval(() => {
        setCurrentTime(prevTime => prevTime + 1000);
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [currentTime]);

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
