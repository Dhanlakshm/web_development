import { useState } from "react";

function Counter(){
        // const[count,setCount]=useState(0);
        // const[name, setName]=useState(" ");
        // console.log(name)
         const[value, setValue]=useState(""); 
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
        

        
        <h5>Value: {value}</h5>
        <input type="text" onChange={(e)=>setValue(e.target.value)}/>


        </>
    );
}
export default Counter;