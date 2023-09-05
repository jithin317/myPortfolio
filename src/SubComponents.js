import {
  FaWhatsapp,
  FaGithub,
  FaLinkedin,
  FaArrowRight,
  FaArrowLeft,
  FaLocationDot,
  FaInstagram,
} from "react-icons/fa6";
import { BiSolidChevronsRight } from "react-icons/bi";
import { RiContactsFill, RiMailLine } from "react-icons/ri";
import { useState, useCallback, useRef } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Sector,
  Radar,
  RadarChart,
  PolarGrid,
  Legend,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";
import { data1, data2, data3, picArr } from "./Data.js";
import { useContext } from "react";
import { IsDarkMode } from "./ParallaxComponent.js";

export const TextComponent = () => {
  const isDark = useContext(IsDarkMode);
  return (
    <div className="wrapper">
      <div className="subContainer">
        <div className="textComponent">
          <div className="staticTxt">HI I'M</div>
          <ul className={isDark ? "dynamicTxt onDark" : "dynamicTxt"}>
            <li>
              <span>Jithin Mahadev .</span>
            </li>
            <li>
              <span>a Web Devoloper .</span>
            </li>
          </ul>
          <div className="icons">
            <ul className="links">
              <li>
                <a
                  href="https://wa.link/0dzf08"
                  className={"whatsApp"}
                  style={isDark ? { color: "white" } : { color: "black" }}
                >
                  <FaWhatsapp />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/jithin317"
                  className={"gitHub"}
                  style={isDark ? { color: "white" } : { color: "black" }}
                >
                  <FaGithub />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/jithin-mahadev-138582238"
                  className={"linkedIn"}
                  style={isDark ? { color: "white" } : { color: "black" }}
                >
                  <FaLinkedin />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="imgDiv">
          <img
            loading="lazy"
            alt="picture1"
            src={picArr[3]}
            style={{
              width: "100%",
              height: "100%",
              filter: "drop-shadow(0 0.3rem 0.5em rgba(0,0,0,0.6))",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export const AboutMe = () => {
  const isDark = useContext(IsDarkMode);
  const pStyle = isDark
    ? {
        fontSize: "1.2rem",
        lineHeight: "1.8rem",
        wordSpacing: "2px",
        color: "rgba(255,255,255,0.7)",
        fontWeight: "500",
      }
    : {
        fontSize: "1.2rem",
        lineHeight: " 1.8rem",
        wordSpacing: "2px",
        color: "rgba(0, 0, 0, 0.75)",
        fontWeight: "500",
      };
  return (
    <div className="wrapper">
      <div className="subContainer">
        <div className="aboutMe">
          <div
            className="profileImg"
            style={{
              background: `url(${picArr[7]})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <img
              loading="lazy"
              alt="picture2"
              src={picArr[0]}
              style={{ width: "100%", height: "100%", borderRadius: "inherit" }}
            />
          </div>
          <div className="textContent">
            <p style={pStyle}>
              <span>Greetings</span> I am Jithin, an adept web developer with a
              profound mastery of the intricate realms of React JS. Currently in
              the throes of my academic journey at Sree Venkateswara Group of
              Institutions, where I'm diligently pursuing an engineering degree
              in the illustrious realm of computer science, I find myself
              traversing the Final year. My ardor for web development is akin to
              a fervent flame that ignites my aspirations, compelling me to
              ascend to the echelons of a full stack devolopment. Beyond the
              confines of code and algorithms, my passions find solace in the
              boundless horizons of exploration, as I embark upon a ceaseless
              quest to unearth novel experiences. The symphony of coding
              resonates deeply within me, orchestrating my every moment, each
              keystroke a harmonious note in the grand opus of creation. My
              ambition, steadfast and unwavering, is to metamorphose into a
              paragon of software engineering brilliance, casting my imprint
              upon the landscape of full stack. Yet, my aspirations span
              further, unfurling the tapestry of my long-term objectives. As I
              peer into the nebulous future, the silhouette of a cybersecurity
              analyst materializes, adorned with the laurels of a distinguished
              institution. In essence, I am Jithin - an architect of
              possibilities, a weaver of code, and a voyager in pursuit of
              knowledge and innovation, charting a course towards a destiny as
              illustrious as it is transformative.
            </p>
          </div>
        </div>
        <div className="imgDiv" style={{ width: "40rem" }}>
          <img
            loading="lazy"
            src={picArr[4]}
            alt="picture3"
            style={{
              width: "100%",
              height: "100%",
              filter: "drop-shadow(0 0.3rem 0.5em rgba(0,0,0,0.6))",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export const MySkills = () => {
  const COLORS = [
    "#0088FE",
    "rgba(15,157,88,0.8)",
    "tomato",
    "#FF8042",
    "#42cdff",
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeIndex1, setActiveIndex1] = useState(0);
  const onPieEnter1 = useCallback(
    (_, index) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
  );
  const onPieEnter = useCallback(
    (_, index) => {
      setActiveIndex1(index);
    },
    [setActiveIndex1]
  );
  return (
    <div className="wrapper">
      <div className="subContainer">
        <div className="imgDiv" style={{ width: "40rem" }}>
          <img
            loading="lazy"
            src={picArr[5]}
            alt="picture4"
            style={{
              width: "100%",
              height: "100%",
              filter: "drop-shadow(0 0.3rem 0.5em rgba(0,0,0,0.6))",
            }}
          />
        </div>
        <div className="skillsCharts">
          <BiSolidChevronsRight className="forwardIcon" />
          <div>
            <RadarChart
              cx={240}
              cy={180}
              outerRadius={130}
              width={550}
              height={330}
              data={data3}
            >
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" />
              <PolarRadiusAxis domain={[0, 150]} />
              <Radar
                name="Efficiency"
                dataKey="A"
                stroke="#8884d8"
                fill="#8884d8"
                fillOpacity={0.6}
              />
              <Legend />
            </RadarChart>
          </div>
          <div>
            <PieChart width={442} height={300}>
              <Pie
                data={data1}
                activeIndex={activeIndex}
                activeShape={renderActiveShape}
                cx={200}
                cy={140}
                innerRadius={60}
                outerRadius={80}
                paddingAngle={6}
                dataKey="value"
                onMouseEnter={onPieEnter1}
              >
                {data1.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </div>
          <div>
            <PieChart width={442} height={300}>
              <Pie
                data={data2}
                activeIndex={activeIndex1}
                activeShape={renderActiveShape}
                cx={195}
                cy={140}
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
                onMouseEnter={onPieEnter}
              >
                {data1.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </div>
        </div>
      </div>
    </div>
  );
};

export const MyWork = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const scrollBtn = useRef();

  function slideNxt() {
    setCurrentIndex(currentIndex === 2 ? 1 : 2);
    scrollBtn.current.children[0].style.opacity = 1;
    scrollBtn.current.children[2].style.opacity = 0;
  }
  function slidePrev() {
    setCurrentIndex(1);
    scrollBtn.current.children[0].style.opacity = 0;
    scrollBtn.current.children[2].style.opacity = 1;
  }
  return (
    <div className="wrapper">
      <div className="subContainer">
        <div
          className="imgDiv"
          style={{
            width: "40rem",
          }}
        >
          <img
            loading="lazy"
            alt="picture5"
            src={picArr[6]}
            style={{
              width: "100%",
              height: "100%",
              filter: "drop-shadow(0 0.3rem 0.5em rgba(0,0,0,0.6))",
            }}
          />
        </div>
        <div className="myWork">
          <div
            className="carosel"
            ref={scrollBtn}
            style={{
              background: `url(${picArr[currentIndex + 7]})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <button onClick={slidePrev}>
              <FaArrowLeft />
            </button>
            <img loading="lazy" src={picArr[currentIndex]} alt="picture6" />
            <button onClick={slideNxt}>
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ContactPage = () => {
  const isDark = useContext(IsDarkMode);
  const linkStyle = isDark
    ? { border: "1px solid white" }
    : { border: "1px solid black" };
  return (
    <div className="wrapper">
      <div
        className="subContainer"
        style={{
          alignItems: "flex-start",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <div
          className="logoText"
          style={isDark ? { color: "white" } : { color: "black" }}
        >
          <span>
            <RiContactsFill />
          </span>
          <p>Contact</p>
        </div>
        <div className="inputFields">
          <input placeholder="Name" />
          <hr />
          <input placeholder="Email" />
          <hr />
          <textarea placeholder="Message..." />
          <hr />
          <button
            style={
              isDark
                ? { border: "1px solid white", color: "white" }
                : { border: "1px solid black", color: "black" }
            }
          >
            SEND MESSAGE
          </button>
        </div>
        <div
          className="contactInfo"
          style={
            isDark
              ? { color: "rgba(255, 255, 255,0.5)" }
              : { color: "rgba(0, 0, 0,0.8)" }
          }
        >
          <div className="address">
            <h2>My Address</h2>
            <span>
              <FaLocationDot /> Nellore
            </span>
            <span>
              <RiMailLine />{" "}
              <a href="mailto:jithindev317@gmail.com">jithindev317@gmail.com</a>
            </span>
            <h2>Reach Me</h2>
          </div>
          <div className="contact">
            <a
              href="https://drive.google.com/file/d/1uaoqy7ulsB2u-IxgBfIx4xLTTI7MsEPd/view?usp=drivesdk"
              style={linkStyle}
            >
              View CV
            </a>
            <a href="https://wa.link/0dzf08" style={linkStyle}>
              Hire Me
            </a>
          </div>
        </div>
        <div
          className="icons"
          style={{
            width: "100%",
            justifyContent: "center",
          }}
        >
          <ul className="links">
            <li>
              <a
                href="https://wa.link/0dzf08"
                style={isDark ? { color: "white" } : { color: "black" }}
              >
                <FaWhatsapp />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/_its_jithin_/"
                style={isDark ? { color: "white" } : { color: "black" }}
              >
                <FaInstagram />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/jithin317"
                style={isDark ? { color: "white" } : { color: "black" }}
              >
                <FaGithub />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/jithin-mahadev-138582238"
                style={isDark ? { color: "white" } : { color: "black" }}
              >
                <FaLinkedin />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
function renderActiveShape(props) {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value,
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill="none"
      />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill="#333"
      >{`PV ${value}`}</text>
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={18}
        textAnchor={textAnchor}
        fill="#999"
      >
        {`(Rate ${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
}
