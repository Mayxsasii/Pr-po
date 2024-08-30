import React, { useEffect, useState } from "react";
import {
  Layout,
  theme,
  Input,
  Tooltip,
  Button,
  Table,
  Modal,
  Avatar,
  Card ,
  Select ,
  Row ,
  Col
} from "antd";
import {
  SearchOutlined,
  CloseOutlined,
  UndoOutlined,
  LoadingOutlined,
} from "@ant-design/icons";
import ImgInProcess from "../assets/time-management.png";
import ImgComplete from  "../assets/completed-task.png";
import ImgAllPo from  "../assets/result.png";
import { styled } from "@mui/material";
// import { Fn_zPO_Report } from "./Fn_zPO_Report"

const { Content } = Layout;

const Page2 = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
//   const {
  
//   } = Fn_zPO_Report();


  return (
    <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
      <div
        style={{
          padding: 24,
          // textAlign: 'center',
          background: colorBgContainer,
          borderRadius: borderRadiusLG,
        }}
      >
      <h1>APPLE INC. PO Summary (zEDI)</h1>
      <h3 style={{marginLeft:'15px'}}>Overall status</h3>
      <div style={{
      display: 'flex', // ใช้ Flexbox เพื่อจัดเรียง
      gap: '16px' // เพิ่มช่องว่างระหว่าง Card
    }}>
{/* all po */}
<Card
  style={{
    width: 400,
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    padding: '15px',
    background:'#C80036',
    border:0,   cursor: 'pointer', 
    transition: 'transform 0.3s ease-in-out',
    color:'#ffffff'
  }}
 
   onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.1)';
         e.currentTarget.style.backgroundColor = '#EEEDEB'
         e.currentTarget.style.zIndex = 10;
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'scale(1)';
      e.currentTarget.style.backgroundColor = 'transparent';
      e.currentTarget.style.zIndex = 1;
    }}
>
  <Row align="middle">
    <Col>
      <Avatar
        src={ImgAllPo}
        shape="square"
        style={{ marginRight: '15px', cursor: 'pointer', height: '90px', width: '90px' }}
      />
    </Col>
    <Col>
      <span style={{   
      fontSize: '22px', // ขนาดฟอนต์
      fontWeight: 'bold', // หนักของฟอนต์
      }}>2 <br /> PO Outstanding
      </span>
    </Col>
  </Row>
</Card>
{/* >PO Outstanding */}
<Card
   style={{
    width: 400,
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    padding: '15px',
    background:'#C80036',
    border:0,   cursor: 'pointer', 
    transition: 'transform 0.3s ease-in-out',
    color:'#ffffff'
  }}
 
   onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.1)';
         e.currentTarget.style.backgroundColor = '#EEEDEB'
         e.currentTarget.style.zIndex = 10;
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'scale(1)';
      e.currentTarget.style.backgroundColor = 'transparent';
      e.currentTarget.style.zIndex = 1;
    }}
>
  <Row align="middle">
    <Col>
      <Avatar
        src={ImgInProcess}
        shape="square"
        style={{ marginRight: '15px', cursor: 'pointer', height: '90px', width: '90px' }}
      />
    </Col>
    <Col>
      <span style={{   
      fontSize: '22px', // ขนาดฟอนต์
      fontWeight: 'bold', // หนักของฟอนต์
      }}>2 <br /> PO Outstanding
      </span>
    </Col>
  </Row>
</Card>
{/* Po completed */}
<Card
   style={{
    width: 400,
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    padding: '15px',
    background:'#C80036',
    border:0,   cursor: 'pointer', 
    transition: 'transform 0.3s ease-in-out',
    color:'#ffffff'
  }}
 
   onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.1)';
         e.currentTarget.style.backgroundColor = '#EEEDEB'
         e.currentTarget.style.zIndex = 10;
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'scale(1)';
      e.currentTarget.style.backgroundColor = 'transparent';
      e.currentTarget.style.zIndex = 1;
    }}
>
  <Row align="middle">
    <Col>
      <Avatar
        src={ImgComplete}
        shape="square"
        style={{ marginRight: '15px', cursor: 'pointer', height: '90px', width: '90px' }}
      />
    </Col>
    <Col>
      <span style={{   
      fontSize: '22px', // ขนาดฟอนต์
      fontWeight: 'bold', // หนักของฟอนต์
      }}>2 <br /> PO Outstanding
      </span>
    </Col>
  </Row>
</Card>
    </div>
    <br/>
    <br/> 
    <Select
    showSearch
    placeholder="FETL PO Status :"
    optionFilterProp="label"
    style={{ width:'250px'}}
    
    // onChange={onChange}
    // onSearch={onSearch}
    options={[
      {
        value: 'jack',
        label: 'Jack',
      },
      {
        value: 'lucy',
        label: 'Lucy',
      },
      {
        value: 'tom',
        label: 'Tom',
      },
    ]}
  />{" "}
    <Input placeholder="FETL PO No. :" style={{width:'250px'}}></Input>
      </div>
    </Content>
  );
};

export default Page2;
