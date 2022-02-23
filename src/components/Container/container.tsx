import { ReactNode } from 'react';

import { Row, Col } from 'antd';

import { Content, Title } from './styles';

type ContainerProps = {
  children: ReactNode;
};

export const Container = ({ children }: ContainerProps) => (
  <Content>
    <Row>
      <Col>
        <Title>Task Manager</Title>
      </Col>
    </Row>
    {children}
  </Content>
);
