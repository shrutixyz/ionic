import Navbar from "../../components/Navbar/Navbar";
import styles from "./PrivacyPolicy.module.css"

const PrivacyPolicy = () => {
  return (
    <>
      <Navbar index={3} />
      <div className={styles.privacyparent}>
        <div className={styles.privacydiv}>
          <div className={styles.contentwrapper}>
            <h2>Privacy Policy</h2>
            <p className={styles.subtitle}>
              ionic is a playful app focused towards learning and making it more
              accessible and fun
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
