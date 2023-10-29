import Navbar from "../../components/Navbar/Navbar";
import styles from "./Experiments.module.css"
import searchbtn from "../../images/searchbtn.svg"
import ExperimentCard from "../../components/ExperimentCard/ExperimentCard";
import { useEffect, useState } from "react";

const Experiments = () => {
  const experiments = [0,1,2,3,4,5]
  const [ experimentsShow, setExperimentsShow] = useState(experiments)
  const [searchtxt, setSearch] = useState("")
  const titles = ["Exploring Color Theory", "Elements Flame Test", "Convex LensConvex Lens Focal Length", "Concave Lens Focal Length", "Electrical Circuits", "Rocket Propulsion Mechanics"]
  useEffect(() => {
    const listener = event => {
      if (event.code === "Enter" || event.code === "NumpadEnter") {
        console.log("Enter key was pressed. Run your function.");
        event.preventDefault();
        search()
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, [searchtxt]);
  function search(){
    console.log(searchtxt)
    let temp = []
    for(let i=0;i<titles.length;i++){
      if(titles[i].toLowerCase().includes(searchtxt.toLowerCase())){
        temp.push(i)
      }
    }
    setExperimentsShow(temp)
  }
  return (
    <>
      <Navbar index={1} />
      <div className={styles.experimentsbody}>
        <div>
        <strong><p className={styles.headline}>available experiments to perform!</p></strong>
        </div>
        <div className={styles.searchdiv}>
            <input type="search" placeholder="Search experiments" onChange={(evt)=>setSearch(evt.target.value)} className={styles.searchbox}/>
            <img src={searchbtn} className={styles.searchbtn} onClick={()=>{search()}} alt="" />
        </div>
      </div>
      <div className={styles.experimentsparent}>
          {
            experimentsShow.map((el)=>{
              return <ExperimentCard index={el} />
            })
          }
      </div>
    </>
  );
};

export default Experiments;
