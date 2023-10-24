import styles from "./ExperimentCard.module.css";
import clock from "../../images/clock.svg";
import { useState } from "react";
import Modal from "react-modal";
import lock from "../../images/lock.svg"
import { useNavigate } from "react-router-dom";

const ExperimentCard = (props) => {
  console.log("props are ", props)
  const data = [
    {
      title: "Exploring Color Theory",
      time: "5 minutes",
      subtitle: "Try mixing different colors with your friends and explore the different patterns and combinations!",
      link: "exploring-color-theory"
    },
    {
      title: "Elements Flame Test",
      time: "8 minutes",
      subtitle: "Put different chemical elements on a burning flame and observe the changing colors caused due to that!",
      link: "elements-flame-test"
    },
    {
      title: "Electrical Circuits",
      time: "10 minutes",
      subtitle: "Connect the DC bulb correctly to get the light glowing!",
      link: "404"
    }
  ]
  const navigate=useNavigate()
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
        
    },
    
  };

  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }


  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      
      <div className={styles.cardbody}>
      {
        props.locked?<div className={styles.locked}>
          <img src={lock} className={styles.lock} alt="" />
          <p className={styles.locktitle}>This experiment is locked!</p>
        </div>:<div></div>
      }
        <div className={styles.cardimg}></div>
        <div className={styles.textcontent}>
          <strong>
            <h4>{data[props.index].title}</h4>
          </strong>
          <div className={styles.performingtime}>
            <img src={clock} alt="" className={styles.clock} />
            <p>{data[props.index].time}</p>
          </div>
          <p>
          {data[props.index].subtitle}
          </p>
          <button className={styles.performbtn} onClick={()=>{openModal()}}>perform</button>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
       <div className={styles.modalcontent}>
        <p>Enter your name</p>
        <input type="text" placeholder="name"/>
        <p>Enter room code</p>
        <input type="text" placeholder="roomcode" />
        <button onClick={()=>navigate('/perform?'+data[props.index].link)}>Join</button>
       </div>
      </Modal>
    </>
  );
};

export default ExperimentCard;
