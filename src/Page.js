import React, { Fragment } from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import { useContext } from "react";
import { IsDarkMode } from "./ParallaxComponent.js";
export default function Page({
  offset,
  speed,
  style,
  onDoubleClick,
  children,
}) {
  const cloudSrc = "https://awv3node-homepage.surge.sh/build/assets/cloud.svg";
  const starSrc = "https://awv3node-homepage.surge.sh/build/assets/stars.svg";
  const isDark = useContext(IsDarkMode);
  return (
    <Fragment>
      <ParallaxLayer
        offset={offset}
        style={
          isDark
            ? { background: "#222e32", transition: "1000ms ease" }
            : {
                background: "linear-gradient(rgba(135,188,222),#fff)",
                transition: "1000ms ease",
              }
        }
      />
      {isDark && (
        <ParallaxLayer
          offset={offset}
          style={{ background: `url(${starSrc})` }}
          factor={1.2}
        ></ParallaxLayer>
      )}

      <ParallaxLayer offset={offset} speed={0.8} style={{ opacity: 0.3 }}>
        <img
          src={cloudSrc}
          alt="picture1"
          style={{ display: "block", width: "20%", marginLeft: "25%" }}
        />
        <img
          src={cloudSrc}
          alt="picture2"
          style={{ display: "block", width: "10%", marginLeft: "15%" }}
        />
      </ParallaxLayer>
      <ParallaxLayer offset={offset + 0.1} speed={0.5} style={{ opacity: 0.6 }}>
        <img
          src={cloudSrc}
          alt="picture3"
          style={{ display: "block", width: "10%", marginLeft: "4%" }}
        />
        <img
          src={cloudSrc}
          alt="picture4"
          style={{ display: "block", width: "7%", marginLeft: "45%" }}
        />
      </ParallaxLayer>
      <ParallaxLayer offset={offset + 0.2} speed={0.6} style={{ opacity: 0.7 }}>
        <img
          src={cloudSrc}
          alt="picture5"
          style={{ display: "block", width: "20%", marginLeft: "12%" }}
        />
        <img
          src={cloudSrc}
          alt="picture6"
          style={{ display: "block", width: "7%", marginLeft: "45%" }}
        />
      </ParallaxLayer>
      <ParallaxLayer offset={offset + 0.6} speed={0.4} style={{ opacity: 0.4 }}>
        <img
          src={cloudSrc}
          alt="picture7"
          style={{ display: "block", width: "15%", marginLeft: "12%" }}
        />
        <img
          src={cloudSrc}
          alt="picture8"
          style={{ display: "block", width: "10%", marginLeft: "25%" }}
        />
      </ParallaxLayer>
      <ParallaxLayer offset={offset + 0.6} speed={0.1} style={{ opacity: 0.6 }}>
        <img
          src={cloudSrc}
          alt="picture9"
          style={{ display: "block", width: "15%", marginLeft: "8%" }}
        />
        <img
          src={cloudSrc}
          alt="picture10"
          style={{ display: "block", width: "10%", marginLeft: "20%" }}
        />
      </ParallaxLayer>
      <ParallaxLayer
        offset={offset}
        speed={speed}
        style={style}
        onDoubleClick={onDoubleClick}
      >
        {children}
      </ParallaxLayer>
    </Fragment>
  );
}
