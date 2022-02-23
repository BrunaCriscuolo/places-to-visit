import styled from 'styled-components';
import { Typography } from 'antd';

import { Colors } from 'variables';

const { Title: T } = Typography;
const { gray900 } = Colors;

export const Content = styled.div`
  margin: 3rem 10rem;
`;

export const Title = styled(T)`
  color: ${gray900};
`;
