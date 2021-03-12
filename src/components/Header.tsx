import { useContext } from 'react';
import styled from 'styled-components';
import { TrackContext } from '../providers';
import { Paragraph } from './Paragraph';

const Container = styled.header`
  align-items: center;
  background-color: #000;
  border-radius: 5px 5px 0 0;
  display: flex;
  height: 3rem;
  justify-content: center;
  width: inherit;
`;

export const Header = () => {
  const { track } = useContext(TrackContext);

  return (
    <Container>
      <Paragraph>{track.artist}</Paragraph>
    </Container>
  );
};
