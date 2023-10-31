import { useNavigate } from "react-router-dom";
import logo from "../../images/logo.svg";
import styles from "./PerformNav.module.css";
import back from "../../images/arrow-left.svg";
import Avatars from "../AblyIntegration/Avatars/Avatars";
import share from "../../images/share.svg";
import { RWebShare } from "react-web-share";

const PerformNav = (props) => {
  console.log(props.otherMembers);
  const navigate = useNavigate();
  return (
    <>
      <div className={styles.nav}>
        <div className={styles.navsubleft}>
          <div
            className={styles.backbtn}
            onClick={() => {
              navigate("/experiments");
            }}
          >
            <img src={back} alt="" />
          </div>
          <h2 className={styles.title}>{props.title}</h2>

          <RWebShare
            data={{
              text: "ionic",
              url: window.location,
              title: "Perform "+props.title + " practical with friends",
            }}
            onClick={() => console.log("shared successfully!")}
          >
            <div className={styles.backbtn}>
              <img src={share} alt="" />
            </div>
          </RWebShare>
        </div>
        <div className={styles.navsubright}>
          <div className={styles.joinees}>
            <div className={styles.avatarStackContainer} id="avatar-stack">
              {/** 💡 Stack of first 5 user avatars including yourself.💡 */}
              <Avatars self={props.self} otherUsers={props.otherMembers} />
            </div>
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
