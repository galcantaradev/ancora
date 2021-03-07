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
