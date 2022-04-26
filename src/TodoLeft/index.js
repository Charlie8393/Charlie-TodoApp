import React, { useState } from "react";
import styled from "styled-components";

const Left = styled.div`
    color: #87f542;
    font-weight: 800;
    font-size: 15px;
    margin-top: 30px;
`
function TodoLeft(){
    return(
        <Left>6 todos left</Left>
    );
}
export default TodoLeft;