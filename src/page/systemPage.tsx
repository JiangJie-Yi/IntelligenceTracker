import React, { useState } from 'react';
import { Layout, Row, Col } from 'antd';
import Dashboard from './dashboard';
import MenuSideBar from '../components/MenuSideBar';

export default function SystemPage() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const handleCollapse = (collapsed: boolean) => {
    setIsCollapsed(collapsed);
  };

  return (
    <Layout style={{ height: '100vh' }}>
      <Layout.Sider
        width={isCollapsed ? '6%' : '14%'}
        style={{
          height: '100vh',
          // position: isCollapsed ? 'fixed' : 'initial',
          background: '#151517',
          overflow: 'hidden',
          transition: '.325s linear',
        }}
      >
        <MenuSideBar onCollapse={handleCollapse} />
      </Layout.Sider>
      <Layout.Content style={{ background: '#5b5050' }}>
        <Dashboard />
      </Layout.Content>
    </Layout>
  );
}
