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
                .get('tickets')
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
            .put(`helper-student-ticket`, {
                ticketId: selectedTicket.id,
                studentId: selectedTicket.studentId,
                helpId: userID
            })
            .then(
                window.location.replace('#')
            )
            .catch(err => console.log(err));
        
        axiosWithAuth()
            .put(`#`, {
                id: selectedTicket.id,
                title: selectedTicket.title,
                
            })
    };

    return(
        <div>
            <LogOutHeader/>
        </div>
    )
}

export default Helper;