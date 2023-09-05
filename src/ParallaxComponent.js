import React, { useEffect, useRef, useState } from "react";
import { Parallax } from "@react-spring/parallax";
import {
  TextComponent,
  AboutMe,
  MySkills,
  MyWork,
  ContactPage,
} from "./SubComponents.js";
import Page from "./Page.js";
import { RiMoonClearLine, RiSunLine } from "react-icons/ri";
import { createContext } from "react";

export const IsDarkMode = createContext(false);

function getLocalStorage() {
  return JSON.parse(localStorage.getItem("isDark")) ?? false;
}

export default function ParallaxComponent() {
  const [isDark, setIsDark] = useState(getLocalStorage);
  useEffect(() => {
    localStorage.setItem("isDark", JSON.stringify(isDark));
  }, [isDark]);

  const scrollOffset = useRef();
  return (
    <IsDarkMode.Provider value={isDark}>
      <Parallax
        pages={5}
        style={{ top: "0", left: "0" }}
        ref={scrollOffset}
        horizontal
      >
        <Page
          offset={0}
          speed={0.2}
          style={{
            display: "flex",
          }}
          onDoubleClick={() => scrollOffset.current.scrollTo(1)}
        >
          <TextComponent />
        </Page>
        <Page
          offset={1}
          speed={0.5}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onDoubleClick={() => scrollOffset.current.scrollTo(2)}
        >
          {" "}
          <AboutMe />
        </Page>
        <Page
          offset={2}
          speed={0.3}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onDoubleClick={() => scrollOffset.current.scrollTo(3)}
        >
          <MySkills />
        </Page>
        <Page
          offset={3}
          speed={0.6}
          style={{
            display: "flex",
          }}
          onDoubleClick={() => scrollOffset.current.scrollTo(4)}
        >
          <MyWork />
        </Page>
        <Page
          offset={4}
          speed={0.7}
          onDoubleClick={() => scrollOffset.current.scrollTo(0)}
        >
          <ContactPage />
        </Page>
      </Parallax>
      <button
        className={isDark ? "modeSet dark" : "modeSet light"}
        onClick={() => {
          setIsDark(!isDark);
        }}
      >
        {isDark ? <RiSunLine /> : <RiMoonClearLine />}
      </button>
    </IsDarkMode.Provider>
  );
}
