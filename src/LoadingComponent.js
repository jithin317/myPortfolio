import React, { useContext } from "react";
import { IsDarkMode } from "./ParallaxComponent";
export default function LoadingComponent() {
  const isDark = useContext(IsDarkMode);
  return (
    <div
      style={
        !isDark
          ? {
              width: "100%",
              height: "100vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fcfcfc",
              background: "linear-gradient(rgba(135,188,222),#fff)",
              fontSize: "3rem",
            }
          : {
              background: "#222e32",
              color: "white",
              width: "100%",
              height: "100vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "3rem",
            }
      }
    >
      <h1>Loading Please Wait ...</h1>
    </div>
  );
}
