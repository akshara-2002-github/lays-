
import React from "react";
import CommanFooter from "../Footer/CommanFooter";

function AboutUs() {
  return (
    <div style={{ backgroundImage: `url("https://i.pinimg.com/564x/62/a6/b0/62a6b02a77c84bfdaaed8637ed0fccb3.jpg")`,}}>


          <img
            src="https://lays.com/sites/lays.com/files/2021-12/LAY%E2%80%99S%20POTATO%20CHIP%20MAGIC%20BARS-023_1920x625.png"
            alt="about us"
            width="100%"
            height="600px"
          ></img>
       

        <div
          style={{
            width: "1560px",
            height: "300px",
       
            margin: "70px",
            justifyContent: "center",
          }}
        >
          <br />
          <br />
          <h1 style={{ textAlign: "center", fontSize: "75px", color: "black" }}>
            <b>ᴀʙᴏᴜᴛ ᴜꜱ</b>
          </h1>
          <p
            style={{
              textAlign: "center",
              fontSize: "20px",
              padding: "20px",
              color: "black",
              fontFamily: "Trebuchet MS",
            }}
          >
            Wherever celebrations and good times happen, the LAY'S® brand will
            be there just as it has been for more than 75 years. With flavors
            almost as rich as our history, we have a chip or crisp flavor
            guaranteed to bring a smile on your face. At Lay’s we get it – and
            you may be closer to a farm than you think. So go ahead and discover
            what makes Lay’s oh so delicious. Every bag of Lay's Potato Chips in
            the US is made from our very own chip-perfecting potatoes grown on
            over 100 farms across the US and a handful in Canada. Stay tuned for
            more information about our farms across North America and to hear
            from some of our farmers!
          </p>
        </div>

      <CommanFooter />
    </div>
  );
}
export default AboutUs;
