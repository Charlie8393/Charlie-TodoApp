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
    return(
        <>
        <Information>2022/04/26</Information>
        <Information>Tuesday</Information>
        </>
    );
}
export default TodoDate;