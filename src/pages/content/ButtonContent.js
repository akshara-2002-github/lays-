import React from "react";
import { Col, Divider, Row } from "antd";
import Marquee from "react-fast-marquee";
const ShowMore = (images, title, price) => {
  return (
    <Col span={4}>
      <img
        src={images}
        alt={title}
        width="270px"
        height="195px"
        
      ></img>
      <h3 style={{ textAlign: "left", fontFamily: "roboto", fontSize: "15px" }}>
        {title}
      </h3>
      <p style={{ textAlign: "left", fontFamily: "roboto", fontSize: "15px" }}>
        {price}
      </p>
    </Col>
  );
};

function ButtonContent() {
  return (
    <div>
        
      <Divider orientation="center" style={{ fontFamily: "roboto" }}>
        <b>
          <u>Shop by Collection</u>
        </b>
      </Divider>
      <Marquee>
        <Row gutter={[10, 10]} justify={"space-between"}>
          {ShowMore(
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe6U6VgfNPfquSYOqSoZyQvxWiYqBiJwRbsw&usqp=CAU",
            "Fruit Cake",
            "$19.20"
          )}
             {ShowMore(
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwCaJXds-dhwnBs6oi2YgGCAbsQ32jM6WiqHWI7HkosQiUE5qc",
            "Poke Bowl",
            "$20.00"
          )}
          {ShowMore(
            "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTAiJJha9H-t7Hi2cMtVLiBLmOsBwzfFb63v4GCKUdrk_t8XZ5H",
            "Oysters",
            "$25.00"
          )}

          {ShowMore(
            "https://www.insidesport.in/wp-content/uploads/2021/02/1-2.jpg?w=809",
            "Choccy Milk",
            "$22.00"
          )}
          {ShowMore(
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTZtKw-Vh2eDafOQ7BZHszHdIl33rvHb7QyQ&usqp=CAU",
            "Anything But Pumpkin Spice",
            "$12.00"
          )}
       
          
        
        <br/>
        <br/>
        <br/>
        </Row>
      </Marquee>
    </div>
  );
}

export default ButtonContent;
