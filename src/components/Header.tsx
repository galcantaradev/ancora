import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #000;
  border-radius: 5px 5px 0 0;
  display: flex;
  height: 3rem;
  position: relative;
  width: 20rem;
  align-items: center;
  justify-content: center;
`;

export const Header = () => {
  return <HeaderContainer>Playing Now</HeaderContainer>;
};
