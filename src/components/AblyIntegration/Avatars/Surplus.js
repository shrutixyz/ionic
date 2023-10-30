import { useState, FunctionComponent } from "react";

import useClickOutsideList from "../../../hooks/useClickOutsideList";
import { MAX_USERS_BEFORE_LIST} from "../../../utils/helper";
import UserInfo from "./UserInfo";
import styles from './Surplus.module.css'

const Surplus= ({
  otherUsers,
}) => {
  const [showList, setShowList] = useState(false);
  const { listRef, plusButtonRef } = useClickOutsideList(() =>
    setShowList(false),
  );

  return otherUsers.length > MAX_USERS_BEFORE_LIST ? (
    <div style={{right: 0, display: "flex", flexDirection: "col", justifyContent: "center", position: 'absolute'}}>
      <div
        className={styles.showList}
        style={{
          zIndex: otherUsers.length + 50,
        }}
        ref={plusButtonRef}
        onClick={() => {
          setShowList(!showList);
        }}
      >
        +{otherUsers.slice(MAX_USERS_BEFORE_LIST).length}
      </div>

      {showList ? (
        <div
          className={styles.userInfoConatiner}
          ref={listRef}
        >
          {otherUsers.slice(MAX_USERS_BEFORE_LIST).map((user) => (
            <div
              className={styles.userInfo}
              key={user.clientId}
            >
              <UserInfo user={user} />
            </div>
          ))}
        </div>
      ) : null}
    </div>
  ) : null;
};

export default Surplus;
