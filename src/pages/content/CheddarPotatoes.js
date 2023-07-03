import React from "react";
import { Row, Col } from "antd";
import CommanFooter from "../Footer/CommanFooter";
import {
  FieldTimeOutlined,
  CoffeeOutlined,
  StarOutlined,
  FireOutlined,
} from "@ant-design/icons";

export default function CheddarPotatoes() {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url("https://i.pinimg.com/564x/62/a6/b0/62a6b02a77c84bfdaaed8637ed0fccb3.jpg")`,
          padding: "30px",
        }}
      >
        <h1
          style={{
            color: "black",
            fontFamily: "times new romen",
            fontSize: "70px",
            padding: "20px",

            textAlign: "center",
          }}
        >
          Mini Lays Shepherd’s Pies
        </h1>

        <img
          src="https://lays.com/sites/lays.com/files/2022-05/Lays%20One%20Bite%20Shepherds%20Pies-039_1200x1200.png"
          alt="vwdovnw"
          width="1000px"
          height="890px"
          style={{ marginLeft: "300px", padding: "40px" }}
        ></img>
        <div style={{ padding: "40px", marginLeft: "80px" }}>
          <Row gutter={[10, 10]}>
            <Col span={6}>
              <p style={{ fontSize: "28px", fontFamily: "times new romen" }}>
                <FieldTimeOutlined /> <u>Total Time:</u> 1 hr 5 mins
              </p>
            </Col>
            <Col span={6}>
              <p style={{ fontSize: "28px", fontFamily: "times new romen" }}>
                <CoffeeOutlined /> <u>Prep Time:</u>
                20 mins
              </p>
            </Col>
            <Col span={6}>
              <p style={{ fontSize: "28px", fontFamily: "times new romen" }}>
                <FireOutlined />
                <u>Cook Time:</u>
                45 mins
              </p>
            </Col>
            <Col span={6}>
              <p style={{ fontSize: "28px", fontFamily: "times new romen" }}>
                <StarOutlined />
                <u> Servings:</u>10
              </p>
            </Col>
          </Row>
        </div>
        <div style={{ padding: "20px" }}>
          {/* <h1 style={{ fontSize: "75px" }}>Description:</h1> */}
          <br />
          <h5 style={{ fontSize: "40px" }}>
            <u>Featuring LAY’S</u>
          </h5>
          <br />
          <p style={{ fontSize: "25px" }}>
            These adorable mini shepherd’s pies taste as great as they look!
            These baked mashed potatoes are made from LAY’S® Original Potato
            Chips for easy cheesy potatoes that are loaded with yummy
            flavors.With flavors almost as rich as our history, we have a chip
            or crisp flavor guaranteed to bring a smile on your face.Yes! No
            peeling or prepping or fussing with these easy-peasy mashed potatoes
            prepared with LAY’S® Original Potato Chips.
          </p>
        </div>

        <div style={{ padding: "20px", marginTop: "20px" }}>
          <Row gutter={[10, 10]}>
            <Col span={12}>
              <h1>Incredients:</h1>
              <ul style={{ fontSize: "20px" }}>
                <li>
                  3/4 bag (7.75 oz bag) LAY’S® Original Potato Chips, divided
                </li>
                <li>3 oz brick-style cream cheese, cubed and softened</li>
                <li>1/4 cup unsalted butter, divided</li>
                <li>1 onion, diced</li>
                <li>2 cloves garlic, minced</li>
                <li>1 lb lean ground beef</li>
                <li>1 tsp paprika</li>
                <li>1/2 tsp black pepper</li>
                <li>1/4 tsp salt</li>
                <li>1/4 cup ketchup</li>
                <li>2 tbsp tomato paste</li>
                <li>1 tbsp Dijon mustard</li>
                <li> 1 tbsp Worcestershire sauce</li>
                <li>
                  2 pkgs (each 12 oz) refrigerator buttermilk biscuits (20
                  biscuits total){" "}
                </li>
                <li>2 tbsp finely chopped fresh parsley </li>
              </ul>
            </Col>
            <Col span={12}>
              <h1>How to make it</h1>
              <ul style={{ fontSize: "20px" }}>
                <li>Preheat oven to 375°F. Grease 20 muffin cups. </li>
                <li>
                  In medium saucepan set over medium-high heat, bring 1 cup
                  water to a boil. Stir in 1 1/2 cups Lay’s® Original Potato
                  Chips. Reduce heat to low. Cook, stirring occasionally, for 4
                  minutes or until chips are moistened and resemble mashed
                  potatoes.{" "}
                </li>
                <li>
                  Stir in cream cheese and 2 tbsp butter. Cook, stirring
                  occasionally, for 2 minutes or until cream cheese is melted
                  and mashed potatoes are creamy. Remove from heat.{" "}
                </li>
                <li>
                  In large skillet set over medium-high heat, melt remaining
                  butter. Add onion, garlic, ground beef, paprika, pepper and
                  salt. Cook, stirring occasionally, for 8 minutes or until beef
                  has started to brown and onions are starting to soften. Stir
                  in ketchup, tomato paste, mustard and Worcestershire sauce .
                  Cook, stirring occasionally, for 3 minutes or until beef is
                  cooked and sauce has thickened.{" "}
                </li>
                <li>
                  {" "}
                  Separate biscuits and press into bottom and up sides of muffin
                  cups. Divide beef mixture among muffin cups, and top evenly
                  with mashed potatoes
                </li>
                <li>
                  Lightly crush remaining potato chips and sprinkle over mashed
                  potatoes.{" "}
                </li>
                <li>
                  Bake for 20 minutes or until biscuits have risen and are set,
                  and topping is golden brown. Garnish each pie with parsley
                  before serving.{" "}
                </li>

                <p>
                  <b>Tips:</b> Substitute ground beef with ground turkey if
                  preferred, adding 1 tbsp finely chopped fresh rosemary or 2
                  tbsp finely chopped fresh sage for a complementary flavor
                  boost.
                </p>
              </ul>
            </Col>
          </Row>
        </div>
      </div>
      <CommanFooter />
    </div>
  );
}
