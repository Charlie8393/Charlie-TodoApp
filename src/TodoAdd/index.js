import React, { useState } from "react";
import styled from "styled-components";
import {useHistory} from "react-router-dom";

const Input = styled.input`
    font-size:24px;
    position: relative;
`

const Button = styled.button`
    font-weight: 800;
    color: #3503fc;
    font-size: 24px;
    position: relative;
    background-color:#03fc90;
`

function TodoAdd({todos,updateTodo}){
    const [todo, setTodo] = useState({
        id: true,
        text:"",
        isDone:true,
    });
    
    const putTodoInfo = (e) => {
    const {name,value} = e.target;
       
        setTodo ({
            id: todos.length + 1,
            text: value,
            isDone:true,
        });
        console.log(todo);
    }
    
    const onClickChange = () =>{
        //function
        updateTodo(todo);
        // alert("Go");
    }

    return(
        <>
        <Input type="text" value={todo.text} name="text" onChange={putTodoInfo}></Input>
        <Button onClick={onClickChange}>Add</Button>
        </>
    );
}
export default TodoAdd;