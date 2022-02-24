import { TopNav } from 'components/TopNav/topNav';
import { ReactNode } from 'react';

type DefaultLayoutProps = {
  children: ReactNode;
};

export const DefaultLayout = ({ children }: DefaultLayoutProps) => (
  <>
    <TopNav />
    <div>{children}</div>
  </>
);
