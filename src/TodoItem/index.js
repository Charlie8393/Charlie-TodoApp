import React, { useState } from "react";
import styled, {css} from "styled-components";
import {useHistory} from "react-router-dom";

const Container = styled.div`
    display:flex;
    flex-direction:row;
`;
const Input = styled.button`
    height: 25px;
    width: 25px;
    border-radius: 50%;
    display: inline-block;
    margin-top: 20px;
    ${(props) =>
        props.isDone &&
        css`
            background-color: #fccf03;
        `
        
    }
`;

const CheckBox2 = styled.img`
    width: 50px;
    height:50px;
    margin-left: 150px;
    
`;
const Text = styled.div`
    color: #87f542;
    font-weight: 800;
    font-size: 15px;
    margin-top: 30px;
`
function TodoItem({deleteTodo,todo}){
    
    const onClickChange = () =>{
        deleteTodo(todo.id);
    }
    
    return(
        <Container>
        <Input isDone={todo.isDone}></Input>
        <Text>{todo.text}</Text>
        <CheckBox2  src="https://cdn-icons-png.flaticon.com/512/3096/3096673.png" onClick={onClickChange}  />
        </Container>
    );
}
export default TodoItem;