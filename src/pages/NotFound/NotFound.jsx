import flask from "../../images/brokenflask.svg"
import styles from "./NotFound.module.css"
const NotFound  = () =>{
    return (
        <div className={styles.notfounddiv}>
            <div className={styles.notfoundchild}>
            <img src={flask} alt="" className={styles.image}/>
            <div>
                <h1 className={styles.title}>404</h1>
                <h4 className={styles.notfound}>NOT FOUND</h4>
                <p>something is broken.. probably the link<br></br> you were looking for</p>
            </div>
            </div>
        </div>
    )
} 

export default NotFound;