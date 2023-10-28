// import { useNavigate } from "react-router-dom"
import ColorMixer from "../Experiments/ColorMixer/ColorMixer"
import ConvexLens from "../Experiments/ConvexLens/ConvexLens"
import ConcaveLens from "../Experiments/ConcaveLens/ConcaveLens"
import FlameTest from "../Experiments/FlameTest/FlameTest"
import NotFound from "../NotFound/NotFound"
import { useEffect, useState } from "react"
import { SpaceContextProvider } from "../../components/AblyIntegration/SpaceContext"
import { useParams } from "react-router-dom"
const Perform  = () =>{
    // const mapping = ["exploring-color-theory", "elements-flame-test"]
    
    const {id} = useParams();
    const [text, setText] = useState(id)
    // const navigate = useNavigate();
    
    if(text==="exploring-color-theory"){
        return <SpaceContextProvider example="member-location"><ColorMixer /></SpaceContextProvider>;
    }
    else if(text==="elements-flame-test"){
        return <SpaceContextProvider example="member-location"><FlameTest/></SpaceContextProvider>
    }
    else if(text==="convex-lens-test"){
        return <SpaceContextProvider example="member-location"><ConvexLens/></SpaceContextProvider>
    }
    else if(text==="concave-lens-test"){
        return <SpaceContextProvider example="member-location"><ConcaveLens/></SpaceContextProvider>
    }
    else{
        return <SpaceContextProvider example="member-location"><NotFound/></SpaceContextProvider>;
    }
   
} 

export default Perform;