import React, { useState, useEffect, useContext, useMemo } from "react";
import styles from "./Convexlens.module.css";
import convexLens from "../../../images/convex.svg";
import PerformNav from "../../../components/PerformNav/PerformNav";
import { mockNames } from "../../../utils/mockNames"
import { SpacesContext } from "../../../components/AblyIntegration/SpaceContext";
import useSpaceMembers from "../../../hooks/useMembers";
import { colours } from "../../../utils/helper";
import car from "../../../images/car.svg"
import i from "../../../images/i.svg";
import x from "../../../images/x.svg";
import ar from "../../../images/ar.svg";
import InfoSheet from "../../../components/InfoSheet/InfoSheet";

import board from "../../../images/board3.svg";
import Chat from "../../../components/AblyIntegration/Chat/Chat";
import {AblyPoweredInput} from '../../../components/AblyIntegration/ComponentLock/AblyPoweredInput';
import AR from "../../../components/AR/AR";


/** 💡 Select a mock name to assign randomly to a new user that enters the space💡 */
const mockName = () => mockNames[Math.floor(Math.random() * mockNames.length)];

const ConvexLens = () => {
  const [down, setDown] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isInitialSetupDone, setisInitialSetupDone] = useState(false);


  const [isInfoOpen, setInfoOpen] = useState(false);
  const name = useMemo(mockName, []);
  /** 💡 Select a color to assign randomly to a new user that enters the space💡 */
  const userColors = useMemo(
    () => colours[Math.floor(Math.random() * colours.length)],
    [],
  );

  const [magnification, setmagnification] = useState(null)
const [focalLength, setfocallength] = useState(window.innerWidth * 0.1)
  /** 💡 Get a handle on a space instance 💡 */
  const space = useContext(SpacesContext);

  useEffect(() => {
    space?.enter({ name, userColors });
  }, [space]);

  const { self, otherMembers } = useSpaceMembers(space);
 
  useEffect(() => {
    // let focalLength = window.innerWidth * 0.1;
    let obj = window.innerWidth * 0.5 - focalLength * 2;
    let imageD = obj + 4 * focalLength;
    document.getElementById("object").style.left = obj + "px";
    document.getElementById("screen").style.left = imageD + "px";
    setisInitialSetupDone(true);
  }, []);

  function mouseDown(e) {
    setDown(true);
    let lensOffsetLeft = document.getElementById("object").offsetLeft;
    let lensOffsetTop = document.getElementById("object").offsetTop;
    setOffset({ x: lensOffsetLeft - e.clientX, y: lensOffsetTop - e.clientY });
  }

  const [inpfoc, setinpfoc] = useState(window.innerWidth * 0.1);

  function mouseUp(e) {
    setDown(false);
  }

  function mouseMove(e) {
    e.preventDefault();
    if (down) {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    }
  }

  useEffect(() => {
    if (isInitialSetupDone) {
      let newPosition = mousePosition.x + offset.x;
      let totalWidth = window.innerWidth;

      if (newPosition < totalWidth / 2 - 70) {
        let halfWidthOfLine = window.innerWidth * 0.5;
        let u =
          halfWidthOfLine - 25 - document.getElementById("object").offsetLeft;
        let f = window.innerWidth / 10;
        let v = ((u * f) / (f - u)) * -1;
        let magnification = (v / u) * -1;
        setmagnification(magnification)

        let imageDistance = halfWidthOfLine + v - 64;
        if (imageDistance > window.innerWidth - 160) {
          console.log("image at infinity", u, f);
        } else {
          document.getElementById("screen").style.left = imageDistance + "px";
          if (magnification < 1) {
            document.getElementById("screen").style.scale = magnification * -1;
            document.getElementById("screen").style.rotate = "180deg";
          } else {
            document.getElementById("screen").style.scale = magnification;
          }
        }
        document.getElementById("object").style.left =
          mousePosition.x + offset.x + "px";
      }
    }
  }, [mousePosition]);

  return (
    <>
      <PerformNav title="Convex Lens Focal Length" self={self} otherMembers={otherMembers}/>
      {space ? <Chat self={self} /> : <div></div>}
      <div className={styles.parent}>
        <div className={styles.experimentbody}>
        <img src={board} alt="" style={{ marginTop: "2rem" }} />
        <table className={styles.datatable}>
    <thead>
        <tr>
            <th>Object Distance (u)</th>
            <th>Image Distance (v)</th>
            <th>Magnification (m)</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
            {space && self ? <AblyPoweredInput
                  key="u1"
                  // label={entry.label}
                  name="u1"
                  space={space}
                  self={self}
                />: ""}
            </td>
            <td>
            {space && self ? <AblyPoweredInput
                  key="v1"
                  // label={entry.label}
                  name="v1"
                  space={space}
                  self={self}
                />: ""}
            </td>
            <td>
              {space && self ? <AblyPoweredInput
                  key="m1"
                  // label={entry.label}
                  name="m1"
                  space={space}
                  self={self}
                />: ""}
              </td>
        </tr>
        <tr>
            <td>
            {space && self ? <AblyPoweredInput
                  key="u2"
                  name="u2"
                  space={space}
                  self={self}
                />: ""}
            </td>
            <td>
            {space && self ? <AblyPoweredInput
                  key="v2"
                  name="v2"
                  space={space}
                  self={self}
                />: ""}
            </td>
            <td>
            {space && self ? <AblyPoweredInput
                  key="m2"
                  name="m2"
                  space={space}
                  self={self}
                />: ""}
            </td>
        </tr>
        <tr>
        <td>
            {space && self ? <AblyPoweredInput
                  key="u3"
                  name="u3"
                  space={space}
                  self={self}
                />: ""}
          </td>
          <td>
            {space && self ? <AblyPoweredInput
                  key="v3"
                  name="v3"
                  space={space}
                  self={self}
                />: ""}
          </td>
          <td className={styles.readinginput}>
            {space && self ? <AblyPoweredInput
                  key="m3"
                  name="m3"
                  space={space}
                  self={self}
                />: ""}
          </td>

        </tr>
    </tbody>
</table>
       
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
          {isInfoOpen ? <InfoSheet index={0} /> : <div></div>}
          <div className={styles.setinput}>
            <div>
              <p>Magnification: {Math.round(magnification * 100) / 100
}</p>
            </div>
            {/* <div>
              <input type="text" placeholder="Set focal length manually" onChange={(evt)=>{setinpfoc( window.innerWidth * 0.01 * evt.target.value)}}  className={styles.inputbox}/>
              <button className={styles.setbtn} onClick={()=>{
                setfocallength(inpfoc)
                console.log(inpfoc)
                console.log(focalLength)
              }}>Set</button>
            </div> */}
          </div>
          <div
            className={styles.container}
            onMouseUp={(e) => mouseUp(e)}
            onMouseMove={(e) => mouseMove(e)}
          >
            <img src={convexLens} className={styles.lens} alt="" />
            <div id="center-line" className={styles.centerline}></div>
            
            <div
              id="object"
              className={styles.object}
              onMouseDown={(e) => {
                mouseDown(e);
              }}
            ></div>
            <div id="screen" className={styles.screen}></div>
          </div>
          <div className={styles.table}>
            {
           [...Array(21)].map((_, i) => {
                return <div className={styles.mark}><p>|</p><br />{5*(i-10)}</div>
              })
            }
            
       </div>
        </div>
      </div>
    </>
  );
};

export default ConvexLens;
