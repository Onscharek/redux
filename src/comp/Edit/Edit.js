import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { editTask} from '../../Red/action/List'
import {Button,Modal} from "react-bootstrap"
import { EditOutlined } from '@ant-design/icons'


const Edit = ({task}) => {
const [show, setShow] = useState(false)
const [newTask, setNewTask] = useState(task.text);
const handleClose =()=>setShow(false)
const handleShow=()=>setShow(true);

const dispatch =useDispatch()

const handleEdit =()=>{
  dispatch(editTask(task.id,newTask));
  handleClose();
};

  return (
<div>
  <button onClick={handleShow} id='ed'>Edit <EditOutlined /></button>


<Modal show={show} onHide={handleClose}>

  <Modal.Header closeButton>
    <Modal.Title>Edit Your Task</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <input value={newTask} onChange={(e)=>setNewTask(e.target.value)}/>
  </Modal.Body>
  <Modal.Footer>
    <Button style={{backgroundColor:' rgba(137, 43, 226, 0.61)',color:'white',borderColor:'black', boxShadow: ' 4px 4px rgba(0, 0, 0, 0.5)',marginTop:'1%',}} onClick={handleClose}>
      close
    </Button>
    <Button style={{backgroundColor:' rgba(137, 43, 226, 0.61)',color:'white',borderColor:'black', boxShadow: ' 4px 4px rgba(0, 0, 0, 0.5)',marginTop:'1%',}} onClick={handleEdit}>
      save
    </Button>
  </Modal.Footer>
</Modal>

</div>
  )
}

export default Edit