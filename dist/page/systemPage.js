import React, { useState } from 'react';
import { Layout } from 'antd';
import Dashboard from './dashboard';
import MenuSideBar from '../components/MenuSideBar';
export default function SystemPage() {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const handleCollapse = (collapsed) => {
        setIsCollapsed(collapsed);
    };
    return (React.createElement(Layout, { style: { height: '100vh' } },
        React.createElement(Layout.Sider, { width: isCollapsed ? '6%' : '14%', style: {
                height: '100vh',
                // position: isCollapsed ? 'fixed' : 'initial',
                background: '#151517',
                overflow: 'hidden',
                transition: '.325s linear',
            } },
            React.createElement(MenuSideBar, { onCollapse: handleCollapse })),
        React.createElement(Layout.Content, { style: { background: '#5b5050' } },
            React.createElement(Dashboard, null))));
}
