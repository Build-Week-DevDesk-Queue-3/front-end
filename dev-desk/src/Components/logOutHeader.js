import React from 'react';
import styled from 'styled-components';

function LogOutHeader() {

    const logOut = e => {
        e.preventDefault();
        localStorage.removeItem('token')
    }

    return(
        <div>
            <button onClick={() => logOut()}>Log Out</button>
        </div>
    )
}

export default LogOutHeader;