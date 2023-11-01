import React, {useState, useEffect, useContext, useMemo } from 'react'
import styles from './Concavelens.module.css'
import Concavelens from '../../../images/concave.svg'
import PerformNav from '../../../components/PerformNav/PerformNav';
import { mockNames } from "../../../utils/mockNames"
import { SpacesContext } from "../../../components/AblyIntegration/SpaceContext";
import useSpaceMembers from "../../../hooks/useMembers";
import { colours } from "../../../utils/helper";
import InfoSheet from '../../../components/InfoSheet/InfoSheet';

import i from "../../../images/i.svg";
import x from "../../../images/x.svg";
import ar from "../../../images/ar.svg";


import board from "../../../images/board4.svg";
import Chat from '../../../components/AblyIntegration/Chat/Chat';
/** 💡 Select a mock name to assign randomly to a new user that enters the space💡 */
const mockName = () => mockNames[Math.floor(Math.random() * mockNames.length)];

const ConcaveLens = () => {

  const [down, setDown] = useState(false);
  const [mousePosition, setMousePosition] = useState({x: 0, y: 0});
  const [offset, setOffset] = useState({x: 0, y: 0});
  const [isInitialSetupDone, setisInitialSetupDone] = useState(false);
  
  const name = useMemo(mockName, []);
  /** 💡 Select a color to assign randomly to a new user that enters the space💡 */
  const userColors = useMemo(
    () => colours[Math.floor(Math.random() * colours.length)],
    [],
  );

  const [magnification, setmagnification] = useState(null)

  const [isInfoOpen, setInfoOpen] = useState(false);
  /** 💡 Get a handle on a space instance 💡 */
  const space = useContext(SpacesContext);

  useEffect(() => {
    space?.enter({ name, userColors });
  }, [space]);

  const { self, otherMembers } = useSpaceMembers(space);


  useEffect(()=> {
    let focalLength = window.innerWidth * 0.1;
    let obj = (window.innerWidth * 0.5) - (focalLength * 2);
    let imageD = obj + 4*focalLength;
    document.getElementById('object').style.left = obj + 'px';
    document.getElementById('screen').style.left = imageD + 'px';
    setisInitialSetupDone(true);
  }, [])

  function mouseDown(e) {
    setDown(true);
    let lensOffsetLeft = document.getElementById('object').offsetLeft;
    let lensOffsetTop = document.getElementById('object').offsetTop;
    setOffset({x: lensOffsetLeft - e.clientX, y: lensOffsetTop - e.clientY})
  }

  function mouseUp(e) {
    setDown(false)
  }

  function mouseMove(e) {
    e.preventDefault();
    if (down) {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      }); 
    }
  }

  useEffect(() => {
    if(isInitialSetupDone)
    {
    let newPosition = mousePosition.x + offset.x;
    let totalWidth = window.innerWidth;

    if (newPosition < totalWidth/2 - 70)
    {
      let halfWidthOfLine = window.innerWidth * 0.5;
      let u = halfWidthOfLine - 25 - document.getElementById('object').offsetLeft;
      let f = window.innerWidth/10*-1;
      let v = ((u * f) / (f - u)) * (-1);
      let magnification = (v/u * (-1));

      let imageDistance = halfWidthOfLine + v - 64;
      if(imageDistance > (window.innerWidth - 160)){
        console.log("image at infinity", u, f)
      } else {
        document.getElementById('screen').style.left = imageDistance + 'px';
        if(magnification < 1){
          document.getElementById('screen').style.scale = magnification * (-1);
          document.getElementById('screen').style.rotate = '180deg'
        } else {
          document.getElementById('screen').style.scale = magnification;
        }

      }
      document.getElementById('object').style.left = mousePosition.x + offset.x + 'px';
    }
    }    
  }, [mousePosition])

  return (
    <>
      <PerformNav title="concave lens practical" self={self} otherMembers={otherMembers}/>
      {space ? <Chat /> : <div></div>}
      <div className={styles.parent}>
      <div className={styles.experimentbody}>
      <img src={board} alt="" style={{ marginTop: "2rem" }} />
        <table className={styles.datatable}>
    <thead>
        <tr>
            <th>Object Distance (u)</th>
            <th>Image Distance (v)</th>
            <th>Magnification (m)</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><input type="number" className={styles.readinginput} name="u1" /></td>
            <td><input type="number" className={styles.readinginput} name="v1" /></td>
            <td><input type="number" className={styles.readinginput} name="m1" /></td>
        </tr>
        <tr>
            <td><input type="number" className={styles.readinginput} name="u2" /></td>
            <td><input type="number" className={styles.readinginput} name="v2" /></td>
            <td><input type="number" className={styles.readinginput} name="m2" /></td>
        </tr>
        <tr>
            <td><input type="number" className={styles.readinginput} name="u3" /></td>
            <td><input type="number" className={styles.readinginput} name="v3" /></td>
            <td><input type="number" className={styles.readinginput} name="m3" /></td>
        </tr>
    </tbody>
</table>

<img
            src={i}
            onClick={() => {
              setInfoOpen(true);
            }}
            className={styles.i}
            alt=""
          />

          <img src={ar} className={styles.ar} alt="" />
          {isInfoOpen ? (
            <div
              onClick={() => {
                setInfoOpen(false);
              }}
            >
              <img src={x} className={styles.x} alt="" />
            </div>
          ) : (
            <div></div>
          )}
          {isInfoOpen ? <InfoSheet index={0} /> : <div></div>}

          <div className={styles.setinput}>
            <div>
              <p>Magnification: {Math.round(magnification * 100) / 100
}</p>
            </div>
            {/* <div>
              <input type="text" placeholder="Set focal length manually" onChange={(evt)=>{setinpfoc( window.innerWidth * 0.01 * evt.target.value)}}  className={styles.inputbox}/>
              <button className={styles.setbtn} onClick={()=>{
                setfocallength(inpfoc)
                console.log(inpfoc)
                console.log(focalLength)
              }}>Set</button>
            </div> */}
          </div>


      <div className={styles.container} onMouseUp={(e) => mouseUp(e)} onMouseMove={(e)=> mouseMove(e)}>
      <div id='center-line' className={styles.centerline}></div>
      <img src={Concavelens} className={styles.lens} alt="" />
      <div id='object' className={styles.object} onMouseDown={(e) => { mouseDown(e)}}></div>
      <div id="screen" className={styles.screen}>
      </div>
    </div>
    <div className={styles.table}>
            {
           [...Array(21)].map((_, i) => {
                return <div className={styles.mark}><p>|</p><br />{5*(i-10)}</div>
              })
            }
            
       </div>
      </div>
      </div>
          </>
  )
}

export default ConcaveLens