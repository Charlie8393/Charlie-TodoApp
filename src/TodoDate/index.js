import React, { useState } from "react";
import styled from "styled-components";
import { buildQueries } from "@testing-library/react";

const Information = styled.div`
    color: #87f542;
    font-weight: 800;
    font-size: 15px;
    margin-top: 30px;
`
function TodoDate(){
    const Today = new Date();
    
    return(
        <>
        <div>{Today.getFullYear()}</div>
        <div>{Today.getMonth()+1}</div>
        <div>{Today.getDate()}</div>
        </>
    );
}
export default TodoDate;