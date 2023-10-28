import React, { useEffect, useState } from "react";

// import type { Space, CursorUpdate as _CursorUpdate } from "@ably/spaces";
import CursorSvg from "./CursorSvg";
import useCursor from "../../hooks/useCursor";
// import { Member } from "../../utils/types";

// 💡 This component is used to render the cursor of the user
const YourCursor = ({
  self,
  space,
  parentRef,
}) => {
  const [cursorPosition, setCursorPosition] = useState({ left: 0, top: 0, state: "move" });
  const handleSelfCursorMove = useCursor(
    setCursorPosition,
    parentRef,
    space,
    self?.connectionId,
  );
  if (!self) {
    return null;
  }
  if (cursorPosition.state === "leave") return null;
  const { cursorColor, nameColor } = self.profileData.userColors;

  return (
    <div
      
      onMouseMove={(e) => handleSelfCursorMove(e)}
      style={{
        position: 'absolute',
        zIndex: 1,
        top: `${cursorPosition.top}px`,
        left: `${cursorPosition.left}px`,
      }}
    >
      <CursorSvg cursorColor={cursorColor} />
      <div
        className={`px-4 py-2 m-2 ${nameColor} rounded-full text-sm text-white whitespace-nowrap`}
      >
        You
      </div>
    </div>
  );
};


// 💡 This component is used to render the cursors of other users in the space
const MemberCursors = ({
  otherUsers,
  space,
  selfConnectionId,
}) => {
  const [positions, setPositions] = useState({});

  useEffect(() => {
    if (!space) return;

    space.cursors.subscribe("update", (event) => {
      let e = event;
      // 💡 Ignore our own cursor
      if (e.connectionId === selfConnectionId) return;

      setPositions((positions) => ({
        ...positions,
        [e.connectionId]: { position: e.position, state: e.data.state },
      }));
    });
    return () => {
      space.cursors.unsubscribe();
    };
  }, [space]);

  return (
    <>
      {otherUsers.map(({ connectionId, profileData }) => {
        if (!positions[connectionId]) return;
        if (positions[connectionId].state === "leave") return;
        const { cursorColor, nameColor } = profileData.userColors;
        return (
          <div
            key={connectionId}
            id={`member-cursor-${connectionId}`}
            className="absolute"
            style={{
              left: `${positions[connectionId].position.x}px`,
              top: `${positions[connectionId].position.y}px`,
            }}
          >
            <CursorSvg cursorColor={cursorColor} />
            <div
              className={`px-4 py-2 m-2 ${nameColor} rounded-full text-sm text-white whitespace-nowrap member-cursor`}
            >
              {profileData.name}
            </div>
          </div>
        );
      })}
    </>
  );
};

export { MemberCursors, YourCursor };
