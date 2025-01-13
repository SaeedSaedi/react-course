import { useEffect,useState } from "react";

const Text=()=>{
    const [text,setText] = useState("");
    
    useEffect(()=>{
        console.log("Component did mount")

        return ()=>{
            console.log("Component unmount")
        }
    },[])
    
    useEffect(()=>{
        console.log("Component updated")
    },[text])

    return(
        <div>
            <input onChange={(e)=>setText(e.target.value)} />
            <h1>{text}</h1>
        </div>
    )
}

export default Text