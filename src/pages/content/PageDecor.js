import React from "react";
import { Col,  Row } from "antd";

export default function PageDecor() {
  return (
    <div  
    >
        <br />
      <br />
      <br />
      <br />
      <Row>
        <Col span={12}>
          <div
            style={{
              padding: "80px",
              height: "500px",
              width: "600px",
              backgroundColor: "#635755  ",
              margin: "60px",
            }}
          >
            <img
              src="https://www.lays.com/sites/lays.com/files/styles/recipe_thumbnail/public/2022-03/Loaded%20Eggs%20on%20Potato%20Chips-014-1200x1200.png?itok=q1Z4U9-I"
              alt="ujvb"
              width="590px"
              height="500px"
              style={{ marginLeft: "-35px", marginTop: "-35px" }}
            ></img>
          </div>
        </Col>

        <Col span={12}>
          <div>
            <h1
              style={{
                color: "black",
                fontFamily: "'Pattaya', sans-serif",
                fontSize: "50px",
                textAlign: "Center",
                marginTop: "100px",
                justifyContent: "center",
                display: "flex",
                
                marginRight:"100px"
              }}
            >
              From Griddle Flip to yummy Chips
            </h1>
            <hr style={{width:"90%"}}/>

            <p
              style={{
                justifyContent: "center",
                display: "flex",
                textAlign: "center",
                marginRight: "100px",
                fontSize: "25px",
                fontFamily: "'Neuton', serif",
              }}
            >
              Lay's constantly mixes up their flavor lineup with over 200
              varieties created to date. The chips range from common flavors,
              like salt and vinegar and barbecue, to more unusual ones, like
              cappuccino, vegetable soup, and Beer 'n Brats.As of 2018,
              Frito-Lay buys its potatoes from 120 farms across 25 different
              states, Enjoli Francis and Eric Noll reported for ABC News. Some
              of these states include Wisconsin, Maine, North Dakota, and
              Texas.Some of the flavors to come out of the contest include
              wasabi ginger, cheesy garlic bread, and Southern biscuits and
              gravy.Lay's has held several contests over the years to find the
              next great chip flavor, offering a $1 million prize to whoever
              submits the best new recipe.{" "}
            </p>
          </div>
        </Col>
      </Row>

      <Row>
        <Col span={12}>
          
        <div>
            <h1
              style={{
                color: "black",
                fontFamily: "'Pattaya', sans-serif",
                fontSize: "50px",
                textAlign: "Center",
                marginTop: "240px",
                justifyContent: "center",
                display: "flex",
                marginLeft:"100px"
              }}
            >
              Old Spice "The original
            </h1>
            <hr style={{width:"80%",marginLeft:"100px"}}/>

            <p
              style={{
                justifyContent: "center",
                display: "flex",
                textAlign: "center",
                marginLeft: "100px",
                fontSize: "25px",
                fontFamily: "'Neuton', serif",
             
              }}
            >
               Lay’s was first sold in 1932 by a salesman Herman Lay in
                Nashville, Tennessee (U.S.).The inventor always believed in providing
                quality snack to the consumers at affordable prices.During the same time, another chip founder Charles E. Doolin,
                who fell in love with corn chips or Fritos ( in Spanish, it
                meant fried), and found ‘The Frito Company.‘ Later on, Lay’s Company merged with Frito Lay in 1961 to become
                “Frito-Lay”. And finally the new company merged with PepsiCo in
                1965. It was one of the first brands to be promoted on
                television, with an animated character named ‘Oscar-The Happy
                Potato.
            </p>
          </div>
        </Col>
        <Col span={12}>
        <div
            style={{
              backgroundColor: "#635755  ",
              height: "550px",
              width: "600px",
              marginLeft:"200px",
              marginTop:"170px"
         
            }}
          >
            <img
              src="https://lays.com/sites/lays.com/files/2022-02/Lays%20Sour%20Cream%20%26%20Onion%20Bloom-072-1200x1200.png"
              alt="ujvb"
              width="590px"
              height="550px"
              style={{ marginLeft: "-35px", marginTop: "40px" }}
            ></img>
          </div>
        </Col>
      </Row>




    </div>
  );
}
