import { createContext, ReactNode, useEffect, useState } from 'react';

import { initialTrack, initialTracks } from '../utils';

interface TrackContextProps {
  search: string;
  setSearch: (initialState: string) => void;
  track: Track;
  tracks: Track[];
  isPlaying: boolean;
  currentTime: number;
  setTrack: (initialState: Track | (() => Track)) => void;
  setIsPlaying: (initialState: boolean | (() => boolean)) => void;
  togglePlayPause: () => void;
  handleTrack: (direction: Direction) => void;
  setCurrentTime: (
    initialState: number | (() => number) | ((initialState: number) => number)
  ) => void;
}

interface TrackProviderProps {
  children: ReactNode;
}

export const TrackContext = createContext<TrackContextProps>({
  track: initialTrack,
  search: '',
  setSearch: () => {},
  tracks: [],
  isPlaying: false,
  setTrack: () => {},
  setIsPlaying: () => {},
  togglePlayPause: () => {},
  handleTrack: () => {},
  currentTime: 0,
  setCurrentTime: () => {}
});

export const TrackProvider = ({ children }: TrackProviderProps) => {
  const [tracks] = useState(initialTracks);
  const [search, setSearch] = useState('');
  const [filteredTracks, setfilteredTracks] = useState(tracks);
  const [track, setTrack] = useState(tracks[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    const filtered = tracks.filter(q => {
      const s = search.toLowerCase();

      return (
        q.album.toLowerCase().includes(s) ||
        q.artist.toLowerCase().includes(s) ||
        q.name.toLowerCase().includes(s)
      );
    });

    setfilteredTracks(filtered);

    // eslint-disable-next-line
  }, [search]);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (isPlaying && currentTime < track.time) {
      intervalId = setInterval(() => {
        setCurrentTime(prevTime => prevTime + 1000);
      }, 1000);
    }

    if (currentTime >= track.time) {
      handleTrack('next');
    }

    return () => {
      clearInterval(intervalId);
    };

    // eslint-disable-next-line
  }, [track.time, currentTime, isPlaying]);

  const togglePlayPause = (): void => setIsPlaying(isPlaying => !isPlaying);

  const handleTrack = (direction: Direction): void => {
    setTrack(currentTrack => {
      const index = tracks.indexOf(currentTrack);
      const cantBack = index === 0 && direction === 'previous';
      const cantGo = index === tracks.length - 1 && direction === 'next';
      const canthandleTrack = index < 0 || cantBack || cantGo;

      setCurrentTime(0);

      if (canthandleTrack) {
        setIsPlaying(false);
        return tracks[0];
      }

      if (direction === 'previous') {
        const nextTrack = tracks[index - 1];
        return nextTrack;
      }

      return tracks[index + 1];
    });
  };

  return (
    <TrackContext.Provider
      value={{
        track,
        search,
        setSearch,
        tracks: filteredTracks,
        isPlaying,
        currentTime,
        setTrack,
        togglePlayPause,
        handleTrack,
        setIsPlaying,
        setCurrentTime
      }}
    >
      {children}
    </TrackContext.Provider>
  );
};
