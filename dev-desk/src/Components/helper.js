import React, {useState, useEffect} from 'react'
//import privateRoute from './privateRoute';
import LogOutHeader from './logOutHeader';

function Helper() {
    const [tickets, setTickets] = useState([]);

    
    return(
        <div>
            <LogOutHeader/>
        </div>
    )
}

export default Helper;