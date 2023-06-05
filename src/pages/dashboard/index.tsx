import React from 'react';
import { HeartTwoTone, SmileTwoTone } from '@ant-design/icons';
import { Card, Typography, Alert } from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
const Admin: React.FC = () => {
  return (
    <PageHeaderWrapper content={' 这个页面只有 admin 权限才能查看'}>
      <h1>testing</h1>
    </PageHeaderWrapper>
  );
};
export default Admin;
