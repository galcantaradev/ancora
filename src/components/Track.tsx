import { AlbumImage } from './AlbumImage';
import { TimeBar } from './TimeBar';

interface TrackProps {
  track: Track;
}

export const Track = ({ track }: TrackProps) => {
  const { album, artist, image, music, time } = track;

  return (
    <>
      <AlbumImage src={image} />
      <h2>{music}</h2>
      <small>
        {artist} - {album}
      </small>
      <TimeBar timeInMs={time} />
    </>
  );
};
