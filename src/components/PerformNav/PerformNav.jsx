import logo from "../../images/logo.svg";
import styles from "./PerformNav.module.css";
const PerformNav = (props) => {
  return (
    <>
      <div className={styles.nav}>
        <h2>{props.title}</h2>
        <div className={styles.navright}>
          <img src={logo} alt="" />
          <h3>ionic</h3>
        </div>
      </div>
    </>
  );
};

export default PerformNav;
