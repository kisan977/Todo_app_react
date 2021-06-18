import React,{useState} from 'react';
import './App.css';
import TodoLists from './TodoLists';


const  App=()=> {
  const[inputList, setInputList] = useState('');
  const[items,setItems] = useState([]);
  

  // user ley type gareko kura lai state ma push gareko kunai event call huda tesma prop hunxa
   const itemEvent = (event)=>{
    setInputList(event.target.value);
  }


  // when click to button push to list array xa yeuta items tesma push garni then input type gareko lai add gardini

 const handleClick = ()=>{

   setItems((oldItems)=>{
   return [...oldItems,inputList];

   });
  //  yo chae item add vaesakesi feri tae placeholder ma item nabasos vanera
   setInputList('');
 }
 const handleDelete = (id)=>{

setItems((oldItems)=>{
  return oldItems.filter((arrElem,index)=>{
    return index !==id;
  })
})


}



  return (
    <div className="container">
      <div className="center_container">
        <h1>GROCERY BUD</h1>
        <br/>

        <input type="text" placeholder='Add a Items' value={inputList} onChange={itemEvent} />
        <button onClick={handleClick}> + </button>
        <ol>
          {
            items.map((itemval,index)=>{
             return <TodoLists text = {itemval}
             onSelect = {handleDelete}
              key={index}
              id={index}/>
            }
           )
          }
        </ol>
      </div>
 
    </div>
  );
}

export default App;
