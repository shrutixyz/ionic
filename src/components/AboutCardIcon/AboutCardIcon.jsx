import styles from "./AboutCardIcon.module.css"
import search from "../../images/searchbtn.svg"
const AboutCardIcon = (props) =>{
    const imgs = [search, search, search]
    return (
        <>
            <div className={styles.parentdiv}>
                <img src={imgs[props.index]} alt="" />
            </div>
        </>
    )
}

export default AboutCardIcon;