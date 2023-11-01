import styles from "./AR.module.css";
import ar from "../../images/ar.svg";

const AR = () => {
  function handleClick() {
    let element = document.getElementById("warning");
    element.style.display = "flex";
    setTimeout(() => {
      element.style.display = "none";
    }, "1000");
  }
  return (
    <>
      <img
        src={ar}
        className={styles.ar}
        alt=""
        onClick={() => handleClick()}
      />
      <div className={styles.warning} id="warning" style={{ display: "none" }}>
        <p>This feature's implementation is still in progress!</p>
      </div>
    </>
  );
};

export default AR;
