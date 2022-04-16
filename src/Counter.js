import { useState } from "react";


const Count = () => {
    var blue="blue";
    const [color,setColor]=useState(["red"]);
    const [count,setCount]=useState(0);
    
    const handleColors=(()=>{
        // let compon=document.getElementById("change");
        // compon.style.backgroundColor=col;
        let newCount=count+1;
        setCount(newCount);

        if(color==="blue")
        setColor("red");
        else
        setColor("blue");

    });

    return ( 
        <div id="change" style={{backgroundColor:color}}>
            <button onClick={()=>handleColors()} >Change color</button>
            <p>You have clicked {count} times</p>
        </div>
     );
}
 
export default Count;
