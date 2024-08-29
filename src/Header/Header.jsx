import React from 'react';
import { Breadcrumb, Layout, Menu, theme,Avatar } from 'antd';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
const { Header } = Layout;
import ImgReport from '../assets/report.png'

const CustomHeader = ({ collapsed, toggleCollapsed }) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const items1 = ['1', '2', '3'].map((key) => ({
    key,
    label: `nav ${key}`,
  }));
  const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
    const key = String(index + 1);
    return {
      key: `sub${key}`,
      icon: React.createElement(icon),
      label: `subnav ${key}`,
      children: new Array(4).fill(null).map((_, j) => {
        const subKey = index * 4 + j + 1;
        return {
          key: subKey,
          label: `option${subKey}`,
        };
      }),
    };
  });
  return (
    <Header
    style={{
      position: 'fixed', // Make the header fixed
        top: 0, // Position it at the top of the page
        left: 0, // Position it at the left edge
        right: 0, // Ensure it spans the full width
        zIndex: 1000, // Ensure it stays above other elements
        display: 'flex',
        alignItems: 'center',
        // bottom:100
       
    }}
  >
    <div className="demo-logo" />
    <span style={{
        marginLeft: '16px', // เพิ่มช่องว่างด้านซ้ายของข้อความ
        fontSize: '22px', // ขนาดฟอนต์
        fontWeight: 'bold', // หนักของฟอนต์
        color:'#fff'
      }}>
       <Avatar src={ImgReport} shape="square" />&nbsp;zPO Summary Report
      </span>
  </Header>
  );
};

export default CustomHeader;
