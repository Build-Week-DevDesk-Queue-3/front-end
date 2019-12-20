import React from 'react';

function LogOutHeader() {

    logOut = e => {
        e.preventDefault();
        localStorage.removeItem('token')
    }

    return(
        <div>
            <button onClick={() => logOut}>Log Out</button>
        </div>
    )
}

export default LogOutHeader;