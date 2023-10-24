import Navbar from "../../components/Navbar/Navbar";
import styles from "./Experiments.module.css"
import searchbtn from "../../images/searchbtn.svg"
import ExperimentCard from "../../components/ExperimentCard/ExperimentCard";

const Experiments = () => {
  const experiments = [true,false,false,true]
  return (
    <>
      <Navbar index={1} />
      <div className={styles.experimentsbody}>
        <div>
        <strong><p className={styles.headline}>available experiments to perform!</p></strong>
        </div>
        <div className={styles.searchdiv}>
            <input type="search" placeholder="Search experiments" className={styles.searchbox}/>
            <img src={searchbtn} className={styles.searchbtn} alt="" />
        </div>
      </div>
      <div className={styles.experimentsparent}>
          {
            experiments.map((el)=>{
              return <ExperimentCard locked={el}/>
            })
          }
      </div>
    </>
  );
};

export default Experiments;
