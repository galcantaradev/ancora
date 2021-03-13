import { QueueItem } from '../components';
import { initialQueue } from '../utils';

export const Queue = () => {
  return (
    <>
      {initialQueue.map(queue => (
        <QueueItem key={queue.name} item={queue} />
      ))}
    </>
  );
};
