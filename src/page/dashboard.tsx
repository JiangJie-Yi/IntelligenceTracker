import React from 'react';
import {
  Layout,
  Flex,
  Typography,
  Statistic,
  Card,
  Row,
  Col,
  Space,
  Select,
  DatePicker,
} from 'antd';
import {
  ArrowUpOutlined,
  ArrowDownOutlined,
  CalendarOutlined,
  CloseCircleFilled,
} from '@ant-design/icons';
import Text from 'antd/es/typography/Text';
import { Heatmap } from '@ant-design/charts';
import { Line, Column, Pie } from '@ant-design/charts';
import dayjs from 'dayjs';

interface DashboardProps {}

const { Title } = Typography;

export default function Dashboard(props: DashboardProps) {
  return (
    <Layout style={{ width: '100%', height: '100vh', background: '#0d0d0e', padding: '2vw' }}>
      <Flex>
        <Title
          level={5}
          style={{
            fontFamily: 'fangsong',
            color: '#ffffff',
            marginTop: 0,
            marginBottom: '25px',
            opacity: 0.25,
          }}
        >
          Dashboard
        </Title>
      </Flex>
      <Row gutter={14} style={{ marginBottom: 16 }}>
        <Col span={6}>
          <Space
            direction="horizontal"
            size={8}
            style={{ width: '100%', justifyContent: 'flex-start' }}
          >
            <Text type="secondary">Select Date</Text>
            <DatePicker
              placeholder="YYYY/MM/DD"
              format="YYYY/MM/DD"
              defaultValue={dayjs()}
              allowClear={{
                clearIcon: <CloseCircleFilled style={{ color: '#999999' }} />,
              }}
              suffixIcon={<CalendarOutlined style={{ color: '#ffffff' }} />}
              onChange={(date: number, _dateString: string) => console.log(date)}
              style={{ width: '100%' }}
            />
          </Space>
        </Col>
        <Col span={6}>
          <Space
            direction="horizontal"
            size={8}
            style={{ width: '100%', justifyContent: 'space-between' }}
          >
            <Text type="secondary" style={{ width: '100%' }}>
              Growth Rate
            </Text>
            <Statistic
              value={14.25}
              precision={2}
              valueStyle={{ color: '#e15863' }}
              prefix={<ArrowDownOutlined />}
              suffix="%"
              style={{ width: '100%' }}
            />
          </Space>
        </Col>
      </Row>
      <Row gutter={14}>
        <Col span={6}>
          <Space direction="vertical" size="middle" style={{ width: '100%' }}>
            <Card style={{ background: '#151517' }}>
              <Statistic
                title="Operating Costs"
                value={1000}
                precision={0}
                valueStyle={{ color: '#ababab' }}
                suffix="$"
              />
            </Card>
            <Card style={{ background: '#151517' }}>
              <Statistic
                title="Revenue"
                value={330000}
                precision={0}
                valueStyle={{ color: '#31e78c' }}
                prefix={<ArrowUpOutlined />}
                suffix="$"
              />
            </Card>
          </Space>
        </Col>
        <Col span={6}>
          <Space direction="vertical" size="middle" style={{ width: '100%' }}>
            <Card style={{ background: '#151517' }}>
              <Statistic
                title="Gross Profit"
                value={265000}
                precision={0}
                valueStyle={{ color: '#31e78c' }}
                prefix={<ArrowUpOutlined />}
                suffix="$"
              />
            </Card>
            <Card style={{ background: '#151517' }}>
              <Statistic
                title="Net Profit"
                value={228755}
                precision={0}
                valueStyle={{ color: '#31e78c' }}
                prefix={<ArrowUpOutlined />}
                suffix="$"
              />
            </Card>
          </Space>
        </Col>
      </Row>
    </Layout>
  );
}
