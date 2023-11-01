import React, {useContext, useEffect, useState} from "react";
import { useLock } from "@ably/spaces/react";

import { useLiveValue } from "../../../hooks/useLiveValue2";
import InputCell from "./InputCell";
import useSpaceMembers from '../../../hooks/useMembers'
import { SpacesContext } from "../SpaceContext";



export const AblyPoweredInput = ({
  name,
  label,
  space,
  self
}) => {
  const { member, status } = useLock(name);
  // const space = useContext(SpacesContext);
  // const { self } = useSpaceMembers(space);
  // const { space, self } = useMembers();
  const [value, setValue] = useLiveValue(name, self);
  // let lockHolder = member;
  const [lockHolder, setlockHolder] = useState(member);
  const [locked, setlocked] = useState(status === "locked");
  const [lockedByYou, setlockedByYou] = useState(locked && lockHolder?.connectionId === self?.connectionId);
  const [isSubscribed, setisSubscribed] = useState(false)

  // useEffect(() => {

  // }, [])
  // console.log(lockHolder)

  // let locked = status === "locked";
  // let lockedByYou = locked && lockHolder?.connectionId === self?.connectionId;

  useEffect( () => {
    if (!space) return;

    if (!isSubscribed) {
      space.locks.getAll().then((locks) => {

        locks.forEach(lock => {
          if(lock && lock.id == name){


            console.log(lock.status, name)
            setlocked(lock.status == "locked");
            setlockHolder(lock.member ? lock.member : null);
            // lockHolder = isLocked.member;
            setlockedByYou(lock.member.connectionId === self?.connectionId && lock.status);
            // lockedByYou = locked && lockHolder?.connectionId === self?.connectionId;
            // return;
          } 
        });
      });
    }

    

    space.locks.subscribe("update", (lock) => {
      // const isLocked = space?.locks.get(name); 
    console.log("after lock subscribe", space.locks)
    setisSubscribed(true);
    if(lock && lock.id == name){


      console.log(lock.status, name, lock.status == "locked", lock.member)
      setlocked(lock.status == "locked");
      setlockHolder(lock.member && lock.status == "locked" ? lock.member : null);
      // lockHolder = isLocked.member;
      setlockedByYou(lock.member.connectionId === self?.connectionId && lock.status);
      // lockedByYou = locked && lockHolder?.connectionId === self?.connectionId;
      // return;
    }
    })
      
  }, [space]);

  const handleFocus = async () => {
    console.log(name)
    // const allLocks = await space.locks.getAll();
    // console.log(space.locks.locks);
    // if (locked) return;
    const isLocked = space?.locks.get(name); 
    // if(isLocked && isLocked.status == "locked" && isLocked.id == name){
    //   console.log("isLocked")
    //   setlocked(true);
    //   setlockHolder(isLocked.member);
    //   // lockHolder = isLocked.member;
    //   setlocked(isLocked.member === self?.connectionId);
    //   // lockedByYou = locked && lockHolder?.connectionId === self?.connectionId;
    //   return;
    // }

    try {
      // const isLocked = space?.locks.get(name); 
      // console.log(isLocked);
      await space?.locks.acquire(name);
      // const a = await space.locks.getAll();
      // console.log(a);
    } catch {
      // can't acquire the lock
    }
  };

  const handleClickOutside = () => {

    // const isLocked = space?.locks.get(name); 
    // if(isLocked && isLocked.status == "locked" && isLocked.id == name){
    //   // console.log("isLocked")
    //   setlocked(false);
    //   setlockHolder(null);
    //   // lockHolder = isLocked.member;
    //   setlockedByYou(false);
    //   // lockedByYou = locked && lockHolder?.connectionId === self?.connectionId;
    //   // return;
    // }
    
    space?.locks.release(name);
  };

  return (
    <>
    <InputCell
      value={value}
      // label={label}
      name={name}
      onFocus={handleFocus}
      onClickOutside={handleClickOutside}
      onChange={setValue}
      lockedByYou={lockedByYou}
      lockHolder={lockHolder}
    />
    </>
  );
};
