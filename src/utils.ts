// converters

export const SECOND_IN_MS = 1000;

export const MINUTE_IN_MS = 60000;

export const minutesToMs = (minutes: number, seconds: number): number => {
  const mins = minutes * MINUTE_IN_MS;
  const secs = seconds * SECOND_IN_MS;

  return mins + secs;
};

export const msToMinutes = (ms: number): string => {
  const minutes = Math.floor(ms / MINUTE_IN_MS);
  const seconds = Number(((ms % MINUTE_IN_MS) / SECOND_IN_MS).toFixed(0));

  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
};

// track

export const initialTrack: Track = {
  album: '',
  artist: '',
  image: '',
  name: '',
  time: 0
};

export const astrothunder: Track = {
  album: 'Astroworld',
  name: 'ASTROTHUNDER',
  artist: 'Travis Scott',
  image: 'https://upload.wikimedia.org/wikipedia/pt/6/63/Astroworld_Travis.jpg',
  time: minutesToMs(2, 23)
};

export const sickomode: Track = {
  album: 'Astroworld',
  name: 'SICKO MODE',
  artist: 'Travis Scott',
  image: 'https://upload.wikimedia.org/wikipedia/pt/6/63/Astroworld_Travis.jpg',
  time: minutesToMs(5, 12)
};

export const stargazing: Track = {
  album: 'Astroworld',
  name: 'STARGAZING',
  artist: 'Travis Scott',
  image: 'https://upload.wikimedia.org/wikipedia/pt/6/63/Astroworld_Travis.jpg',
  time: minutesToMs(4, 30)
};

export const initialQueue = [astrothunder, sickomode, stargazing];
