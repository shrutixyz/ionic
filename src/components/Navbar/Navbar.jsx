import styles from "./Navbar.module.css"
import "./Nav.css"
import { useState } from "react"
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Navbar  = (props) =>{
    const navigate = useNavigate()
    const [selected, setSelected] = useState(0);
    function check(index){
        if(selected===index){
            return " selected";
        }
        return "";
    }
    useEffect(()=>{
        setSelected(Number(props.index))
    }, [props.index])
    return (
        <div className={styles.nav}>
            <p  className={"hover-underline-animation navitem" + check(0)} onClick={()=>{setSelected(0); navigate('/')}}>home</p>
            <p>•</p>
            <p  className={"hover-underline-animation navitem" + check(1)} onClick={()=>{setSelected(1); navigate('/experiments')}}>experiments</p>
            <p>•</p>
            <p className={"hover-underline-animation navitem" + check(2)} onClick={()=>{setSelected(2); navigate('/about')}}>about</p>
            <p>•</p>
            <p  className={"hover-underline-animation navitem" + check(3)} onClick={()=>{setSelected(3); navigate('/privacy')}}>privacy policy</p>
        </div>
    )
} 

export default Navbar;