import React, { useCallback, useRef, useState } from "react";
import cn from "classnames";
import { useOnClickOutside } from "usehooks-ts";
// import { getCellStylesForMember } from "../../";
import { LockFilledSvg } from "./LockedFilled";
import styles from './InputCell.module.css';

const InputCell = ({
  value,
  // label,
  name,
  onFocus,
  onClickOutside,
  onChange,
  lockHolder,
  lockedByYou,
}) => {
  const ref = useRef(null);

  // 💡 Get the member color and name for the cell from the `cellMembers` prop. 💡
  const memberColor = lockHolder?.profileData.userColors.cursorColor;
  const memberName = lockedByYou ? "You" : lockHolder?.profileData.name;
  const [correct, setcorrect] = useState(false);

  const handleChange = useCallback(
    (e) => {
      onChange(e.target.value);

      if(e.target.value && e.target.value.toLowerCase() == name.toLowerCase()){
        setcorrect(true)
      }


    },
    [onChange],
  );

  // 💡  Unlock the component on click outside 💡
  useOnClickOutside(ref, onClickOutside);

  // 💡  Determine if the input cell should be read-only 💡
  const readOnly = Boolean(lockHolder && !lockedByYou);

  return (
    <div ref={ref} style={{
      display: "flex",
      flexDirection: 'column',

    }}>
      {/* <label htmlFor={name} className="mb-2 text-sm">
        {label}
      </label> */}
      <div
        
        style={{ "--member-bg-color": memberColor, position: "relative" }}
      >
        {memberName && memberColor ? (
          <div className={styles.memberNameLock}>
            {memberName}
            {!lockedByYou && <LockFilledSvg className="text-base" />}
          </div>
        ) : null}
        <input
          id={name}
          name={name}
          value={value}
          onChange={handleChange}
          onFocus={onFocus}
          disabled={readOnly}
          placeholder="Click to lock and edit me"
          style={{
            padding: '0.5rem',
            fontSize: '1rem',
            borderRadius: '0.5rem',
            outline: "none",
            transition: "background-color 0.2s ease-in-out",
            borderColor: correct ?  "green" : "",
            borderWidth: "3px"
          }}
          className={cn(
            `p-2 w-full h-10 text-sm rounded-lg outline-none transition-colors hover:bg-white focus:bg-white`,
            {
              "bg-[#EDF1F6]": !readOnly,
              "bg-slate-250 hover:bg-slate-250 cursor-not-allowed": readOnly,
            },
          )}
        />
      </div>
    </div>
  );
};

export default InputCell;
