import React from 'react';
import { Layout, Flex, Typography, Statistic, Card, Row, Col, Space, DatePicker, } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined, CalendarOutlined, CloseCircleFilled, } from '@ant-design/icons';
import Text from 'antd/es/typography/Text';
import dayjs from 'dayjs';
const { Title } = Typography;
export default function Dashboard(props) {
    return (React.createElement(Layout, { style: { width: '100%', height: '100vh', background: '#0d0d0e', padding: '2vw' } },
        React.createElement(Flex, null,
            React.createElement(Title, { level: 5, style: {
                    fontFamily: 'fangsong',
                    color: '#ffffff',
                    marginTop: 0,
                    marginBottom: '25px',
                    opacity: 0.25,
                } }, "Dashboard")),
        React.createElement(Row, { gutter: 14, style: { marginBottom: 16 } },
            React.createElement(Col, { span: 6 },
                React.createElement(Space, { direction: "horizontal", size: 8, style: { width: '100%', justifyContent: 'flex-start' } },
                    React.createElement(Text, { type: "secondary" }, "Select Date"),
                    React.createElement(DatePicker, { placeholder: "YYYY/MM/DD", format: "YYYY/MM/DD", defaultValue: dayjs(), allowClear: {
                            clearIcon: React.createElement(CloseCircleFilled, { style: { color: '#999999' } }),
                        }, suffixIcon: React.createElement(CalendarOutlined, { style: { color: '#ffffff' } }), onChange: (date, _dateString) => console.log(date), style: { width: '100%' } }))),
            React.createElement(Col, { span: 6 },
                React.createElement(Space, { direction: "horizontal", size: 8, style: { width: '100%', justifyContent: 'space-between' } },
                    React.createElement(Text, { type: "secondary", style: { width: '100%' } }, "Growth Rate"),
                    React.createElement(Statistic, { value: 14.25, precision: 2, valueStyle: { color: '#e15863' }, prefix: React.createElement(ArrowDownOutlined, null), suffix: "%", style: { width: '100%' } })))),
        React.createElement(Row, { gutter: 14 },
            React.createElement(Col, { span: 6 },
                React.createElement(Space, { direction: "vertical", size: "middle", style: { width: '100%' } },
                    React.createElement(Card, { style: { background: '#151517' } },
                        React.createElement(Statistic, { title: "Operating Costs", value: 1000, precision: 0, valueStyle: { color: '#ababab' }, suffix: "$" })),
                    React.createElement(Card, { style: { background: '#151517' } },
                        React.createElement(Statistic, { title: "Revenue", value: 330000, precision: 0, valueStyle: { color: '#31e78c' }, prefix: React.createElement(ArrowUpOutlined, null), suffix: "$" })))),
            React.createElement(Col, { span: 6 },
                React.createElement(Space, { direction: "vertical", size: "middle", style: { width: '100%' } },
                    React.createElement(Card, { style: { background: '#151517' } },
                        React.createElement(Statistic, { title: "Gross Profit", value: 265000, precision: 0, valueStyle: { color: '#31e78c' }, prefix: React.createElement(ArrowUpOutlined, null), suffix: "$" })),
                    React.createElement(Card, { style: { background: '#151517' } },
                        React.createElement(Statistic, { title: "Net Profit", value: 228755, precision: 0, valueStyle: { color: '#31e78c' }, prefix: React.createElement(ArrowUpOutlined, null), suffix: "$" })))))));
}
