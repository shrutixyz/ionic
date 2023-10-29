import Navbar from "../../components/Navbar/Navbar"
import logo from "../../images/logo.svg"
import styles from "./Home.module.css"
import bubble from "../../images/bubble.svg"
import { useNavigate } from "react-router-dom"
import rocket from "../../images/rock.svg"
import fire from "../../images/rocketfire.svg"
import ablylogo from "../../images/ably.png"

const Home  = () =>{
    const navigate = useNavigate()
    return (
        <>
            <Navbar index={0}/>
            <div className={styles.homebody}>
                <div className={styles.logotile}>
                    <img src={logo} className={styles.logo} alt="" />
                    <strong><h1 className={styles.title}>ionic</h1></strong>
                </div>
                <p>perform science experiments with your friends!</p>
                <button className={styles.viewavl} onClick={()=>navigate('/experiments')}>view available experiments</button>
            </div>
            <div className={styles.bubbles}>
                <img src={bubble} alt="" className={styles.lb1} />
                <img src={bubble} alt="" className={styles.lb2} />
                <img src={bubble} alt="" className={styles.lb3} />
                <img src={bubble} alt="" className={styles.rt1} />
                <img src={bubble} alt="" className={styles.rt2} />
            </div>
            <div className={styles.rocket}>
                <img src={fire} alt="" className={styles.rocketfire} />
            <img src={rocket} className={styles.rocketprop} alt="" />
            </div>
            <div className={styles.ablylogo} onClick={()=>window.location.href="https://ably.com/"}>
            <p>powered by </p><img src={ablylogo} className={styles.logoimg} alt="" /><p> Ably</p>
            </div>
            
        </>
    )
} 

export default Home;