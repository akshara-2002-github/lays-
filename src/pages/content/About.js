import React from "react";
import BreakLine from "./BreakLine";



export default function About() {
  return (
    <>
      <div
        style={{
          backgroundImage:`url("https://i.pinimg.com/564x/c9/d2/e1/c9d2e16da442bf09cb9a2173acaf47ea.jpg")`,
          color: "white",
          fontSize: "80px",
          fontFamily: "Lato",
          textAlign: "center",
         
        }}
      >
        <h1 style={{fontFamily:"'Pattaya', sans-serif",fontSize:"150px",paddingTop:"90px"}}>
        Lay's
        </h1>
        <h1 style={{ fontFamily: "'Lobster Two', cursive", fontSize: "70px" ,paddingTop:"30px"}}> The Sound of Flavor<br/>
        Betcha can't eat just one</h1>
        <br />
        <BreakLine />
      </div>
    </>
  );
}
