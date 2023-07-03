import React from "react";
import { Col, Row, Divider } from "antd";
import CommanFooter from "../Footer/CommanFooter";
import Marquee from "react-fast-marquee";

export default function WhatsNew() {
  return (
    <div
      style={{
        backgroundImage: `url("https://i.pinimg.com/564x/62/a6/b0/62a6b02a77c84bfdaaed8637ed0fccb3.jpg")`,
      }}
    >
      <div
        style={{
          backgroundImage: `url("https://i.pinimg.com/564x/c9/d2/e1/c9d2e16da442bf09cb9a2173acaf47ea.jpg")`,
          width: "1686px",
          height: "1565px",
        }}
      >
        <h1
          style={{
            fontFamily: " Sofia, sans-serif",
            fontSize: "110px",
            color: "white",
            paddingTop: "180px",
          
            textAlign:"center"
          }}
        >
          “Change doesn’t just happen <br />  It happens with Tastes.”
        </h1>

        <Row style={{ marginTop: "270px" }}>
          <Col span={12}>
            <img
              src="https://i.pinimg.com/736x/de/36/5f/de365fb618b7ecd73a03586c80f20134.jpg"
              alt="messi"
              style={{ padding: "0px", borderTopRightRadius: "140px" }}
              width="700px"
              height="850px"
            ></img>
          </Col>

          <Col span={12}>
            <br />
            <br />
            <br />
            <h1
              style={{
                fontFamily: "'Cookie', cursive",
                fontSize: "80px",
                color: "white",
                textAlign: "center",
              }}
            >
              " Potato Lays ".
            </h1>
            <Divider></Divider>
            <p
              style={{
                fontFamily: "times new romen",
                color: "white",
                fontSize: "25px",
                marginRight: "25px",
                textAlign: "center",
              }}
            >
              The only way to describe the classic, potato chip flavor of Lay's
              is a thinly sliced, salty, crunchy potato. I got exactly what I
              was expecting when I bit into this Classic flavor, and that's
              something that shouldn't be overlooked. Its crisp flavor is iconic
              and sometimes you just need a plain old potato chip. Always fresh
              tasting, crispy and delicious, each bag of Lay’s Classic® potato
              chips is made with specially selected potatoes and to the highest
              quality standards. Crispy and light tasting, Lay’s Classic® potato
              chips were designed to put a smile on everyone’s face, which makes
              them the perfect snack to share. Whether you keep a bag in your
              desk to complement your chicken salad sandwich at lunchtime or
              grab a bag to share at your next social occasion, Lay’s Classic®
              chips will surely brighten your day! It’s the ‘Classic’ snack
              tradition Canadians love!Lay's original chips are thin, crisp and
              does not have a stale oil taste. It is lightly salted and highly
              addictive. A crunch with every bite and yet so light its as if you
              haven't eaten much.
            </p>
          </Col>
        </Row>
      </div>

      <div>
        <br />
        <br />
        <br />
        <br />
        <br />

        <Row>
          <Col span={12}>
            <br />
            <br />
            <br /> <br />
            <br />
            <br />
            <h1
              style={{
                fontFamily: "'Cookie', cursive",
                fontSize: "80px",
                color: "black",
                textAlign: "center",
              }}
            >
              " Classic Potato Chips".
            </h1>
            <Divider></Divider>
            <p
              style={{
                fontFamily: "times new romen",
                textAlign: "center",
                color: "black",
                fontSize: "25px",
                marginLeft: "25px",
              }}
            >
              Does Lays Classic have pork? For those who wish to avoid these
              enzymes, we have a list of "Products Made without Porcine Enzymes"
              available here. Our non-seasoned, salted-only snacks, such as
              Lay's Classic, Ruffles Original, Fritos Original, Santitas,
              Tostitos, SunChips Original and Rold Gold Pretzels, do not have
              animal enzymes of any kind. Always fresh tasting, crispy and
              delicious, each bag of Lay’s Classic® potato chips is made with
              specially selected potatoes and to the highest quality standards.
              Crispy and light tasting, Lay’s Classic® potato chips were
              designed to put a smile on everyone’s face, which makes them the
              perfect snack to share. Whether you keep a bag in your desk to
              complement your chicken salad sandwich at lunchtime or grab a bag
              to share at your next social occasion, Lay’s Classic® chips will
              surely brighten your day! It’s the ‘Classic’ snack tradition
              Canadians love!At Lay’s we get it – and you may be closer to a
              farm than you think. So go ahead and discover what makes Lay’s oh
              so delicious. Every bag of Lay's Potato Chips in the US is made
              from our very own chip-perfecting potatoes grown on over 100 farms
              across the US and a handful in Canada. Stay tuned for more
              information about our farms across North America and to hear from
              some of our farmers!
            </p>
          </Col>
          <Col span={12}>
            <img
              src="https://i.pinimg.com/564x/22/a7/e6/22a7e6562c199ceb3f980453e28c2c2c.jpg"
              alt="vbkesj"
              style={{
                padding: "0px",
                borderTopLeftRadius: "140px",

                marginLeft: "190px",
              }}
              width="680px"
              height="990px"
            ></img>
          </Col>
        </Row>
      </div>

      <br />
      <br />
      <br />

      <Marquee>
        <h1
          style={{
            fontSize: "130px",
            fontFamily: "'Lobster Two', cursive",
            margin: "70px",
            textAlign: "center",
            padding: "60px",
            color: "black",
          }}
        >
          With Years Of Experience
        </h1>
      </Marquee>
      <CommanFooter />
    </div>
  );
}






// import React from "react";
// import { Row, Col, Card } from "antd";

// export default function WhatsNew() {
//   return (
//     <div style={{ marginTop: "20px", backgroundColor: "#EFB435" }}>
//       <Row>
//         <Col span={10}>
//           <img
//             src="https://i.pinimg.com/564x/5f/ae/b2/5faeb205dead60b7a59bdee197dd4b55.jpg"
//             alt="vhso"
//             width="700px"
//             height="500px"
//           ></img>
//         </Col>
//         <Col span={16}>
//           <h1 style={{ fontFamily: "Time new romen", padding: "40px" }}>
//             Whats New ?
//           </h1>
//         </Col>
//       </Row>
//     </div>
//   );
// }

// <div style={{marginTop:"20px"}}>
// <Row>
//  <Col span={10}  >
//    <img src='https://lays.com/sites/lays.com/files/2021-07/XL%20LKC%20Jalapeno%20copy_0.png' alt='new' width="100%" height="800px"></img>
//  </Col>
//  <Col span={14}  >hi</Col>
// </Row>
// </div>
