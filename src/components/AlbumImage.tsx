import styled from 'styled-components';

interface AlbumImageProps {
  alt?: string;
  src: string;
}

const ImageContainer = styled.div`
  height: 16rem;
  margin: 1rem 0 1rem 0;
  width: 12rem;
`;

const Image = styled.img`
  background-size: cover;
  border-color: #000;
  border-radius: 10px;
  border-size: 1px;
  border-style: solid;
  height: 16rem;
  width: 12rem;
`;

export const AlbumImage = ({ src, alt }: AlbumImageProps) => {
  return (
    <ImageContainer>
      <Image src={src} alt={alt || 'Album'} />
    </ImageContainer>
  );
};
