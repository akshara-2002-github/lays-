import React from "react";
import ShopByCollection from "./ShopByCollection.js";
import ProductOfTheWeek from "./ProductOfTheWeek";
import About from "./About.js";
import YoutubeVedio from "./YoutubeVedio.js";
import CommanFooter from "../Footer/CommanFooter.js";
import LineBreak2 from "./LineBreak2.js";
import PageDecor from "./PageDecor.js";

// const contentStyle = {
//   textAlign: "center",
 
// };

function ProductContent() {
  return (
    <div>
      
      <About />
      <YoutubeVedio />
    <div style={{backgroundImage:`url("https://i.pinimg.com/564x/62/a6/b0/62a6b02a77c84bfdaaed8637ed0fccb3.jpg")`}}>
    <PageDecor />
     
     <ShopByCollection />
     <br />
     <br />
     <br />
     <br />
     <br />
    
     <ProductOfTheWeek />
     <LineBreak2 />
    </div>
      <CommanFooter />
    </div>
  );
}
export default ProductContent;
