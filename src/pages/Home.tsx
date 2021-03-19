import { useContext } from 'react';

import { Search, TrackItem } from '../components';
import { TrackContext } from '../providers';

export const Home = () => {
  const { search, setSearch, tracks } = useContext(TrackContext);

  return (
    <>
      <Search
        value={search}
        placeholder="What do you want to hear?"
        onChange={event => setSearch(event.target.value)}
      />
      {tracks.map(tracks => (
        <TrackItem key={tracks.name} item={tracks} />
      ))}
    </>
  );
};
