import { createContext, ReactNode, useState } from 'react';

import { initialTrack, initialQueue } from '../utils';

interface TrackContextProps {
  track: Track;
  queue: Track[];
  isPlaying: boolean;
  setTrack: (initialState: Track | (() => Track)) => void;
  handlePlayPause: () => void;
  handleQueue: (direction: Direction) => void;
}

interface TrackProviderProps {
  children: ReactNode;
}

export const TrackContext = createContext<TrackContextProps>({
  track: initialTrack,
  queue: [],
  isPlaying: false,
  setTrack: () => {},
  handlePlayPause: () => {},
  handleQueue: () => {}
});

export const TrackProvider = ({ children }: TrackProviderProps) => {
  const [queue] = useState(initialQueue);
  const [track, setTrack] = useState(initialQueue[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = (): void => setIsPlaying(isPlaying => !isPlaying);

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
        return queue[index - 1];
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
        setTrack,
        handlePlayPause,
        handleQueue
      }}
    >
      {children}
    </TrackContext.Provider>
  );
};
