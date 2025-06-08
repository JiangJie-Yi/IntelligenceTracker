import React, { useState, useEffect } from 'react';
import { Flex, Button } from 'antd';
import { ColumnWidthOutlined } from '@ant-design/icons';
import LogoButton from './components/LogoButton';
import SideButton from './components/SideButton';
import { getSideButtonStyle } from './style/buttonStyle';
export default function MenuSideBar({ onCollapse }) {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const handleCollapse = () => {
        const newCollapsed = !isCollapsed;
        setIsCollapsed(newCollapsed);
        onCollapse?.(newCollapsed);
    };
    useEffect(() => {
        fetch('')
            .then((response) => {
            if (!response.ok) {
                throw new Error();
            }
            return response.json();
        })
            .then((data) => {
            setMenuItems(data);
            // setLoading(false);
        })
            .catch((error) => {
            console.error('res: Error Message', error);
        });
    }, []);
    return (React.createElement(Flex, { vertical: true, align: "center", justify: "space-between", style: {
            width: 'fit-content',
            height: 'inherit',
            paddingTop: 2,
            paddingBottom: 2,
            paddingLeft: 3,
            paddingRight: 2,
            background: '#151517',
            flex: '1 1 auto',
            margin: 'auto',
        } },
        React.createElement(Button, { type: 'primary', icon: React.createElement(ColumnWidthOutlined, { style: { fontSize: 15, margin: 'auto' } }), style: getSideButtonStyle({
                gridTemplateColumns: isCollapsed ? '100%' : '35% 65%',
            }), onClick: handleCollapse }, !isCollapsed && 'Collapse'),
        React.createElement(Flex, { vertical: true, gap: 2, style: {
                width: 'inherit',
            } },
            React.createElement(SideButton, null)),
        React.createElement(LogoButton, null)));
}
function setMenuItems(mockDataMenuItem) {
    throw new Error('Function not implemented.');
}
