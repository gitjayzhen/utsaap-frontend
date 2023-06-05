import React from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Layout, Menu } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';

import './index.less';

const { Header, Content, Footer, Sider } = Layout;

const items1: MenuProps['items'] = ['1', '2', '3'].map((key) => ({
  key,
  label: `nav ${key}`,
}));

const items2: MenuProps['items'] = [
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
].map((icon, index) => {
  const key = String(index + 1);

  return {
    key: `sub${key}`,
    icon: React.createElement(icon),
    label: `subnav ${key}`,
  };
});

const CaseManager: React.FC = () => {
  console.log('tseting');

  return (
    <PageContainer>
      <Layout
        className="site-layout-background"
        style={{
          overflow: 'auto',
          height: 'calc(100vh - 196px)',
          left: 0,
          top: 0,
          bottom: 0,
          padding: '24px 0',
        }}
      >
        <Sider className="site-layout-background" width={200}>
          <div style={{ height: '100%' }}>
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%', overflow: 'auto' }}
              items={items2}
            />
          </div>
        </Sider>
        <Content style={{ padding: '0 24px', minHeight: 280, height: '100%' }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, textAlign: 'center', overflow: 'auto', height: '100%' }}
          >
            <p>long content</p>
            {
              // indicates very long content
              Array.from({ length: 100 }, (_, index) => (
                <React.Fragment key={index}>
                  {index % 20 === 0 && index ? 'more' : '...'}
                  <br />
                </React.Fragment>
              ))
            }
          </div>
        </Content>
      </Layout>
    </PageContainer>
  );
};

export default CaseManager;
