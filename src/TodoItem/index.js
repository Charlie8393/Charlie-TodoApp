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
const Homework = styled.div`
    font-size:24px;
`

const Trash = styled.img`
    width: 30px;
    height: 30px;
    margin-left: 30px;
`
function TodoItem(){
    return(
        <Container>
        <CheckBox/>
        <Homework>Finish Homework</Homework>
        <Trash src="https://cdn-icons.flaticon.com/png/512/542/premium/542724.png?token=exp=1651106486~hmac=d66af5b5943a8a5fa2a5e6b8518acaa6"></Trash>
        </Container>
    );
}
export default TodoItem;