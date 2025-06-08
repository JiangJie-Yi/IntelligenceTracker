import { BrowserRouter, Routes, Route, HashRouter, Link, Outlet } from 'react-router-dom';

import { ConfigProvider } from 'antd';
import Login from './page/login';
import SystemPage from './page/systemPage';
import NotFoundPage from './page/notFoundPage';
import './css/App.css';

export default function App() {
  return (
    <ConfigProvider
      theme={{
        hashed: false,
        token: {
          colorPrimary: '#2c3034',
          colorSuccess: '#52c41a',
          colorWarning: '#faad14',
          colorError: '#ff4d4f',
          colorTextTertiary: '#999999',
        },
        components: {
          Button: {
            colorPrimary: '#151517',
            colorSuccess: '#52c41a',
            colorWarning: '#faad14',
            colorError: '#ff4d4f',
            colorInfo: '#1677FF',
            controlOutline: 'none',
            controlOutlineWidth: 0,
            boxShadowSecondary: 'none',
          },
          Card: {
            colorBorderSecondary: '#ffffff14',
          },
          Select: {
            colorText: '#ffffff',
            colorTextPlaceholder: '#8c8c8c',
            colorTextSecondary: '#8c8c8c',
            colorBgContainer: '#151517',
            colorBorder: '#2a2a2a',
            colorBgElevated: '#1f1f1f',
            controlHeight: 40,
            borderRadius: 6,
            fontSize: 14,
            // hover 和 focus 狀態
            controlOutline: 'rgba(24, 144, 255, 0.2)',
            controlOutlineWidth: 2,

            colorPrimary: '#1890ff',
            colorPrimaryHover: '#40a9ff',
          },
          DatePicker: {
            colorText: '#ffffff',
            colorTextHeading: '#656cf6',
            colorTextSecondary: '#151517',
            colorTextDescription: '#999999',
            colorBorder: '#2a2a2a',
            colorTextPlaceholder: '#4a4a4a',
            colorBgContainer: '#151517',
            colorBgElevated: '#212124',
          },
          Statistic: {
            titleFontSize: 13,
            contentFontSize: 22,
          },
        },
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/systemPage" element={<SystemPage />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  );
}
