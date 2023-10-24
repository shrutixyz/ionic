import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Redirect  = () =>{
    const navigate = useNavigate()
    useEffect(()=>{
        navigate('/404', { replace: true })
    }, [navigate])
    return (
        <p>redirecting you to 404 page</p>
    )
} 

export default Redirect;