import React from 'react';

const TodoLists = (props) => {
    return (
        <div className='todo_style'>
            <i className='fa fa-times' onClick={()=>{props.onSelect(props.id)}}/>
   <li>{props.text}</li>
        </div>
 
    );
}

export default TodoLists;
