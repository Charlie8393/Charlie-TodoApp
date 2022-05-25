import React, { useState } from "react";
import styled from "styled-components";
import {useHistory} from "react-router-dom";

const Container = styled.div`
    display:flex;
    flex-direction:row;
`;
const CheckBox = styled.button`
    background-image: url("https://cdn-icons-png.flaticon.com/512/3096/3096673.png");
    width: 50px;
    height:50px;
`;
const Text = styled.div`
    color: #87f542;
    font-weight: 800;
    font-size: 15px;
    margin-top: 30px;
`
const Input = styled.input`
    width: 20px;
    height: 20px;
`
function TodoItem({plustodo,setTodos}){
    const[todos,setTodo]= useState([{
        isDone: null,
        text: "hello",
        id: 1
    }
    ]);
    const putTodoInfo = (e) => {
        const {name,value} = e.target;
            console.log(name);
            console.log(value);
            setTodos ({...null});
            console.log(todo);
        }
    const [todo] = useState({
        text:"",
    });
    const onClickChange = () =>{
        plustodo(todo);
    }
    console.log(todo);
    return(
        <Container>
        <CheckBox type="text"value={todo.text} name="text"  onClick={onClickChange} />
        <Text type="text" value={todo.text} name="text" onChange={putTodoInfo}>Trash</Text>
        </Container>
    );
}
export default TodoItem;