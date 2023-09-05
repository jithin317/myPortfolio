import React from "react";
import pGif from "./portfolioImages/Potrait Gif.gif";
export default function PotraitComponent() {
  return (
    <div className="potraitLayer">
      <img
        alt="picture11"
        src={pGif}
        style={{
          minWidth: "100%",
          backgroundSize: "cover",
          objectFit: "cover",
        }}
      />
    </div>
  );
}
