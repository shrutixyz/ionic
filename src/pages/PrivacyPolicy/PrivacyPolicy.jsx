import Navbar from "../../components/Navbar/Navbar";
import styles from "./PrivacyPolicy.module.css";

const PrivacyPolicy = () => {
  return (
    <>
      <Navbar index={3} />
      <div className={styles.privacyparent}>
        <div className={styles.privacydiv}>
          <div className={styles.contentwrapper}>
            <h2>Privacy Policy</h2>
            <p className={styles.subtitle}>
              Effective Date: October 27, 2023
              <br />
              <br />
              Welcome to Ionic, the web application designed for students to
              collaborate on multiplayer experiments in real-time. At Ionic, we
              take your privacy seriously, and we want to ensure that you
              understand how we handle your data. Rest assured, Ionic does not
              store any personal data, and we prioritize your privacy.
              <br />
              <ol>
                <li>Data Collection and Usage:</li>
                <ul>
                  <li>
                    We do not collect, store, or process any personal
                    information from our users.
                  </li>
                  <li>
                    We use temporary, anonymized usernames to facilitate your
                    multiplayer experiments.
                  </li>
                  <li>
                    Ionic only tracks real-time actions necessary to conduct the
                    experiments.
                  </li>
                </ul>
                <br />
                <li>Cookies:</li>
                <ul>
                  <li>
                    {" "}
                    Ionic may use cookies to enhance your user experience, but
                    these are strictly for session management and do not contain
                    any personal data.
                  </li>
                </ul>
                <br />
                <li>Data Security:</li>
                <ul>
                  <li>
                    We employ industry-standard security measures to protect the
                    data exchanged during your sessions.
                  </li>
                  <li>
                    Ionic does not share any information with third parties.
                  </li>
                </ul>
                <br />
                <li>Data Retention:</li>
                <ul>
                  <li>
                    Your experiment data is retained only for the duration of
                    your session and is not stored beyond that time.
                  </li>
                </ul>
                <br />
                <li>Changes to this Privacy Policy:</li>
                <ul>
                  <li>
                    {" "}
                    Ionic may update this Privacy Policy in the future. Any
                    changes will be reflected in the effective date at the top
                    of this policy.
                  </li>
                </ul>
              </ol>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
