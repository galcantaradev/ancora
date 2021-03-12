import styled from 'styled-components';

interface AlbumImageProps {
  alt?: string;
  src: string;
}

const Container = styled.div`
  height: 16rem;
  margin: 0 0 0.5rem 0;
  width: 12rem;
`;

const Image = styled.img`
  border-color: #000;
  border-radius: 10px;
  border-size: 1px;
  border-style: solid;
  height: 16rem;
  width: 12rem;
`;

export const AlbumImage = ({ src, alt }: AlbumImageProps) => {
  return (
    <Container>
      <Image src={src} alt={alt || 'Album image'} />
    </Container>
  );
};
