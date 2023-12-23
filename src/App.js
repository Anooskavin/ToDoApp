import { useState } from "react";
import Header from "./Header/Header";
import "./styles.css";

export default function App() {
  const [thingsToDo , setThingsToDo] = useState(["Read SpringBoot", "Complete assignments", "Prepare breakfast", "Sleep for 2 hours", "Take a shower"]);
  const [completedToDo, setCompletedToDo] = useState([]);
  

  function enListToDo(work){
    const updateToDo = [...completedToDo];
    if(updateToDo.includes(work)){
      setCompletedToDo(updateToDo.filter((value)=> value!==work));
    }
    else{
      setCompletedToDo([...updateToDo,work])
    }
  }

  function thingsToRemove(){
    completedToDo.forEach((value)=>{
      thingsToDo.splice(thingsToDo.indexOf(value),1);
    })
    setCompletedToDo([]);
  }

  return (
    <div className="Application">
      <Header />
      {thingsToDo.map((things,index)=> 
        <p onClick={()=>enListToDo(things)} className={`listThings ${completedToDo.includes(things)? "strikeThrough" : ""}`} key={index}>
          {things}
        </p>
      )}
      {thingsToDo.length === 0 &&(
        <h3><i>Nothing to do buddy. Sleep!</i></h3>
      )}
      <button onClick={thingsToRemove}>Empty</button>
    </div>
  );
}
