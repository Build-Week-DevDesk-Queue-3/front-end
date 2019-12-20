import React, {useState, useEffect} from 'react'
import {axiosWithAuth} from './axiosWithAuth';
import LogOutHeader from './logOutHeader';

function Helper() {
    const [tickets, setTickets] = useState([]);
    const [userTickets, setUserTickets] = useState([]);
    const [selectedTicket, setSelectedTicket] = useState({})
    const userID = localStorage.getItem('id');

    useEffect(() => {
        const getTickets = () => {
            axiosWithAuth()
                .get('#')
                .then(res => {
                    setTickets(res.data);
                })
                .catch(err => console.log(err))
        };
        getTickets()
    },[]);

    const assignTicket = e => {
        e.preventDefault();

        axiosWithAuth()
            .put(`#`, {
                id: selectedTicket.id,
                helpId: userID,
                studentId: selectedTicket.studentId,
                openStatus: false
            })
    }

    return(
        <div>
            <LogOutHeader/>
        </div>
    )
}

export default Helper;