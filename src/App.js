import React, { Suspense, lazy, useState } from "react";
import PotraitComponent from "./PotraitComponent.js";
import LoadingComponent from "./LoadingComponent.js";
const ParallaxComponent = lazy(() => import("./ParallaxComponent.js"));

const ApplicationMode = () => {
  const [potrait, setPotrait] = useState(
    window.screen.orientation === "portrait-primary" ||
      window.screen.availWidth < window.screen.availHeight
  );
  console.log(potrait);
  window.onload = () => {
    window.screen.orientation.type === "portrait-primary"
      ? setPotrait(true)
      : setPotrait(false);
  };
  window.screen.orientation.onchange = (e) => {
    e.target.type === "portrait-primary" ? setPotrait(true) : setPotrait(false);
  };
  return potrait ? (
    <PotraitComponent />
  ) : (
    <Suspense fallback={<LoadingComponent />}>
      {" "}
      <ParallaxComponent />
    </Suspense>
  );
};

export default function App() {
  return <ApplicationMode />;
}
