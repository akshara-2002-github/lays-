import React from "react";
import { Carousel } from "antd";

// import { Row, Col, Card} from "antd";
// import ButtonContent2 from "./ButtonContent2";

function ShopByCollection() {
  const ImageSlider = (imageLink) => {
    return (
      <div style={{marginTop:"160px"}}>
        {/* <h1 style={{ fontFamily: "'Lobster Two', cursive", fontSize: "70px" }}>Shop By Collection</h1> */}
        <img src={imageLink} alt="lays" width="100%" height="920"></img>
      </div>
    );
  };
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  return (
    <div>
      {/* <h1 style={{ textAlign: "center", fontSize: "100px" }}>
        ꜱʜᴏᴘ ʙʏ ᴄᴏʟʟᴇᴄᴛɪᴏɴ
  </h1> */}
  <br/>
  <br/>
  
      <Carousel afterChange={onChange} style={{margin:"50px"}}>
      <div>
          {ImageSlider(
            "https://www.passionateinmarketing.com/wp-content/uploads/2021/12/Master.png"
          )}
        </div>
        <div>
          {ImageSlider(
            "https://www.morillas.com/assets/themes/www.morillas.com/img/workbigmediamodule/LaysGourmet_4.jpg"
          )}
        </div>
        <div>
          {ImageSlider("https://i.ytimg.com/vi/KlqK_wfQKxM/maxresdefault.jpg")}
        </div>
        <div>
          {ImageSlider("https://i.ytimg.com/vi/--8Dv3TqnLk/maxresdefault.jpg")}
        </div>
       
       
      </Carousel>
      {/* <ButtonContent2 /> */}
    </div>
  );
}
export default ShopByCollection;
