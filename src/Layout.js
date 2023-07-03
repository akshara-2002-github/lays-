import { Outlet, Link } from "react-router-dom";
import React from "react";
import { Row, Col } from "antd";


const headerStyle = {
  color: "white",
  fontFamily: "times new romen",
  letterSpacing:'1px',
  fontSize: "18px",
  padding: "20px",
  textDecoration:"none"
};

const Layout = () => {
  return (
    <header >
      <div >

  
      <Row style={{ justifyContent: "center", display: "flex",backgroundImage:`url("https://i.pinimg.com/564x/c9/d2/e1/c9d2e16da442bf09cb9a2173acaf47ea.jpg")`  }}>
        <Col>
          <Row>
          
            <div style={{ padding: "40px" }}>
              <nav>
                <Link to="/" style={headerStyle}>
                  <b>Main</b>
                </Link>

                {/* <Link to="/AboutUs" style={headerStyle}>
                  <b>About Us</b>
                </Link> */}

                <Link to="/Recipes" style={headerStyle}>
                  <b>Recipes</b>
                </Link>
                <Link to="/Products" style={headerStyle}>
                  <b>Products</b>
                </Link>
                <Link to="/WhatsNew" style={headerStyle}>
                  <b>Whats New</b>
                </Link>

                <Link to="/OurStory" style={headerStyle}>
                  <b>Our Story</b>
                </Link>
              </nav>
            </div>
          </Row>
        </Col>
      </Row>

      <Outlet />
      </div>
    </header>
  );
};

export default Layout;
