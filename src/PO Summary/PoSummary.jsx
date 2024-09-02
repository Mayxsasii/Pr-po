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
  Card,
  Select,
  Row,
  Col,
  DatePicker,
} from "antd";
import axios from "axios";
import {
  SearchOutlined,
  CloseOutlined,
  UndoOutlined,
  LoadingOutlined,
} from "@ant-design/icons";
import moment from "moment";
import ImgInProcess from "../assets/time-management.png";
import ImgComplete from "../assets/completed-task.png";
import ImgAllPo from "../assets/result.png";
import { styled } from "@mui/material";
// import { Fn_zPO_Report } from "./Fn_zPO_Report"
import './Summary.css'
const { Content } = Layout;

const Page2 = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const [loading, setLoading] = React.useState(false);
  const [Status, setStatus] = React.useState([]);
  const [SL_Status, setSL_Status] = React.useState(null);
  const [txt_PONo, settxt_PONo] = React.useState(null);
  const [DateFrom, setDateFrom] = React.useState(null);
  const [DateTo, setDateTo] = React.useState(null);
  const [DataTable, setDataTable] = React.useState([]);
  const [CountPO, setCountPO] = React.useState([]);
  //   const {

  //   } = Fn_zPO_Report();

  useEffect(() => {
    GetStatus();
    GetCount_PO()
  }, []);

  const GetStatus = () => {
    axios.post("/api/zPO_Summary/Status", {}).then((res) => {
      console.log("statuss", res.data);
      setStatus(res.data);
    });
  };

  const GetCount_PO = () => {
    axios.post("/api/zPO_Summary/Po_CountType", {}).then((res) => {
      console.log("GetCount_PO", res.data);
      setCountPO(res.data);
    });
  };

  const StyleonMouseEnter = (e) => {
    e.currentTarget.style.transform = "scale(1.1)";
    e.currentTarget.style.color = "black";
    e.currentTarget.style.zIndex = 10;
  };

  const StyleonMouseLeave = (e) => {
    e.currentTarget.style.transform = "scale(1)";
    e.currentTarget.style.color = "#ffffff";
    e.currentTarget.style.zIndex = 1;
  };
  const Reset = () => {
    settxt_PONo(null)
    setSL_Status(null)
    setDateFrom(null)
    setDateTo(null)
    setDataTable([])
  };

  const ClickStatus_PO = (PO_TYPE) => {
    if(PO_TYPE==='All'){
    axios.post("/api/zPO_Summary/PO_All", {}).then((res) => {
      setDataTable(res.data);
    });
    }
    else if(PO_TYPE==='Outstanding'){
      axios.post("/api/zPO_Summary/PO_Outstanding", {}).then((res) => {
        setDataTable(res.data);
      });
    }
    else if(PO_TYPE==='Completed'){
      axios.post("/api/zPO_Summary/PO_Complete", {}).then((res) => {
        setDataTable(res.data);
      });
    }
  }


  const Search = () => {
console.log(DateTo,'---',DateFrom,'---',txt_PONo,'--',SL_Status)
if(DateTo==null&&DateFrom==null&&txt_PONo==null&&SL_Status==null){
  console.log('กรอกสักอย่างเถอะ')
}else{
  console.log('เข้าจ้า')
  axios.post("/api/zPO_Summary/Summary_search", {
    Status: SL_Status|| "ALL",
    PO_No: txt_PONo|| "",
    DateFrom:DateFrom|| "",
    DateTo:DateTo || ""
  }).then((res) => {
    console.log("Search", res.data);
    setDataTable(res.data);
  });
}
// date.format("YYYY-MM-DD")
  };

  const columns = [
    {
      title: "No.",
      dataIndex: "No",
      key: "No.",
      render: (text, record, index) => {
        return index + 1;
      },
      align: "center",
    },
    {
      title: "Order Date",
      dataIndex: "F_PO_DATE",
      key: "Order Date",
      align: "center",
      render: (text, record, index) => {
      
          return text;
        
      },
    },
    {
      title: "FETL PO No.",
      dataIndex: "F_PONO",
      key: "FETL PO No.",
      align: "center",
      render: (text, record, index) => {

        return (
          <a
            onClick={() => {
              window.open(`http://10.17.74.226:8081/CommonSystem/zPO?pono=${encodeURIComponent(text)}`, '_blank');
              // rel="noopener noreferrer"
            }}
          >
            {text}
          </a>
        );
      },
    },

    {
      title: "Due Date",
      key: "Due Date",
      dataIndex: "F_DUE_DATE",
      align: "center",
      render: (text, record, index) => {
      
          return text;
       
      },
    },
    {
      title: "Order Qty",
      key: "Order Qty",
      dataIndex: "F_QTY",
      align: "right",
      render: (text, record, index) => {
    
          return text;
        
      },
    },
    {
      title: "Status",
      key: "EDI status",
      dataIndex: "F_STATUS",

      render: (text, record, index) => {
          return text;
      },
      align: "center",
    },
  ];

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
        <h3 style={{ marginLeft: "15px" }}>Overall status</h3>
        <div
          style={{
            display: "flex", // ใช้ Flexbox เพื่อจัดเรียง
            gap: "16px", // เพิ่มช่องว่างระหว่าง Card
          }}
        >
          {/* all po */}
          <Card
            style={{
              width: 400,
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              padding: "15px",
              background: "#3FA2F6",
              border: 0,
              cursor: "pointer",
              transition: "transform 0.3s ease-in-out",
              color: "#ffffff",
             
            }}
            onMouseEnter={(e) => {
              StyleonMouseEnter(e);
              e.currentTarget.style.backgroundColor = "#3FA2F6";
            }}
            onMouseLeave={(e) => {
              StyleonMouseLeave(e);
              e.currentTarget.style.backgroundColor = "#3FA2F6";
            }}
             onClick={() => ClickStatus_PO('All')}
          >
            <Row align="middle">
              <Col>
                <Avatar
                  src={ImgAllPo}
                  shape="square"
                  style={{
                    marginRight: "15px",
                    cursor: "pointer",
                    height: "90px",
                    width: "90px",
                  }}
                />
              </Col>
              <Col>
                <span
                  style={{
                    fontSize: "22px", // ขนาดฟอนต์
                    fontWeight: "bold", // หนักของฟอนต์
                  }}
                >
                  {CountPO.Type_All} <br /> PO All
                </span>
              </Col>
            </Row>
          </Card>
          {/* >PO Outstanding */}
          <Card
            style={{
              width: 400,
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              padding: "15px",
              background: "#FFD35A",
              border: 0,
              cursor: "pointer",
              transition: "transform 0.3s ease-in-out",
              color: "#ffffff",
            }}
            onMouseEnter={(e) => {
              StyleonMouseEnter(e);
              e.currentTarget.style.backgroundColor = "#FFD35A";
            }}
            onMouseLeave={(e) => {
              StyleonMouseLeave(e);
              e.currentTarget.style.backgroundColor = "#FFD35A";
            }}
            onClick={() => ClickStatus_PO('Outstanding')}
          >
            <Row align="middle">
              <Col>
                <Avatar
                  src={ImgInProcess}
                  shape="square"
                  style={{
                    marginRight: "15px",
                    cursor: "pointer",
                    height: "90px",
                    width: "90px",
                  }}
                />
              </Col>
              <Col>
                <span
                  style={{
                    fontSize: "22px", // ขนาดฟอนต์
                    fontWeight: "bold", // หนักของฟอนต์
                  }}
                >
                 {CountPO.Type_Outstanding}<br />
                  PO Outstanding
                </span>
              </Col>
            </Row>
          </Card>
          {/* Po completed */}
          <Card
            style={{
              width: 400,
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              padding: "15px",
              background: "#0D7C66",
              border: 0,
              cursor: "pointer",
              transition: "transform 0.3s ease-in-out",
              color: "#ffffff",
            }}
            onMouseEnter={(e) => {
              StyleonMouseEnter(e);
              // 
              e.currentTarget.style.backgroundColor = "#0D7C66";
            }}
            onMouseLeave={(e) => {
              StyleonMouseLeave(e);
              e.currentTarget.style.backgroundColor = "#0D7C66";
            }}

            onClick={() => ClickStatus_PO('Completed')}
          >
            <Row align="middle">
              <Col>
                <Avatar
                  src={ImgComplete}
                  shape="square"
                  style={{
                    marginRight: "15px",
                    cursor: "pointer",
                    height: "90px",
                    width: "90px",
                  }}
                />
              </Col>
              <Col>
                <span
                  style={{
                    fontSize: "22px", // ขนาดฟอนต์
                    fontWeight: "bold", // หนักของฟอนต์
                  }}
                >
                 {CountPO.Type_Complete}<br /> PO Completed
                </span>
              </Col>
            </Row>
          </Card>
        </div>
        <br />
      </div>

      <div
        style={{
          padding: 24,
          background: colorBgContainer,
          borderRadius: borderRadiusLG,
          marginTop: "40px",
        }}
      >
        <Select
          style={{ width: 400 }}
          placeholder="Status :"
          value={SL_Status}
          onChange={(value) => {
            setSL_Status(value);
            // console.log(value);
          }}
        >
          {Status.map((option, index) => (
            <Option key={index} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>{" "}
        &nbsp;
        <Input
          placeholder="FETL PO No. :"
          style={{ width: "200px" }}
          value={txt_PONo}
          onChange={(e) => {
            settxt_PONo(e.target.value);
            console.log(e.target.value);
          }}
        />{" "}
        &nbsp;
        <DatePicker
          style={{ marginTop: "10px", width: "200px" }}
          placeholder="FETL PO Date From :"
          value={DateFrom? moment(DateFrom, 'DD/MM/YYYY') : null} 
          onChange={(date, dateString) => {
            setDateFrom(dateString);
          }}
          format="DD/MM/YYYY"
        />{" "}
        &nbsp;
        <DatePicker
          style={{ marginTop: "10px", width: "200px" }}
          placeholder="FETL PO Date To :"
          value={DateTo? moment(DateTo, 'DD/MM/YYYY') : null} 
          onChange={(date, dateString) => {
            setDateTo(dateString);
          }}
          format="DD/MM/YYYY"
        />
        &nbsp;{" "}
        <Button
          type="primary"
          icon={loading ? <LoadingOutlined /> : <SearchOutlined />}
          onClick={() => Search()}
        >
          Execute
        </Button>
        &nbsp;
        <Button
          type="primary"
          danger
          icon={<UndoOutlined />}
          onClick={() => Reset()}
        >
          Reset
        </Button>
        <br />
        <br />
        <Table
          columns={columns}
          dataSource={DataTable}
          style={{ margin: "auto" }}
          pagination={false}
          // scroll={{ x: "max-content" }}
          // rowClassName={() => "custom-row-height"}
          // bordered
          size="small"
          className="tableSummary"
          // width=''
        />
      </div>
    </Content>
  );
};

export default Page2;
