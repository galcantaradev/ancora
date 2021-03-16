import { createContext, ReactNode, useEffect, useState } from 'react';

import { initialTrack, initialQueue } from '../utils';

interface TrackContextProps {
  track: Track;
  queue: Track[];
  isPlaying: boolean;
  currentTime: number;
  setTrack: (initialState: Track | (() => Track)) => void;
  setIsPlaying: (initialState: boolean | (() => boolean)) => void;
  togglePlayPause: () => void;
  handleQueue: (direction: Direction) => void;
  setCurrentTime: (
    initialState: number | (() => number) | ((initialState: number) => number)
  ) => void;
}

interface TrackProviderProps {
  children: ReactNode;
}

export const TrackContext = createContext<TrackContextProps>({
  track: initialTrack,
  queue: [],
  isPlaying: false,
  setTrack: () => {},
  setIsPlaying: () => {},
  togglePlayPause: () => {},
  handleQueue: () => {},
  currentTime: 0,
  setCurrentTime: () => {}
});

export const TrackProvider = ({ children }: TrackProviderProps) => {
  const [queue] = useState(initialQueue);
  const [track, setTrack] = useState(initialQueue[0]);
  const [isPlaying, setIsPlaying] = useState(false);
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

  const togglePlayPause = (): void => setIsPlaying(isPlaying => !isPlaying);

  const handleQueue = (direction: Direction): void => {
    setTrack(currentTrack => {
      const index = queue.indexOf(currentTrack);
      const cantBack = index === 0 && direction === 'previous';
      const cantGo = index === queue.length - 1 && direction === 'next';
      const cantHandleQueue = index < 0 || cantBack || cantGo;

      if (cantHandleQueue) {
        setIsPlaying(false);
        return currentTrack;
      }

      if (direction === 'previous') {
        const nextTrack = queue[index - 1];
        return nextTrack;
      }

      return queue[index + 1];
    });
  };

  return (
    <TrackContext.Provider
      value={{
        track,
        queue,
        isPlaying,
        currentTime,
        setTrack,
        togglePlayPause,
        handleQueue,
        setIsPlaying,
        setCurrentTime
      }}
    >
      {children}
    </TrackContext.Provider>
  );
};
