import { useContext } from 'react';
import styled from 'styled-components';

import { AlbumImage, Media, TimeBar, Title, Paragraph } from '../components';
import { TrackContext } from '../providers';

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: inherit;
  justify-content: space-evenly;
  width: 100%;
`;

const AlbumInfo = styled.div`
  text-align: center;
`;

const TrackInfo = styled.div`
  text-align: center;
  width: 100%;
`;

export const Track = () => {
  const { track } = useContext(TrackContext);

  return (
    <Container>
      <AlbumInfo>
        <AlbumImage src={track.image} />
        <Paragraph>{track.album}</Paragraph>
      </AlbumInfo>

      <TrackInfo>
        <Title>{track.name}</Title>
        <TimeBar />
      </TrackInfo>

      <Media />
    </Container>
  );
};
