// import { useNavigate } from "react-router-dom"
import ColorMixer from "../Experiments/ColorMixer/ColorMixer"
import ConvexLens from "../Experiments/ConvexLens/ConvexLens"
import ConcaveLens from "../Experiments/ConcaveLens/ConcaveLens"
import FlameTest from "../Experiments/FlameTest/FlameTest"
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
    else if(text==="elements-flame-test"){
        return <FlameTest/>
    }
    else if(text==="convex-lens-test"){
        return <ConvexLens/>
    }
    else if(text==="concave-lens-test"){
        return <ConcaveLens/>
    }
    else{
        return <NotFound/>;
    }
   
} 

export default Perform;