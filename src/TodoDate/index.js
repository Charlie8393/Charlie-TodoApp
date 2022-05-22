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
    const DayName = Today.toLocaleString("ko-KR", { weekday: "long"});
    return(
        <>
        <div>{Today.getFullYear()}</div>
        <div>{Today.getMonth()+1}</div>
        <div>{Today.getDate()}</div>
        <DayName>{DayName}</DayName>
        </>
    );
}
export default TodoDate;