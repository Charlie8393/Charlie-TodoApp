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
    return(
        <Container>
            <Todobox>
                <TodoDate />
                <TodoLeft />
                <TodoAdd />
                <TodoItem/>
            </Todobox>
        </Container>
    );
}
export default Mainpage;