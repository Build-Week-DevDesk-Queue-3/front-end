import React from 'react';
import {Link} from 'react-router-dom';

function HomePage() {
    return(
        <div>
            <h1>Developement Desk Home Page</h1>
            <button>Student</button>
            <Link to='/loginHelper'>
                <button>Helper</button>
            </Link>
        </div>
    )
}

export default HomePage;