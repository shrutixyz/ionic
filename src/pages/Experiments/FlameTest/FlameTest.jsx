import PerformNav from "../../../components/PerformNav/PerformNav";
import styles from "./FlameTest.module.css";
import "./FlameTest.css";
import spatula from "../../../images/spatula.svg";
import board from "../../../images/board2.svg";
import flamestand from "../../../images/burnerstand.svg";
import petridish from "../../../images/petridish.svg";
import { useEffect, useState, useMemo, useContext } from "react";
import { mockNames } from "../../../utils/mockNames";
import { SpacesContext } from "../../../components/AblyIntegration/SpaceContext";
import useSpaceMembers from "../../../hooks/useMembers";
import { colours } from "../../../utils/helper";
import Form from "../../../components/AblyIntegration/ComponentLock/Form";
import copperdish from "../../../images/copperdish.svg";
import nickeldish from "../../../images/nickeldish.svg";
import leaddish from "../../../images/leaddish.svg";
import sodiumdish from "../../../images/sodiumdish.svg";
import i from "../../../images/i.svg";
import x from "../../../images/x.svg";
import ar from "../../../images/ar.svg";
import InfoSheet from "../../../components/InfoSheet/InfoSheet";
import Chat from "../../../components/AblyIntegration/Chat/Chat";
import { AblyPoweredInput } from "../../../components/AblyIntegration/ComponentLock/AblyPoweredInput";
import AR from "../../../components/AR/AR";

/** 💡 Select a mock name to assign randomly to a new user that enters the space💡 */
const mockName = () => mockNames[Math.floor(Math.random() * mockNames.length)];

const FlameTest = () => {
  const color_combos = {
    sodium: ["yellow", "yellow", "yellow", "white"],
    copper: ["white", "green", "blue", "darkblue"],
    nickel: ["blue", "green", "cyan", "yellow"],
    lead: ["blue", "cyan", "lightblue", "white"],
  };

  const [isInfoOpen, setInfoOpen] = useState(false);
  const name = useMemo(mockName, []);
  /** 💡 Select a color to assign randomly to a new user that enters the space💡 */
  const userColors = useMemo(
    () => colours[Math.floor(Math.random() * colours.length)],
    []
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
          Math.abs(dragX - 50 - document.getElementById("flame").offsetLeft) <
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
    <div id="component-locking">
      <PerformNav
        title="Elements Flame Test"
        self={self}
        otherMembers={otherMembers}
      />
      {/* <Form space={space} self={self} /> */}
      {space ? <Chat self={self}/> : <div></div>}
      <div className={styles.parent}>
        <div className={styles.experimentbody}>
          <img src={board} alt="" style={{ marginTop: "2rem" }} />
          <img
            src={i}
            onClick={() => {
              setInfoOpen(true);
            }}
            className={styles.i}
            alt=""
          />

          <AR/>
          {isInfoOpen ? (
            <div
              onClick={() => {
                setInfoOpen(false);
              }}
            >
              <img src={x} className={styles.x} alt="" />
            </div>
          ) : (
            <div></div>
          )}
          {isInfoOpen ? <InfoSheet index={1} /> : <div></div>}
          <br />
          <div className={styles.bench}>
            <div className={styles.tableitems}>
              <div className="ably-input">
               {space && self ? <AblyPoweredInput
                  key="sodiumdish"
                  // label={entry.label}
                  name="sodium"
                  space={space}
                  self={self}
                />: ""}

                <div
                  className={styles.elementparent}
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
                  <img src={sodiumdish} className={styles.elementdish} alt="" />
                </div>
              </div>

              <div className="ably-input">
               {space && self ? <AblyPoweredInput
                  key="copperdish"
                  // label={entry.label}
                  name="copper"
                  space={space}
                  self={self}
                />: ""}
                <div
                  className={styles.elementparent}
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
                  <img src={copperdish} className={styles.elementdish} alt="" />
                </div>
              </div>
              <div className="ably-input">
               {space && self ? <AblyPoweredInput
                  key="nickeldish"
                  // label={entry.label}
                  name="nickel"
                  space={space}
                  self={self}
                />: ""}
                <div
                  className={styles.elementparent}
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
                  <img src={nickeldish} className={styles.elementdish} alt="" />
                </div>
              </div>
              <div className="ably-input">
               {space && self ? <AblyPoweredInput
                  key="leaddish"
                  // label={entry.label}
                  name="lead"
                  space={space}
                  self={self}
                />: ""}

                <div
                  className={styles.elementparent}
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
                  <img src={leaddish} className={styles.elementdish} alt="" />
                </div>
              </div>
              <div>
                <div className="container" id="flame">
                  <div className="red flame" id="red"></div>
                  <div className="orange flame" id="orange"></div>
                  <div className="yellow flame" id="yellow"></div>
                  <div className="white flame" id="white"></div>
                </div>
                <img src={flamestand} className={styles.burner} alt="" />
              </div>
            </div>
            <div className={styles.table}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlameTest;
