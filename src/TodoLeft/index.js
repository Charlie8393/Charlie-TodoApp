import React, { useState } from "react";
import styled from "styled-components";

const Text = styled.div`
    color: #87f542;
    font-weight: 800;
    font-size: 15px;
    margin-top: 30px;
`
function TodoLeft({todos,age}){
    return(
        <>
        <Text>{todos.length} todos left</Text>
        
        </>
    );
}
export default TodoLeft;