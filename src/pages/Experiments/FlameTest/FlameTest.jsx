import PerformNav from "../../../components/PerformNav/PerformNav";
import styles from "./FlameTest.module.css";
import "./FlameTest.css"
import redbeaker from "../../../images/redbeaker.svg";
import greenbeaker from "../../../images/greenbeaker.svg";
import bluebeaker from "../../../images/bluebeaker.svg";
import reddropper from "../../../images/reddropper.svg";
import greendropper from "../../../images/greendropper.svg";
import bluedropper from "../../../images/bluedropper.svg";

const FlameTest = () => {
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
            <div className="container">
              <div className="red flame"></div>
              <div className="orange flame"></div>
              <div className="yellow flame"></div>
              <div className="white flame"></div>
              
              {/* <div class="blue circle"></div>
              <div class="black circle"></div> */}
            </div>
            <div className={styles.burner}></div>
            <br />
          </center>

          <div className={styles.droppers}>
            <div className={styles.indidropper}>
              <img src={redbeaker} className={styles.beaker} alt="" />
              <div draggable onDragEnd={() => {}} onDragStart={() => {}}>
                <img
                  src={reddropper}
                  className={styles.dropper}
                  alt=""
                  id="reddropper"
                />
              </div>
            </div>
            <div className={styles.indidropper}>
              <img src={greenbeaker} className={styles.beaker} alt="" />
              <div draggable onDragEnd={() => {}} onDragStart={() => {}}>
                <img
                  src={greendropper}
                  className={styles.dropper}
                  alt=""
                  id="greendropper"
                />
              </div>
            </div>
            <div className={styles.indidropper}>
              <img src={bluebeaker} className={styles.beaker} alt="" />
              <div draggable onDragEnd={() => {}} onDragStart={() => {}}>
                <img
                  src={bluedropper}
                  className={styles.dropper}
                  alt=""
                  id="bluedropper"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FlameTest;
