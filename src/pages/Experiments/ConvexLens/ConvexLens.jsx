import React, {useState, useEffect} from 'react'
import styles from './Convexlens.module.css'
import convexLens from '../../../images/convex.svg'

const ConvexLens = () => {

  const [down, setDown] = useState(false);
  const [mousePosition, setMousePosition] = useState({x: 0, y: 0});
  const [offset, setOffset] = useState({x: 0, y: 0});

  function mouseDown(e) {
    setDown(true);
    let lensOffsetLeft = document.getElementById('lens').offsetLeft;
    let lensOffsetTop = document.getElementById('lens').offsetTop;
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
    let newPosition = mousePosition.x + offset.x;
    let totalWidth = window.innerWidth;

    if (newPosition < totalWidth/2 - 160)
    {
      document.getElementById('lens').style.left = mousePosition.x + offset.x + 'px';
    }
    
  }, [mousePosition])

  return (
    <div className={styles.container} onMouseUp={(e) => mouseUp(e)} onMouseMove={(e)=> mouseMove(e)}>
      <div id='center-line' className={styles.centerline}>
        
      </div>
      <img src={convexLens} className={styles.lens} alt="" />
      <div id='lens' className={styles.image} onMouseDown={(e) => mouseDown(e)}></div>
    </div>
  )
}

export default ConvexLens