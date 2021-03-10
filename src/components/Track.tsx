import { AlbumImage } from './AlbumImage';
import { Media } from './Media';
import { TimeBar } from './TimeBar';

interface TrackProps {
  track: Track;
}

export const Track = ({ track }: TrackProps) => {
  const { image, music, time } = track;

  return (
    <>
      <AlbumImage src={image} />
      <h2>{music}</h2>
      <TimeBar timeInMs={time} />
      <Media />
    </>
  );
};
