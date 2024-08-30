import React, { useEffect, useState } from "react";
import { Breadcrumb, Layout, Menu, theme,Avatar } from 'antd';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
const { Header } = Layout;
import ImgReport from '../assets/report.png'
import ImgHome from '../assets/3d-house.png'
import ImgDash from '../assets/dashboard.png'

const CustomHeader = ({ collapsed, toggleCollapsed }) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const [PageHeader, setPageHeader] = useState('');
  const url = window.location.href;
  const partweb = url.split('/').pop().split('?')[0];

  useEffect(() => {
    if (partweb === 'zPO') {
      setPageHeader(
        <span style={stylePageHeader()}>
          <Avatar src={ImgReport} shape="square" />&nbsp;zPO Summary Report
        </span>
      );
    } else if (partweb === 'PoSummary') {
      setPageHeader(
        <span style={stylePageHeader()}>
          <Avatar src={ImgDash} shape="square" />&nbsp;APPLE INC. PO Summary (zeEDI)
        </span>
      );
    } else {
      setPageHeader(
        <span style={stylePageHeader()}>
          <Avatar src={ImgHome} shape="square" />&nbsp;Common System
        </span>
      );
    }
  }, []); // เพิ่ม 'partweb' ใน dependency array ถ้า 'partweb' มีการเปลี่ยนแปลง
  
  const stylePageHeader = () => {
    return {
      display: 'flex', // ใช้ Flexbox เพื่อจัดตำแหน่ง
      alignItems: 'center', // จัดให้ข้อความอยู่กลางในแนวตั้ง
      marginLeft: '16px', // เพิ่มช่องว่างด้านซ้ายของข้อความ
      fontSize: '22px', // ขนาดฟอนต์
      fontWeight: 'bold', // หนักของฟอนต์
      color: '#fff'
    };
  };
  
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

      {PageHeader}
  </Header>
  );
};

export default CustomHeader;
