import React, {useState, useEffect} from 'react'
import styles from './Concavelens.module.css'

const ConcaveLens = () => {

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
    document.getElementById('lens').style.left = mousePosition.x + offset.x + 'px';
  }, [mousePosition])

  return (
    <div className={styles.container} onMouseUp={(e) => mouseUp(e)} onMouseMove={(e)=> mouseMove(e)}>
      <p></p>
      <div id='lens' className={styles.lens} onMouseDown={(e) => mouseDown(e)}></div>
    </div>
  )
}

export default ConcaveLens