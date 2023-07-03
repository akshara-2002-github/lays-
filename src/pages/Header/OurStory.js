import React from "react";
import { Row, Col, Divider } from "antd";
import CommanFooter from "../Footer/CommanFooter";

export default function OurStory() {
  return (
    <div
      style={{
        backgroundImage: `url("https://i.pinimg.com/564x/62/a6/b0/62a6b02a77c84bfdaaed8637ed0fccb3.jpg")`,
      }}
    >
      <div
        style={{
          backgroundImage: `url("https://www.mashed.com/img/gallery/the-untold-truth-of-lays-upgrade/the-lays-founder-was-a-college-drop-out-1643668867.jpg")`,
          backgroundSize: "Cover",
          width: "100%",
          height: "600px",
          opacity: "0.8 black",
        }}
      >
        {/* <h1
          style={{
            textAlign: "center",
            justifyContent: "left",
            display: "flex",
            color: "white",
            fontFamily: "'Lobster Two', cursive",
            paddingTop: "400px",
            fontSize: "70px",
          }}
        >
          How Lay’s became India’s favorite <br />
          potato chips company?
        </h1> */}
      </div>
      <div>
        <Row>
          <Col span={12}>
            <div
              style={{
                height: "680px",
                width: "680px",
                backgroundColor: "#635755  ",
              marginLeft:"60px",
                marginTop:"150px"
              }}
            >
              <img
                src="https://todayinhistorydotblog.files.wordpress.com/2018/06/3596c1300389ef7d9531f352754fe2e1.jpg?w=600"
                alt="adc"
                width="600px"
                height="600px"
                style={{ margin: "40px" }}
              ></img>
            </div>
          </Col>
          <Col span={12}>
            <div
              style={{
                marginRight: "250px",
                justifyContent: "center",
                display: "flex",
                textAlign: "center",
                marginTop: "50px",
                color: "black",
              }}
            >
              <h1
                style={{
                  fontFamily: "'Lobster Two', cursive",
                  fontSize: "70px", marginTop:"100px"
                }}
              >
                The Strategy Story
                <Divider></Divider>
              </h1>
            </div>

            <p
              style={{
                justifyContent: "center",
                display: "flex",
                textAlign: "center",
                marginRight: "250px",
                fontSize: "25px",
                fontFamily: "'Neuton', serif",
              }}
            >
              There may not be a single Indian who doesn’t love ‘Lay’s’. It is
              everyone’s favorite potato chips to snack on. But not many know
              how it began. It all started with this man.
            </p>
            <p
              style={{
                justifyContent: "center",
                display: "flex",
                textAlign: "center",
                marginRight: "250px",
                fontSize: "25px",
                fontFamily: "'Neuton', serif",
              }}
            >
              Herman Lay, a salesperson in Nashville, Tennessee, was the first
              to sell Lay’s on behalf of Barrett Food Products Company in 1932.
              (U.S.). During the Great Depression, he was a traveling salesman,
              selling his chips from the back of his automobile on the roadway.
              “He believed in giving the most affordable prices and the highest
              quality products at an arm’s reach of every consumer,”
            </p>
            <p
              style={{
                justifyContent: "center",
                display: "flex",
                textAlign: "center",
                marginRight: "250px",
                fontSize: "25px",
                fontFamily: "'Neuton', serif",
              }}
            >
              After six years, when Barrett fell on hard times, Herman bought
              the firm and renamed it H. W. Lay & Company. H.W. Lay & Company
              was the company’s original name until 1944 when Herman chose to
              condense it to the ICONIC Lay’s Potato Chips.
            </p>
          </Col>
        </Row>
      </div>

      <br />
      <br />
      <CommanFooter />
    </div>
  );
}
