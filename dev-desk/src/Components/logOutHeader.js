import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    float: right;
    margin-right: 10%;
    margin-top: 10px;
    margin-bottom: 20px;
    padding: 5px;
`

function LogOutHeader() {

    const logOut = e => {
        e.preventDefault();
        localStorage.removeItem('token')
    }

    return(
        <div>
            <Button onClick={() => logOut}>Log Out</Button>
        </div>
    )
}

export default LogOutHeader;