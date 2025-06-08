import React from 'react';
import { Flex } from 'antd';
import { InsuranceOutlined } from '@ant-design/icons';
export default function Logo({ collapsed, fadeIn }) {
    return (React.createElement(Flex, { align: "center", justify: "space-around", style: {
            display: 'grid',
            gridTemplateColumns: collapsed ? '100%' : '1fr 2fr',
            width: collapsed ? 'auto' : 200,
            height: 58,
            fontSize: 22,
            color: '#fff',
            paddingLeft: 15,
            paddingRight: 15,
            gap: 10,
            border: 0,
            background: 'transparent',
            transition: '.325s linear',
        } },
        React.createElement(InsuranceOutlined, { style: { margin: 'auto' } }),
        React.createElement("p", { style: {
                display: collapsed ? 'none' : 'inline-block',
                fontSize: 16,
                margin: 'auto',
                opacity: fadeIn ? 0 : 1,
                transition: '.325s linear',
            } },
            "Intelligence",
            React.createElement("span", { style: { marginLeft: 6, marginBottom: 0, fontSize: 12, color: '#8a8a8a' } }, "1.0"))));
}
