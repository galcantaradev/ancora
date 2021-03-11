import { useContext } from 'react';

import { AlbumImage } from './AlbumImage';
import { Media } from './Media';
import { TimeBar } from './TimeBar';
import { TrackContext } from '../providers';

export const Track = () => {
  const { track } = useContext(TrackContext);

  return (
    <>
      <AlbumImage src={track.image} />
      <h2>{track.name}</h2>
      <TimeBar />
      <Media />
    </>
  );
};
