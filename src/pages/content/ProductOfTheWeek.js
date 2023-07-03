import React from "react";
import { Col, Row ,Card} from "antd";
import ButtonContent from "./ButtonContent";

export default function ProductOfTheWeek() {
  return (
    <div style={{ margin: "40px" }}>
      <h1
        style={{
          fontSize: "100px",
          fontFamily: "'Lobster Two', cursive",
          color: "black",
          justifyContent:"center",
          display:"flex"
        }}
      >
        Product Of The Week
      </h1>
      <br />
      <br />
      <br />
      <br />
      <br />

      <Row gutter={[10,10]}>
        <Col span={12}>
          <Card hoverable  bodyStyle={{ border: 0, padding: 0, borderRadius: "5px" }}>
          <img
            src="https://www.lays.com/sites/lays.com/themes/lays/img/img-aboutus.jpg"
            alt="vsdv"
            width="800px"
            height="620px"
          ></img>
          </Card>
        </Col>

        <Col span={12}>
          <Row
            style={{
    
              justifyContent: "center",
            }}
          >
            <Card hoverable  bodyStyle={{ border: 0, padding: 0, borderRadius: "5px" }}>
            <img
              src="https://www.tastyrewards.com/sites/default/files/2023-06/PEPSICO_P7_Coupon_EN.jpg "
              alt="efadv"
              width="800px"
              height="620px"
            ></img>
            </Card>
          </Row>
         
        </Col>
      </Row>

     
    </div>
  );
}

// import React from "react";
// import { Col, Divider, Row, Space, Button, Card } from "antd";

// function ProductOfTheWeek() {
//   const ImageGallery = (Image, title) => {
//     return (
//       <Row justify={"space-between"}>
//       <Col span={8}>

//           <img src={Image} alt={title} width="100px" height="100px"></img>
//           <p>{title}</p>

//       </Col>
//       </Row>
//     );
//   };

//   const LastestProduct = (imageUrl, Heading, price) => {
//     return (
//       <div>
//         <Row justify={"space-between"}>

//               <img src={imageUrl} alt="layssss" width="80%" height="400"></img>

//             <br />
//             <br></br>

//             <Row gutter={[16, 16]}>
//               {ImageGallery(
//                 "https://target.scene7.com/is/image/Target/GUEST_f8f61c2d-4779-4f9d-a73f-c50b4f45a9e9?wid=488&hei=488&fmt=pjpeg",
//                 "baked lays"
//               )}

//               {ImageGallery(
//                 "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiWKquHOYeeYcLjMzqTY6BtLBI7cOMmxt9CiKx4Wy8pc-RgKRV",
//                 "cuban"
//               )}

//               {ImageGallery(
//                 "https://www.pepsicoproductfacts.com/content/image/products/5120b5386ccd435_00028400666909_C1C1.png?r=20230512",
//                 "blt"
//               )}
//             </Row>

//           <Col style={{ marginLeft: "200px", marginTop: "10px" }} flex={2}>
//             <h1 style={{ fontSize: "40px"}}>{Heading}</h1>

//             <p
//               style={{
//                 fontSize: "17px",
//               }}
//             >
//               {price}
//             </p>

//             <Divider></Divider>

//             <p
//               style={{
//                 fontSize: "20px",
//               }}
//             >
//               <b style={{ fontSize: "22px" }}>ꜱɪᴢᴇ</b> : ʟᴀʀɢᴇ
//             </p>

//             <Space direction="vertical">
//               <Space wrap>
//                 <Button >Small</Button>
//                 <Button>Medium</Button>
//                 <Button type={"primary"}>
//                   Large
//                 </Button>
//               </Space>
//             </Space>

//             <Divider></Divider>

//             <h5
//               style={{
//                 fontSize: "20px",
//               }}
//             >
//               Qᴜᴀɴᴛɪᴛʏ
//             </h5>
//             <div
//               style={{
//                 height: "40px",
//                 Width: "40px",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 background: "whitesmoke",
//                 border: "1px solid grey",
//               }}
//             >
//               <span>
//                 <button
//                   style={{
//                     width: "100%",
//                     textAlign: "center",
//                     fontSize: "20px",
//                     background: "whitesmoke",
//                     border: "whitesmoke",
//                     cursor: "unset",
//                   }}
//                 >
//                   -
//                 </button>
//               </span>
//               <span style={{ fontSize: "15px", padding: "10px" }}>01</span>
//               <span>
//                 <button
//                   style={{
//                     width: "100%",
//                     textAlign: "center",
//                     fontSize: "20px",
//                     background: "whitesmoke",
//                     border: "whitesmoke",
//                     cursor: "unset",
//                   }}
//                 >
//                   +
//                 </button>
//               </span>
//             </div>
//             <Divider></Divider>

//             <div>
//               <button
//                 style={{
//                   height: "40px",
//                   Width: "60px",
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   paddingLeft: "80px",
//                   paddingRight: "80px",
//                 }}
//               >
//                 ADD TO CART
//               </button>
//             </div>
//             <br></br>
//             <div>
//               <button
//                 style={{
//                   height: "40px",
//                   Width: "60px",
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   paddingLeft: "80px",
//                   paddingRight: "90px",
//                 }}
//               >
//                 BUY IT NOW
//               </button>
//             </div>
//           </Col>
//         </Row>
//       </div>
//     );
//   };

//   return (
//     <div>
//       <h1
//         style={{
//           color: "Black",
//           fontSize: "75px",
//           fontFamily: "roboto",
//           textAlign: "center",
//         }}
//       >
//         Product Of the Week
//       </h1>

//       <Row gutter={[20, 20]}>
//         {LastestProduct(
//           "https://www.foodandwine.com/thmb/mh5vjWr-WSC09xQR34eE9Cd74Qs=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Lays-New-Sandwich-Flavored-Chips-FT-BLOG0523-10aba2cba4874a5a9e76d282515e7b05.jpg",
//           "𝗕𝗔𝗞𝗘𝗗 𝗟𝗔𝗬𝗦",
//           "Rs 19.00"
//         )}
//       </Row>
//     </div>
//   );
// }
// export default ProductOfTheWeek;
