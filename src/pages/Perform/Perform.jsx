// import { useNavigate } from "react-router-dom"
import ColorMixer from "../Experiments/ColorMixer/ColorMixer"
import NotFound from "../NotFound/NotFound"
import { useEffect, useState } from "react"

const Perform  = () =>{
    // const mapping = ["exploring-color-theory", "elements-flame-test"]
    const [text, setText] = useState("")
    // const navigate = useNavigate();
    useEffect(()=>{
        let ans = window.location.search;
        ans = ans.substring(1, ans.length)
        console.log(ans)
        setText(ans)
        console.log("text hai ", text)
    }, [text])
    if(text==="exploring-color-theory"){
        return <ColorMixer />;
    }
    return <NotFound/>;
} 

export default Perform;