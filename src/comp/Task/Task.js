import React from 'react';
import { useDispatch } from 'react-redux';
import {deleteTask,doneTask} from "../../Red/action/List"
import Edit from '../Edit/Edit';
import { CheckCircleOutlined, DeleteOutlined } from '@ant-design/icons';



const Task = ({task}) => {
    const dispatch=useDispatch();

  return (
    <div>
        <p className={task.isDone ? "done":null} id='tex'> <h2>{task.text}</h2>
        <div  style={{paddingBottom:'1.2%',display:'flex',marginLeft:'40%'  ,paddingTop:'1%'}}>

    <span style={{marginRight:'1%'}}><Edit  task={task}/></span>
   

<button onClick={()=>dispatch(doneTask(task.id))}>

{task.isDone?"UnDone":"Done"} <CheckCircleOutlined  />
</button> 

<button style={{marginLeft:'1%'}}  onClick={()=>dispatch(deleteTask(task.id))}>
Delete <DeleteOutlined />
</button>


</div>


</p>



    </div>
  )
}

export default Task