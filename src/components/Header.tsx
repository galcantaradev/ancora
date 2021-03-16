import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { Paragraph } from './Paragraph';

const Container = styled.header`
  align-items: center;
  background-color: #000;
  border-radius: 5px 5px 0 0;
  display: flex;
  height: 3rem;
  justify-content: space-between;
  width: inherit;

  svg {
    padding: 0 0.5rem 0 0.5rem;

    :hover {
      cursor: pointer;
    }
  }
`;

export const Header = () => {
  const history = useHistory();

  return (
    <Container>
      <FontAwesomeIcon icon="chevron-left" onClick={history.goBack} />
      <Paragraph>Playa</Paragraph>
      <FontAwesomeIcon icon="search" />
    </Container>
  );
};
