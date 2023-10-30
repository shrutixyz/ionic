import React, { useState, useEffect } from "react";
import styles from "./Convexlens.module.css";
import convexLens from "../../../images/convex.svg";
import PerformNav from "../../../components/PerformNav/PerformNav";

const ConvexLens = () => {
  const [down, setDown] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isInitialSetupDone, setisInitialSetupDone] = useState(false);

  useEffect(() => {
    let focalLength = window.innerWidth * 0.1;
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
      <PerformNav title="Convex lens"/>
      <div className={styles.parent}>
        <div className={styles.experimentbody}>
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
        </div>
      </div>
    </>
  );
};

export default ConvexLens;
