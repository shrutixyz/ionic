import { useState } from "react";
import classNames from "classnames";
import styles from "./Avatar.module.css";
import {
  MAX_USERS_BEFORE_LIST,
  calculateRightOffset,
  calculateTotalWidth,
} from "../../../utils/helper";
import Surplus from "./Surplus";
import UserInfo from "./UserInfo";


const SelfAvatar = ({ self }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className={styles.avatarContainer}
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <p>You</p>
      <div
        className={styles.avatar}
      />

      {hover && self ? (
        <div className={styles.hoverYouAvatar}>
          <UserInfo user={self} isSelf={true} />
        </div>
      ) : null}
    </div>
  );
};

const OtherAvatars = ({
  users,
  usersCount,
}) => {
  const [hoveredClientId, setHoveredClientId] = useState(null);
  return (
    <>
      {users.map((user, index) => {
        const rightOffset = calculateRightOffset({ usersCount, index });
        const userInitials = user.profileData.name
          .split(" ")
          .map((word) => word.charAt(0))
          .join("");

        const inlineStyles ={
          avatarCSS : {
            backgroundColor : user.isConnected ? user.profileData.userColors.cursorColor : "#e2e8f0",
            height: '48px',
            width: '48px',
            borderRadius: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            border: '2px solid gray',
          },

          initialsCSS : {
            color: user.isConnected ? "white" : "gray",
            position: 'relative',
            zIndex: 20,
            fontSize: '0.75rem'
          },

          statusIndicatorCSS : {
            backgroundColor: user.isConnected ? '#69f0ae' : '#e2e8f0',
            width: '10px',
            height: '10px',
            borderRadius: '50%',
            position: 'absolute',
            bottom: "1px",
            transform: 'translate(50%, 50%)',
            zIndex: '10',
            left: '2px'
          }
        }


        return (
          <div
            className={styles.otherAvatar}
            key={user.clientId}
            style={{
              right: rightOffset,
              zIndex: users.length - index,
            }}
            onMouseOver={() => setHoveredClientId(user.clientId)}
              onMouseLeave={() => setHoveredClientId(null)}
          >
            <div
              style={inlineStyles.avatarCSS}
              id="avatar"
            >
              <p style={inlineStyles.initialsCSS}>{userInitials}</p>
              <div style={inlineStyles.statusIndicatorCSS} id="status-indicator" />
            </div>

            {hoveredClientId === user.clientId ? (
              <div className={styles.hoverOtherAvatar} style={{zIndex: 200}}>
                <UserInfo user={user} />
              </div>
            ) : null}
          </div>
        );
      })}
    </>
  );
};

const Avatars = ({
  otherUsers,
  self,
}) => {
  const totalWidth = calculateTotalWidth({ users: otherUsers });
  console.log(otherUsers);
  return (
    <div style={{width:`${totalWidth}px`, position: 'relative', display: 'flex' }}>
      <SelfAvatar self={self} />
      <OtherAvatars
        usersCount={otherUsers.length}
        users={otherUsers.slice(0, MAX_USERS_BEFORE_LIST).reverse()}
      />
      {/** 💡 Dropdown list of surplus users 💡 */}
      <Surplus otherUsers={otherUsers} />
    </div>
  );
};

export default Avatars;
