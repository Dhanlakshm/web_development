import { useState } from "react";

function Demo()
{
    const [data, setData]=useState([])

   async function fetchdata()
    {
        const res=await fetch("https://fakestoreapi.com/products")
        const result=await res.json()
        setData(result);
    }
    
    
    return(
        <>
        <button onClick={fetchdata}>fetchData</button>
        {
            data.map((item)=>{
                return(
                    <div key={item.id}>
                        <h2>{item.title}</h2>
                        <h2>{item.price}</h2>
                    </div>
                );
            })
        }
        
        </>
    );
}
export default Demo;