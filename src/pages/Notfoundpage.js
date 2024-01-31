import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


export function Notfoundpage(){
    const navigate=useNavigate();

    useEffect(()=>{
        setTimeout(() => {
            navigate(-1)
        }, 1000);
    }
    )
    return<h1>Page not found!</h1>
}

