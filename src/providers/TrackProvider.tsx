import { createContext, ReactNode, useState } from 'react';

import { initialTrack, initialQueue } from '../utils';

interface TrackContextProps {
  track: Track;
  queue: Track[];
  isPlaying: boolean;
  setTrack: (initialState: Track | (() => Track)) => void;
  setIsPlaying: (initialState: boolean | (() => boolean)) => void;
  togglePlayPause: () => void;
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
  setIsPlaying: () => {},
  togglePlayPause: () => {},
  handleQueue: () => {}
});

export const TrackProvider = ({ children }: TrackProviderProps) => {
  const [queue] = useState(initialQueue);
  const [track, setTrack] = useState(initialQueue[0]);
  const [isPlaying, setIsPlaying] = useState(false);

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
        setTrack,
        togglePlayPause,
        handleQueue,
        setIsPlaying
      }}
    >
      {children}
    </TrackContext.Provider>
  );
};
