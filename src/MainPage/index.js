import React, { useState } from "react";
import styled from "styled-components";
import TodoAdd from "../TodoAdd";
import TodoDate from "../TodoDate";
import TodoLeft from "../TodoLeft";
import TodoItem from "../TodoItem";
import TodoList from "../TodoList";
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

    const[todos,setTodos] = useState([]);
    
    const addTodo = (todo)=>{
 
        // ... part copy everything on list.
        setTodos([...todos,todo]);
    }
    // .filter -->
    // .map --> iterate the array
    const removeTodo = (id) => {
        console.log(id);
        const newTodos = todos.filter((todo)=> todo.id != id);
        setTodos((newTodos));
    }

    const changeIsDone = (id) =>{
        const currentTodo = todos[id - 1];
        console.log(currentTodo);
        
    }

    return(
        <Container>
            <Todobox>
                <TodoDate />
                <TodoLeft todos={todos} />
                <TodoAdd todos={todos} updateTodo={addTodo}/>
                <TodoList todos={todos} deleteTodo = {removeTodo} todo = {changeIsDone}/>
                {/*<TodoItem todos={todos} remove={changeIsDone}/>*/}
                
            </Todobox>
        </Container>
    );
}
export default Mainpage;