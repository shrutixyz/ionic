import PerformNav from "../../../components/PerformNav/PerformNav";
import styles from "./FlameTest.module.css";
import "./FlameTest.css";
import spatula from "../../../images/spatula.svg";
import flamestand from "../../../images/burnerstand.svg";
import petridish from "../../../images/petridish.svg";
import crystal from "../../../images/crystal.svg";
import { useEffect, useState } from "react";

const FlameTest = () => {
  const [MouseCoordinates, setMouseCoordinates] = useState({x:0, y:0})
  function checkDragMatch(id2){
    let flame = document.getElementById("flame")
    
    let spatula = document.getElementById(id2)
    // if()
    console.log(flame.offsetHeight, MouseCoordinates.y)
  }

  const mouseMoveHandler = (event) => {
    setMouseCoordinates({
        x:event.clientX,
        y:event.clientY
    });
  }
    

  useEffect(()=>{
    window.addEventListener('mousemove', mouseMoveHandler);
    return(()=>{
        window.removeEventListener('mousemove', mouseMoveHandler);
    })
  }, [])  
  return (
    <>
      <PerformNav title="Exploring Color Theory" />
      <div className={styles.parent}>
        <div className={styles.experimentbody}>
          <center>
            <h2>
              Drag the elements from the ashtray and put them above the glowing
              flame to see the color changing!
            </h2>
            <div className="container" id="flame">
              <div className="red flame"></div>
              <div className="orange flame"></div>
              <div className="yellow flame"></div>
              <div className="white flame"></div>

              {/* <div class="blue circle"></div>
              <div class="black circle"></div> */}
            </div>
            <img src={flamestand} className={styles.burner} alt="" />
            {/* <div className={styles.burner}></div> */}
            <br />
          </center>

          <div className={styles.droppers}>
            <div className={styles.dropper}>
              <div className={styles.dish}>
                <div className={styles.spatulaparent} draggable onDrag={()=>checkDragMatch("1")} id="1">
                  <div
                    className={styles.crystal}
                    style={{ backgroundColor: "#F5BFBF" }}
                  ></div>
                  <img src={spatula} className={styles.spatula} alt="" />
                </div>
                <img src={petridish} className={styles.petridish} alt="" />
              </div>
              <p>Calcium</p>
            </div>
            <div className={styles.dropper}>
              <div className={styles.dish}>
                <div className={styles.spatulaparent} draggable>
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
                <div className={styles.spatulaparent} draggable>
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
                <div className={styles.spatulaparent} draggable>
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
