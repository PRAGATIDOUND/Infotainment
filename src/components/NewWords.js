import React,{useState} from 'react'
import "./words.css";
import{Button}from "@material-ui/core";

const NewWords = () => {
    const [array,setArray]=useState([]);
    const [text,setText]=useState("")
    const inputHandler=(e)=>{
        setText(e.target.value);
        
    }
    const submit=()=>{
        let word =array;
        word.push(text);
        setText("");
        
        setArray(word)
        console.log(array);

    }
    const renderArray=()=>{
     return(
         <div className='mainitem' >
             {array.map((word,index)=>
        <ul >
      <li><div className='minicard' key={index}><h4>{ word}</h4> </div></li>
      </ul>
   )}
         </div>
     )
    }

  return (
    <div>
        <div className='inputArea'>
    <input className="inputitem" type="text" value={text} onChange={inputHandler}/>
    
    <button className="addbtn" onClick={submit} style={{backgroundColor:" #1565c0"}}  >add</button>
    </div>

    {console.log(array)}
    
      {renderArray()}

     
    </div>
  )
}

export default NewWords
