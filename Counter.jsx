import { useState } from "react";

function Counter(){
        // const[count,setCount]=useState(0);
        const[name, setName]=useState(" ");
        console.log(name)
    // let handleClick=()=>{
    //     console.log(count
    //     setCount(count+1);
    // }
// let count=0;
//     function increament()
//     {
//         count++;
//         console.log(count)
//     }
    return(
        <>
        
        {/* <h2>Count:{count} </h2>
        <button onClick={()=>setCount(count+1)}>Click</button>   */}
        
        <h3>Name: {name}</h3>
        <input type="text" onChange={(e)=>setName(e.target.name)}/>

        </>
    );
}
export default Counter;