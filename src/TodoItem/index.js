import React, { useState } from "react";
import styled from "styled-components";
import {useHistory} from "react-router-dom";

const Container = styled.div`
display:flex;
flex-direction:row;
`;
const CheckBox = styled.button`
    background-color: blue;
    width: 30px;
    height: 30px;
    position: relative;
`;
const Text = styled.div`
    color: #87f542;
    font-weight: 800;
    font-size: 15px;
    margin-top: 30px;
`

const Trash = styled.img`
    width: 30px;
    height: 30px;
    margin-left: 230px;
`
function TodoItem({plustodo}){
    const [todo] = useState({
        text:"",
    });
    const onClickChange = () =>{
        plustodo(todo);
    }
    console.log(todo);
    return(
        <Container>
        <CheckBox onClick={onClickChange}/>
        <Trash src="https://cdn-icons-png.flaticon.com/512/3096/3096673.png"></Trash>
        </Container>
    );
}
export default TodoItem;