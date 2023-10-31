import PerformNav from "../../../components/PerformNav/PerformNav";
import styles from "./ColorMixer.module.css";
import plate from "../../../images/plate.png";
import React, { useMemo, useRef, useEffect, useContext, useState } from "react";
import redbeaker from "../../../images/red.svg";
import greenbeaker from "../../../images/green.svg";
import bluebeaker from "../../../images/blue.svg";
import reddropper from "../../../images/reddropper.svg";
import greendropper from "../../../images/greendropper.svg";
import bluedropper from "../../../images/bluedropper.svg";
import { mockNames } from "../../../utils/mockNames"
import { SpacesContext } from "../../../components/AblyIntegration/SpaceContext";
import { MemberCursors, YourCursor } from "../../../components/AblyIntegration/Cursor";
import useSpaceMembers from "../../../hooks/useMembers";
import { colours } from "../../../utils/helper";
import Chat from "../../../components/AblyIntegration/Chat/Chat";


/** 💡 Select a mock name to assign randomly to a new user that enters the space💡 */
const mockName = () => mockNames[Math.floor(Math.random() * mockNames.length)];

const ColorMixer = () => {
  const inputRef = useRef(null);
  const [r, setR] = useState(0);
  const [g, setG] = useState(0);
  const [b, setB] = useState(0);
  const [bg, setbg] = useState("transparent");

  const name = useMemo(mockName, []);
  /** 💡 Select a color to assign randomly to a new user that enters the space💡 */
  const userColors = useMemo(
    () => colours[Math.floor(Math.random() * colours.length)],
    [],
  );

  /** 💡 Get a handle on a space instance 💡 */
  const space = useContext(SpacesContext);
  // console.log("space is ", space.channel.name)

  useEffect(() => {
    space?.enter({ name, userColors });
  }, [space]);

  const { self, otherMembers } = useSpaceMembers(space);

  const liveCursors = useRef(null);

  async function dropClr(clr, id) {
    console.log(clr);
    let red = r,
      green = g,
      blue = b;
    if (clr === "r") {
      red += 255;
      if (red > 255) {
        green *= 255 / red;
        blue *= 255 / red;
        red = 255;
      }
    } else if (clr === "g") {
      green += 255;
      if (green > 255) {
        red *= 255 / green;
        blue *= 255 / green;
        green = 255;
      }
    } else {
      blue += 255;
      if (blue > 255) {
        green = (green * 255) / blue;
        red = (red * 255) / blue;
        blue = 255;
      }
    }
    console.log("dropped ", red, green, blue);
    setR(red);
    setG(green);
    setB(blue);
    // el.style.backgroundColor="blue"
    setbg(`rgb(${red}, ${green}, ${blue})`);
    showDropper(id)
    // el.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  }

  function hideDropper(id){
    setTimeout(function (){document.getElementById(id).style.visibility = "hidden"}, 50)
  }
  function showDropper(id){
    document.getElementById(id).style.visibility = "visible"
  }
  function reset() {
    setbg("transparent");
    setR(0);
    setG(0);
    setB(0);
  }
  return (
    <div
    id="live-cursors"
    ref={liveCursors}
    className="live-cursors-container example-container">
      <PerformNav title="Exploring Color Theory" self={self} otherMembers={otherMembers}/>
      <YourCursor
        self={self}
        space={space}
        parentRef={liveCursors}
      />
      <MemberCursors
        otherUsers={
          otherMembers.filter((m) => m.isConnected)
        }
        space={space}
        selfConnectionId={self?.connectionId}
      />
      <Chat/>
      <div className={styles.parent}>
        <div className={styles.experimentbody}>
          <center>
            <h2>
              Mix Colors into the central pallete by dragging and dropping into
              the plate
            </h2>
            <div class={styles.plate}>
              <div
                className={styles.colordrop}
                ref={inputRef}
                id="colordrop"
                style={{ backgroundColor: bg }}
              ></div>
              <img src={plate} className={styles.plateimg} alt="" />
            </div>
            <br />

            <button onClick={() => reset()} className={styles.reset}>
              Reset
            </button>
          </center>

          <div className={styles.droppers}>
            <div className={styles.indidropper}> 
              <img src={redbeaker} className={styles.beaker} alt="" />
              <div
                draggable
                onDragEnd={() => dropClr("r", "reddropper")}
                onDragStart={() => hideDropper("reddropper")}
                
              >
                <img src={reddropper} className={styles.dropper} alt="" id="reddropper" />
              </div>
            </div>
            <div className={styles.indidropper}> 
              <img src={greenbeaker} className={styles.beaker} alt="" />
              <div
                draggable
                onDragEnd={() => dropClr("g", "greendropper")}
                onDragStart={() => hideDropper("greendropper")}
              >
                <img src={greendropper} className={styles.dropper} alt="" id="greendropper" />
              </div>
            </div>
            <div className={styles.indidropper}> 
              <img src={bluebeaker} className={styles.beaker} alt="" />
              <div
                draggable
                onDragEnd={() => dropClr("b", "bluedropper")}
                onDragStart={() => hideDropper("bluedropper")}
              >
                <img src={bluedropper} className={styles.dropper} alt="" id="bluedropper"/>
              </div>
            </div>
          </div>
          {/* <div
            className={styles.red}
            draggable
            onDragEnd={() => dropClr("r")}
            onDragStart={() => console.log("drag started")}
          ></div>
          <div
            className={styles.green}
            draggable
            onDragEnd={() => dropClr("g")}
          ></div>
          <div
            className={styles.blue}
            draggable
            onDragEnd={() => dropClr("b")}
          ></div> */}
        </div>
      </div>
    </div>
  );
};

export default ColorMixer;
