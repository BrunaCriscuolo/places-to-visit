import styled from 'styled-components';
import { Colors, Shadows } from 'variables';

const { black } = Colors;
const { shadowDark07 } = Shadows;

export const Header = styled.div`
  background-color: ${black};
  padding: 0.5rem 3rem;
  box-shadow: ${shadowDark07};

  img {
    width: 125px;
  }
`;
