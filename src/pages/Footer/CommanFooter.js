import React from "react";
import { Layout, Row, Col } from "antd";
import {
  SearchOutlined,
  InstagramOutlined,
  FacebookOutlined,
  YoutubeOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
const { Footer } = Layout;

const CommanFooter = () => {
  return (
    <Layout>
      <Footer style={{ backgroundColor: "whitesmoke", color: "#5A5A5A" }}>
        <Row justify={"space-between"}>
          <Col style={{ marginLeft: "100px" }}>
            <p style={{ fontSize: "30px" }}>
              <b>Sign up for our monthly updates</b>
            </p>
            <p style={{ fontSize: "15px" }}>
              We've got some opinions on Recruting and HR and we have think they
              are entertaining Learn a little, laugh a little
            </p>
          </Col>
          <Col style={{ marginRight: "120px" }}>
            <p>ENTER EMAIL ADDRESS</p>
            <input
              type="text"
              name="type"
              icon={<SearchOutlined />}
              style={{ height: "30px", width: "300px" }}
            ></input>{" "}
            <button
              style={{
                borderRadius: "20px",
                borderColor: "lighTblue",
                color: "light blue",
                marginLeft: "10px",
                fontSize: "20px",
              }}
            >
              Sign up
            </button>
          </Col>
        </Row>
        <br/>
        <div style={{ fontSize: "50px" ,display:'flex',justifyContent: 'center'}}>
          <InstagramOutlined style={{marginRight:"5px"}} />
          <FacebookOutlined  style={{marginRight:"5px"}}/>
          <YoutubeOutlined  style={{marginRight:"5px"}} />
          <TwitterOutlined   style={{marginRight:"5px"}}/>
        </div>
        <p style={{ fontSize: "15px" ,display:'flex',justifyContent: 'center'}}>© 2023 Frito-Lay North America, Inc. a Division of PepsiCo</p>
      </Footer>
    </Layout>
  );
};
export default CommanFooter;
