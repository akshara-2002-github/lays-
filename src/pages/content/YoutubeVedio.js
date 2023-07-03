import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";

export default function YoutubeVedio() {
  return (
    <div style={{backgroundColor:"black"}}>
    
      <iframe
        width="1700px"
        height="910px"
        src="https://player.vimeo.com/video/801720140?h=8c3dc277d2"
        title="YouTube video player"  
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>

    </div>
  );
}
