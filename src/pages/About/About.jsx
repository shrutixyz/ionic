import AboutCardIcon from "../../components/AboutCardIcon/AboutCardIcon";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./About.module.css";

const About = () => {
  return (
    <>
      <Navbar index={2} />
      <div className={styles.aboutparent}>
        <div className={styles.aboutdiv}>
          <div className={styles.contentwrapper}>
            <h2>why ionic?</h2>
            <p className={styles.subtitle}>
              ionic is a playful app focused towards learning and making it more
              accessible and fun
            </p>

            <div className={styles.cards}>
              <div className={styles.card}>
                <AboutCardIcon index={0} />
                <h4 className={styles.cardtitle}>Seamless Experience</h4>
                <p className={styles.cardsubtitle}>
                  Intro intro intro intro intor intro intorn Intro intro intro
                  intro intor intro intorn Intro intro intro intro intor intro
                  intorn Intro intro intro intro intor intro intorn
                </p>
              </div>
              <div className={styles.card}>
                <AboutCardIcon index={0} />
                <h4 className={styles.cardtitle}>Seamless Experience</h4>
                <p className={styles.cardsubtitle}>
                  Intro intro intro intro intor intro intorn Intro intro intro
                  intro intor intro intorn Intro intro intro intro intor intro
                  intorn Intro intro intro intro intor intro intorn
                </p>
              </div>
              <div className={styles.card}>
                <AboutCardIcon index={0} />
                <h4 className={styles.cardtitle}>Seamless Experience</h4>
                <p className={styles.cardsubtitle}>
                  Intro intro intro intro intor intro intorn Intro intro intro
                  intro intor intro intorn Intro intro intro intro intor intro
                  intorn Intro intro intro intro intor intro intorn
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
