import { useState } from "react";
//import 'bootstrap/dist/css/bootstrap.min.css'

export const Hooksone=()=>
{
    const[user,setUser]=useState("")

    const print=()=>
    {
        alert(user+"your name is added")
    }
    const result=(name)=>
    {
        setUser(name.target.value)
    }
    return(
        <>
        <input type="text"placeholder="enter your name"name={user}onChange={result}/>
        <button onClick={print} className="btn btn-outline-primary">
            click...!
        </button>
        
        </>

    );
}