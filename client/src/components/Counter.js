import  React,{useState} from 'react'

const Counter=()=>{

    const [count,setCount]=useState(0)

    return (
       <div className="main-div">


       <h2>{count}</h2>  
       <button
        onClick={()=>setCount(count+1)} 
       >Click to count</button>

       </div>

    )
}
export default Counter