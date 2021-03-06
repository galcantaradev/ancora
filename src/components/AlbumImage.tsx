import styled from 'styled-components';

interface AlbumImageProps {
  alt?: string;
  src: string;
}

const ImageContainer = styled.div`
  background-color: #000;
  border-radius: 50%;
  height: 8rem;
`;

const Image = styled.img`
  background-size: cover;
  border-color: #000;
  border-radius: 50%;
  border-size: 1px;
  border-style: solid;
  width: 8rem;
`;

export const AlbumImage = ({ src, alt }: AlbumImageProps) => {
  return (
    <ImageContainer>
      <Image src={src} alt={alt || 'Album'} />
    </ImageContainer>
  );
};
