import { ReactNode } from 'react';

import { Container } from 'components/Container/container';

type DefaultLayoutProps = {
  children: ReactNode;
};

export const DefaultLayout = ({ children }: DefaultLayoutProps) => (
  <Container>{children}</Container>
);
