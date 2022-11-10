import { useState } from "react";

export const TernaryOperator=()=>
{   
const[wish,setWish]=useState("nothing")
const[result,setResult]=useState("")
const[changes,setChanges]=useState({color:'red',background:'black'})

const trigger=(get)=>
{
    setWish(get.target.value)
}
const ternary=()=>

{
    (wish==='spring')?
    setChanges({color:'white',background:'green'}):
    (wish==='rainy')?
    setChanges({color:'white',background:'blue'}):
    (wish==='winter')?
    setChanges({color:'white',background:'yellow'}):
    (wish==='summer')?
    setChanges({color:'red',background:'black'}):

    
    setChanges({color:'black',background:'white'})
    setResult(wish)

}
return(
    <>
    <input type="text" placeholder="your season"onChange={trigger}/>
    <button onClick={ternary}className="btn btn-outline-success">
        Climate
    </button>
    <p style={changes}>
        {result}
    </p>
    </>
)
}

