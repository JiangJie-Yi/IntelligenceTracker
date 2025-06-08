import React, { useState, useRef, useEffect } from 'react';
import { Flex, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import MenuSiderBarLoading from './animation/menuSiderBarLoading';
import { BarChartOutlined, DashboardOutlined, FileTextOutlined, FileSearchOutlined, HeatMapOutlined, RadarChartOutlined, LoadingOutlined, } from '@ant-design/icons';
export default function SideButton({ collapsed = false, fadeIn = false }) {
    const [menuItems, setMenuItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const sideButton = useRef(null);
    const navigate = useNavigate();
    const createMenuItem = (id, label, IconComponent) => ({
        id,
        label,
        primary: true,
        icon: React.createElement(IconComponent, { component: IconComponent, style: { fontSize: 15 } }),
        url: '',
    });
    const getSideButtonStyle = ({ width = 200, height = 58, gridTemplateColumns = '1fr 2fr', gridTemplateRows = '100%', } = {}) => ({
        display: 'grid',
        gridTemplateColumns: collapsed ? '100%' : gridTemplateColumns,
        gridTemplateRows: collapsed ? '100%' : gridTemplateRows,
        width: collapsed ? 'auto' : width,
        height,
        gap: 16,
        borderRadius: 2,
        transition: '.325s linear',
        cursor: 'pointer',
        outline: 'none',
    });
    const mockDataMenuItem = [
        createMenuItem('1', 'Outline', FileSearchOutlined),
        createMenuItem('2', 'Dashboard', DashboardOutlined),
        createMenuItem('3', 'Documents', FileTextOutlined),
        createMenuItem('4', 'Report', BarChartOutlined),
        createMenuItem('5', 'StateTable', RadarChartOutlined),
        createMenuItem('6', 'Overview', HeatMapOutlined),
    ];
    useEffect(() => {
        const loadingTimer = setTimeout(() => {
            setMenuItems(mockDataMenuItem);
            setLoading(false);
        }, 1000);
        return () => clearTimeout(loadingTimer);
    }, []);
    if (loading)
        return (React.createElement(Flex, { vertical: true, align: "center", gap: 18 },
            React.createElement(LoadingOutlined, null),
            React.createElement(MenuSiderBarLoading, { text: "Loading", speed: 300, maxDots: 3 })));
    return (React.createElement(React.Fragment, null, menuItems.map((item) => (React.createElement(Button, { ref: sideButton, key: item.id, type: item.primary ? 'primary' : 'default', icon: item.icon, loading: loading, onClick: () => navigate(item.url), style: getSideButtonStyle({ collapsed, fadeIn }) },
        React.createElement("span", { style: {
                display: collapsed ? 'none' : 'inline-block',
                opacity: fadeIn ? 0 : 1,
                transition: '.325s linear',
            } }, item.label))))));
}
