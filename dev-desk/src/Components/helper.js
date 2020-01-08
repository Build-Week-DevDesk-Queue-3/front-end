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
                .get('/ticket')
                .then(res => {
                    setTickets(res.data);
                })
                .catch(err => console.log(err))
        };
        getTickets()
    },[]);

    useEffect(() => {
        const getUserTickets = () => {
            axiosWithAuth()
                .get('/userTickets')
                .then(res => {
                    setUserTickets(res.data);
                })
                .catch(err => console.log(err))
        };
        getUserTickets()
    },[])

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
            <div>
                {tickets.map(ticket => (
                    <div>
                        <p>{ticket.title}</p>
                        <p>{ticket.description}</p>
                        <p>{ticket.attempted}</p>
                        <button onClick={assignTicket}>Assign Ticket</button>
                    </div>
                ))}
                <LogOutHeader/>
            </div>
            <div>
                {userTickets.map(ticket => (
                    <div>
                        <p>{ticket.title}</p>
                        <p>{ticket.description}</p>
                        <p>{ticket.attempted}</p>
                        <button >Ticket Resolved</button>
                        <button >Unassign Ticket</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Helper;