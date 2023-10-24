import styles from "./ExperimentCard.module.css";
import clock from "../../images/clock.svg";
import { useState } from "react";
import Modal from "react-modal";
import lock from "../../images/lock.svg"
import { useNavigate } from "react-router-dom";

const ExperimentCard = (props) => {
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
            <h4>Exploring Color Theory</h4>
          </strong>
          <div className={styles.performingtime}>
            <img src={clock} alt="" className={styles.clock} />
            <p>5 minutes</p>
          </div>
          <p>
            Try mixing different colors with your friends and explore the
            different patterns and combinations!
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
        <button onClick={()=>navigate('/perform?exploring-color-theory')}>Join</button>
       </div>
      </Modal>
    </>
  );
};

export default ExperimentCard;
