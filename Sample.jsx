import { useEffect, useState } from "react";

function Sample()
{

    const[count, setCount]=useState(0)
    useEffect(()=>{
       console.log("effect executed")
    },[]);
    return(
        <>
        <h2>Count: {count}</h2>
        <button onClick={()=>setCount(count+1)}>click</button>
        
        </>
    );
}
export default Sample;