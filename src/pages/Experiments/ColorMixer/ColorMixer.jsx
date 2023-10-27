import PerformNav from "../../../components/PerformNav/PerformNav";
import styles from "./ColorMixer.module.css";
import plate from "../../../images/plate.png";
import React, { useRef, useState } from "react";
import redbeaker from "../../../images/red.svg";
import greenbeaker from "../../../images/green.svg";
import bluebeaker from "../../../images/blue.svg";
import reddropper from "../../../images/reddropper.svg";
import greendropper from "../../../images/greendropper.svg";
import bluedropper from "../../../images/bluedropper.svg";

const ColorMixer = () => {
  const inputRef = useRef(null);
  const [r, setR] = useState(0);
  const [g, setG] = useState(0);
  const [b, setB] = useState(0);
  const [bg, setbg] = useState("transparent");
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
    <>
      <PerformNav title="Exploring Color Theory" />
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
    </>
  );
};

export default ColorMixer;
