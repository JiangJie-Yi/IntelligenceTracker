import React, { useState, useRef, useEffect } from 'react';
import { Flex, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import MenuSiderBarLoading from '../animation/menuSiderBarLoading';
import { getSideButtonStyle } from '../style/buttonStyle';
import { BarChartOutlined, DashboardOutlined, FileTextOutlined, FileSearchOutlined, HeatMapOutlined, RadarChartOutlined, LoadingOutlined, } from '@ant-design/icons';
export default function SideButton({ collapsed }) {
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
    const mockDataMenuItem = [
        createMenuItem('1', 'Outline', FileSearchOutlined),
        createMenuItem('2', 'Dashboard', DashboardOutlined),
        createMenuItem('3', 'Documents', FileTextOutlined),
        createMenuItem('4', 'Report', BarChartOutlined),
        createMenuItem('5', 'StateTable', RadarChartOutlined),
        createMenuItem('6', 'Overview', HeatMapOutlined),
    ];
    useEffect(() => {
        const timer = setTimeout(() => {
            setMenuItems(mockDataMenuItem);
            setLoading(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);
    if (loading)
        return (React.createElement(Flex, { vertical: true, align: "center", gap: 18 },
            React.createElement(LoadingOutlined, null),
            React.createElement(MenuSiderBarLoading, { text: "Loading", speed: 300, maxDots: 3 })));
    return (React.createElement(React.Fragment, null, menuItems.map((item) => (React.createElement(Button, { ref: sideButton, key: item.id, type: item.primary ? 'primary' : 'default', icon: item.icon, loading: loading, onClick: () => navigate(item.url), style: getSideButtonStyle() },
        React.createElement("span", { style: {
                opacity: collapsed ? 0 : 1,
                display: collapsed ? 'none' : 'inline-block',
                transition: 'opacity 0.3s ease-in-out',
            } }, item.label))))));
}
