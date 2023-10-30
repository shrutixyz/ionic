import { useNavigate } from "react-router-dom";
import logo from "../../images/logo.svg";
import styles from "./PerformNav.module.css";
import { useMemo } from "react";
import { useEffect } from "react";
import { useSpace, useMembers } from "@ably/spaces/react";
import { getMemberName } from "../../utils/mockNames";
import { getMemberColor } from "../../utils/mockColours";
import Avatars from "../AblyIntegration/Avatars/Avatars";

const PerformNav = (props) => {
  // const participants = [1,2];

  // const name = useMemo(getMemberName, []);
  // const memberColor = useMemo(getMemberColor, []);

  /** 💡 Get a handle on a space instance 💡 */
  // const { space } = useSpace();

  // useEffect(() => {
  //   space?.enter({ name, memberColor });
  // }, [space]);

  // /** 💡 Get everybody except the local member in the space and the local member 💡 */
  // const { others, self } = useMembers();

  console.log(props.otherMembers)
  const navigate = useNavigate();
  return (
    <>
      <div className={styles.nav}>
        <h2>{props.title}</h2>
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
