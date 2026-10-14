import { useState } from "react";

function Demo()
{
    const [message, setMessage]=useState("")

   async function fetchdata()
    {
        fetch("http://localhost:5000/api/message")
        .then(res=>res.json())
        .then(data=>setMessage(data.message))
       
    }
    
    
    return(
        <>
        <button onClick={fetchdata}>fetchData</button>
        {
            message
        }
       
        
        </>
    );
}
export default Demo;