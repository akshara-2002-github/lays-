
import React from "react";
import { Button, Dropdown, Card } from "antd";
import { Col, Divider, Row } from "antd";


const ShowMore = (images, title, price) => {
 
  return (
    <Col span={4}>
        
      <Card hoverable >
        <img src={images} alt={title} width="100%" height="50%"></img>
        <div style={{ textAlign: "center",
            fontFamily: "roboto",
            fontSize: "15px",}}>

        </div>
        <h2
         
        >
          {title}
        </h2>
        <p
         
        >
          {price}
        </p>
      </Card>
    </Col>
  );
};
const items = [
  {
    key: "1",
    label: (
      <div>
        <Divider orientation="center" style={{ fontFamily: "roboto" }}>
          <b>
            <u>COLLECTIONS</u>
          </b>
        </Divider>
        <Row gutter={[16, 16]}>
          {ShowMore(
            "https://cdn.shopify.com/s/files/1/0389/1006/6733/articles/102750-8_6-lays-potato-chips-indias-magic-masala_1_540x.jpg?v=1675193642",
            "Magic Masala",
            "$19.19"
          )}
          {ShowMore(
            "https://p-my.ipricegroup.com/e61467a1e19c23444336c7e4ff64e47d184d1b5b_0.jpg",
            "Classic Lays",
            "$20.00"
          )}
          {ShowMore(
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEwz3Ca4-jhaTZT40FzL9GQ_7MxC0eMSBMvMiRdz_rHyajKps",
            "American Style",
            "$22.00"
          )}
          {ShowMore(
            "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTS1Bhd19LcauE5mJlfnutK7TBM4OungxG5fE0o5-JtLZj70aLS",
            "Different Moments",
            "$15.00"
          )}
          {ShowMore(
            "https://assets.bonappetit.com/photos/6256dfb9e0d35a99121f6729/1:1/w_1266,h_1266,c_limit/0413-junk-food-lays-lede.jpg",
            "Roasted Classic",
            "$25.20"
          )}

          {ShowMore(
            "https://mir-s3-cdn-cf.behance.net/project_modules/fs/e1a7bf87291807.5db33935b9b1f.jpg",
            "Poppables",
            "$20.00",
            <br />
          )}
        </Row>
      </div>
    ),
  },
];

function ButtonContent2() {
  return (
    <div>
      <div>
      <br></br>
        <Dropdown
          menu={{
            items,
          }}
          placement="bottom"
          arrow
        >
          
          <Button
            onClick={() => console.log("you clicked me")}
            type="submit"
            style={{ color: "black", fontSize: "15px", fontFamily: "serif",border:"1px solid grey" }}
          >
            Show More
          </Button>
        </Dropdown>
      </div>
    </div>
  );
}
export default ButtonContent2;
