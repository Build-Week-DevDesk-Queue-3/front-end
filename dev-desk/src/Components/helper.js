import React, {useState, useEffect} from 'react'
import {axiosWithAuth} from './axiosWithAuth';
import LogOutHeader from './logOutHeader';

function Helper() {
    const [tickets, setTickets] = useState([]);
    const [userTickets, setUserTickets] = useState([]);
    const userID = localStorage.getItem('id');
    const username = localStorage.getItem('name')

    useEffect(() => {
        const getTickets = () => {
            axiosWithAuth()
                .get('/ticket/')
                .then(res => {
                    setTickets(res.data);
                    console.log(res);
                })
                .catch(err => console.log(err.message))
        };
        getTickets()
    },[]);

    useEffect(() => {
        const getUserTickets = () => {
            axiosWithAuth()
                .get(`/ticket/users-tickets/${userID}`)
                .then(res => {
                    setUserTickets(res.data)
                    console.log(res);
                })
                .catch(err => console.log(err))
        };
        getUserTickets()
    },[])

    const assignTicket = e => { 
        let user = Number(userID);
        let ticket = Number(e.target.value) 
        console.log(user)     
        console.log(ticket);       
        axiosWithAuth()
            .put(`/ticket/assign`, {
                userId: user,
                ticketId: ticket                
            })
            .catch(err => console.log(err.message));
    };
    
    return(
        <div>
            <LogOutHeader/>
            <div>
                <h1>Welcome {username} to the Helper page</h1>
            </div>
            <div className='helperTicketsContainer'>
                <div className='helperTicketSubcontainer'>
                    <h3 className='ticketListHelper'>List of Tickets</h3>
                    {tickets.map(ticket => (
                        <div className='ticketListHelper' key={ticket.id}>
                            <p>Title: {ticket.title}</p>
                            <p>Category: {ticket.category}</p>
                            <p>Description: {ticket.description}</p>
                            <p>Attempted: {ticket.attempted}</p>
                            {ticket.resolved === true ? <p>Resolved</p> : null }
                            {ticket.openStatus === false && ticket.resolved === false ? <p>Ticket Assigned</p> : null}
                            {ticket.resolved === false && ticket.openStatus === true ? <button onClick={assignTicket} value={ticket.id}>Assign Ticket</button> : null}
                        </div>
                    ))}
                    
                </div>
                <div className='helperTicketSubcontainer'>
                    <h3 className='assignedListHelper'>Tickets Assigned to You</h3>
                    {userTickets.map(ticket => (
                        <div className='assignedListHelper'>
                            <p>Title: {ticket.title}</p>
                            <p>Category: {ticket.category}</p>
                            <p>Description: {ticket.description}</p>
                            <p>Attempted: {ticket.attempted}</p>
                            <button >Ticket Resolved</button>
                            <button >Unassign Ticket</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Helper;