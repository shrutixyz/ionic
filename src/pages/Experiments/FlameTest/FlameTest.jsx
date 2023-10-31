import PerformNav from "../../../components/PerformNav/PerformNav";
import styles from "./FlameTest.module.css";
import "./FlameTest.css";
import spatula from "../../../images/spatula.svg";
import flamestand from "../../../images/burnerstand.svg";
import petridish from "../../../images/petridish.svg";
import { useEffect, useState, useMemo, useContext } from "react";
import { mockNames } from "../../../utils/mockNames"
import { SpacesContext } from "../../../components/AblyIntegration/SpaceContext";
import useSpaceMembers from "../../../hooks/useMembers";
import { colours } from "../../../utils/helper";


/** 💡 Select a mock name to assign randomly to a new user that enters the space💡 */
const mockName = () => mockNames[Math.floor(Math.random() * mockNames.length)];

const FlameTest = () => {
  const color_combos = {
    sodium: ["yellow", "yellow", "yellow", "white"],
    copper: ["white", "green", "blue", "darkblue"],
    nickel: ["blue", "green", "cyan", "yellow"],
    lead: ["blue", "cyan", "lightblue", "white"],
  };

  const name = useMemo(mockName, []);
  /** 💡 Select a color to assign randomly to a new user that enters the space💡 */
  const userColors = useMemo(
    () => colours[Math.floor(Math.random() * colours.length)],
    [],
  );

  /** 💡 Get a handle on a space instance 💡 */
  const space = useContext(SpacesContext);

  useEffect(() => {
    space?.enter({ name, userColors });
  }, [space]);

  const { self, otherMembers } = useSpaceMembers(space);

  function hideSpatula(id) {
    setTimeout(function () {
      document.getElementById(id).style.visibility = "hidden";
    }, 50);
  }
  function showSpatula(id) {
    document.getElementById(id).style.visibility = "visible";
  }

  const [current, setCurrent] = useState("sodium");
  function resetColors() {
    document.getElementById("red").style.backgroundColor = "red";
    document.getElementById("orange").style.backgroundColor = "orange";
    document.getElementById("yellow").style.backgroundColor = "yellow";
    document.getElementById("white").style.backgroundColor =
      "rgb(232, 232, 255)";
    document.getElementById("red").style.boxShadow = "0px 0px 9px 4px red";
    document.getElementById("yellow").style.boxShadow =
      "0px 0px 9px 4px yellow";
    document.getElementById("orange").style.boxShadow =
      "0px 0px 9px 4px orange";
    document.getElementById("white").style.boxShadow =
      "0px 0px 9px 4px rgb(232, 232, 255)";
  }
  useEffect(() => {
    document.addEventListener(
      "dragover",
      function (e) {
        e = e || window.event;
        var dragX = e.pageX,
          dragY = e.pageY;
        if (
          Math.abs((dragX-50) - document.getElementById("flame").offsetLeft)  <
            50 &&
          Math.abs(dragY - document.getElementById("flame").offsetTop) < 200
        ) {
          document.getElementById("red").style.backgroundColor =
            color_combos[current][0];
          document.getElementById("red").style.boxShadow =
            "0px 0px 9px 4px " + color_combos[current][0];
          document.getElementById("orange").style.backgroundColor =
            color_combos[current][1];
          document.getElementById("orange").style.boxShadow =
            "0px 0px 9px 4px " + color_combos[current][1];
          document.getElementById("yellow").style.backgroundColor =
            color_combos[current][2];
          document.getElementById("yellow").style.boxShadow =
            "0px 0px 9px 4px " + color_combos[current][2];
          document.getElementById("white").style.backgroundColor =
            color_combos[current][3];
          document.getElementById("white").style.boxShadow =
            "0px 0px 9px 4px " + color_combos[current][3];
        } else {
          resetColors();
        }
      },
      false
    );
  }, [current]);
  return (
    <>
      <PerformNav title="Flame Test" self={self} otherMembers={otherMembers}/>
      <div className={styles.parent}>
        <div className={styles.experimentbody}>
          <center>
            <h2>
              Drag the elements from the ashtray and put them above the glowing
              flame to see the color changing!
            </h2>
            <div className="container" id="flame">
              <div className="red flame" id="red"></div>
              <div className="orange flame" id="orange"></div>
              <div className="yellow flame" id="yellow"></div>
              <div className="white flame" id="white"></div>

            </div>
            <img src={flamestand} className={styles.burner} alt="" />
            <br />
          </center>

          <div className={styles.droppers}>
            <div className={styles.dropper}>
              <div className={styles.dish}>
                <div
                  className={styles.spatulaparent}
                  draggable
                  onDragStart={() => {
                    setCurrent("sodium");
                    hideSpatula("1");
                  }}
                  onDragEnd={() => {
                    resetColors();
                    showSpatula("1");
                  }}
                  id="1"
                >
                  <div
                    className={styles.crystal}
                    style={{ backgroundColor: "#F5BFBF" }}
                  ></div>
                  <img src={spatula} className={styles.spatula} alt="" />
                </div>
                <img src={petridish} className={styles.petridish} alt="" />
              </div>
              <p>Sodium</p>
            </div>
            <div className={styles.dropper}>
              <div className={styles.dish}>
                <div
                  className={styles.spatulaparent}
                  draggable
                  onDragStart={() => {
                    hideSpatula("2");
                    setCurrent("copper");
                  }}
                  onDragEnd={() => {
                    resetColors();
                    showSpatula("2");
                  }}
                  id="2"
                >
                  <div
                    className={styles.crystal}
                    style={{ backgroundColor: "#2E0DFF" }}
                  ></div>
                  <img src={spatula} className={styles.spatula} alt="" />
                </div>
                <img src={petridish} className={styles.petridish} alt="" />
              </div>
              <p>Copper</p>
            </div>
            <div className={styles.dropper}>
              <div className={styles.dish}>
                <div
                  className={styles.spatulaparent}
                  draggable
                  onDragStart={() => {
                    setCurrent("nickel");
                    hideSpatula("3");
                  }}
                  onDragEnd={() => {
                    resetColors();
                    showSpatula("3");
                  }}
                  id="3"
                >
                  <div
                    className={styles.crystal}
                    style={{ backgroundColor: "#5BFFCE" }}
                  ></div>
                  <img src={spatula} className={styles.spatula} alt="" />
                </div>
                <img src={petridish} className={styles.petridish} alt="" />
              </div>
              <p>Nickel</p>
            </div>
            <div className={styles.dropper}>
              <div className={styles.dish}>
                <div
                  className={styles.spatulaparent}
                  draggable
                  onDragStart={() => {
                    setCurrent("lead");
                    hideSpatula("4");
                  }}
                  onDragEnd={() => {
                    resetColors();
                    showSpatula("4");
                  }}
                  id="4"
                >
                  <div
                    className={styles.crystal}
                    style={{ backgroundColor: "#8A8A8A" }}
                  ></div>
                  <img src={spatula} className={styles.spatula} alt="" />
                </div>
                <img src={petridish} className={styles.petridish} alt="" />
              </div>
              <p>Lead</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FlameTest;
