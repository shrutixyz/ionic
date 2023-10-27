import { useNavigate } from "react-router-dom";
import logo from "../../images/logo.svg";
import styles from "./PerformNav.module.css";
const PerformNav = (props) => {
  const participants = [1,2]
  const navigate = useNavigate();
  return (
    <>
      <div className={styles.nav}>
        <h2>{props.title}</h2>
        <div className={styles.navsubright}>
          <div className={styles.joinees}>
            {
              participants.map((el)=>{
                return <div className={styles.avatar}></div>
              })
            }
          </div>
          <div className={styles.navright} onClick={() => navigate("/")}>
            <img src={logo} alt="" />
            <h3>ionic</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default PerformNav;
