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
              ionic is a collaborative learning app, gamified to give students a
              better platform for playful learning. ionic is focused on making
              content that is understood easily by students and ease out the
              mental pressure while learning. And you know what makes it one of
              a kind? The ability to learn together with your friends by
              performing various cool science experiments!
            </p>

            <div className={styles.cards}>
              <div className={styles.card}>
                <AboutCardIcon index={0} />
                <h4 className={styles.cardtitle}>
                  Built for collaborative learning
                </h4>
                <p className={styles.cardsubtitle}>
                  You played multiplayer games? Now learn in a similar environment as well. Perform cool science experiments with your best friends and
                  learn together.
                </p>
              </div>
              <div className={styles.card}>
                <AboutCardIcon index={1} />
                <h4 className={styles.cardtitle}>
                  Large repository of content in pipeline
                </h4>
                <p className={styles.cardsubtitle}>
                  4 experiments are live on our platform as for now. We're
                  planning to include even more experiments and many of them are
                  already planned out!
                </p>
              </div>
              <div className={styles.card}>
                <AboutCardIcon index={2} />
                <h4 className={styles.cardtitle}>Seamless and Fast</h4>
                <p className={styles.cardsubtitle}>
                  ionic is fast! just how it should be! No special configuration
                  required. Just a decent internet connection and you're ready
                  to go.
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
