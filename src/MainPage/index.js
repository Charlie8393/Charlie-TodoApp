import React, { useState } from "react";
import styled from "styled-components";
import TodoAdd from "../TodoAdd";
import TodoDate from "../TodoDate";
import TodoLeft from "../TodoLeft";
import TodoItem from "../TodoItem";
const Container = styled.div`
    height: 100vh;
    background-color:#c0eb34;
    display: flex; 
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #f542a7;
`;
const Todobox = styled.div`
    width: 300px;
    height: 500px;
    background-color: #4287f5;
`
function Mainpage(){
    const[age, setage] = useState(19);
    const[todos,setTodos] = useState([{
        isDone: false,
        text: "hello",
        id: 1
    }
    ]);
    console.log(todos);
    const [studnetfirst, studentlast]= useState({
        studnetfirst : "",
        studentlast : ""
    });
    const addTodo = (todo)=>{
        console.log(todos)
        // ... part copy everything on list.
        setTodos([...todos,todo]);
    }

    return(
        <Container>
            <Todobox>
                <TodoDate />
                <TodoLeft todos={todos} />
                <TodoAdd todos={todos} updateTodo={todos}/>
                <TodoItem todos={todos} updateTodo={todos}/>
            </Todobox>
        </Container>
    );
}
export default Mainpage;