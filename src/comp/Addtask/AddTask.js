import React,{useState} from 'react'
import {addTask} from "../../Red/action/List";
import { useDispatch } from 'react-redux';
import { Button,Form } from 'react-bootstrap';

const AddTask = () => {

const[text,setText]= useState("");
const dispatch =useDispatch();

const handeleAdd =(e)=>{
    e.preventDefault();
    if (text){
        dispatch(addTask({id:Math.random(), text , isDone:false}));
        setText("");}
        else {
            alert("can not add an empty text !!");}};
        
  return (
    <div>
        <Form onSubmit={handeleAdd} >
        <Form.Control 
        className='input-task'
         
          type="text" style={{ height: '200px',width:'50%',marginLeft:'25%' ,marginTop:'2%',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.9)',textAlign:'center'}}
           placeholder=" TYPE HERE... " 
          onChange={(e)=>setText(e.target.value)}
            value={text}
          />          <Button onClick={handeleAdd}
          style={{backgroundColor:' rgba(137, 43, 226, 0.61)',color:'white',borderColor:'black', boxShadow: ' 4px 4px rgba(0, 0, 0, 0.5)',marginTop:'1%',width:'900px',height:'70px'}}>ADD TASK</Button>

        </Form>


    </div>
  )
}

export default AddTask