import styles from "./AboutCardIcon.module.css"
import alert from "../../images/alert.svg"
import layers from "../../images/layers.svg"
import wind from "../../images/wind.svg"
const AboutCardIcon = (props) =>{
    const imgs = [alert, layers, wind]
    return (
        <>
            <div className={styles.parentdiv}>
                <img src={imgs[props.index]} alt="" />
            </div>
        </>
    )
}

export default AboutCardIcon;