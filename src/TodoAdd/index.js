import React, { useState } from "react";
import styled from "styled-components";
import {useHistory} from "react-router-dom";

const Input = styled.input`
    font-size:24px;
    position: relative;
`

const Button = styled.button`
    font-weight: 800;
    color: #3503fc;
    font-size: 24px;
    position: relative;
    background-color:#03fc90;
`
function TodoAdd(){
    const history = useHistory();
    const[user,setUser] = useState({
        id:"",
    });
    const {id} = user;
    const putUserInfo = (e) => {
    const {name,value} = e.target;
        console.log(name);
        console.log(value);
        setUser ({
            ...user,
            // use name to avoid repetition to use same code.
            [name]: value,
        });
        console.log(user);
    }
    return(
        <>
        <Input type="text" value = {id} name = "id" onChange={putUserInfo}></Input>
        <Button>Add</Button>
        </>
    );
}
export default TodoAdd;