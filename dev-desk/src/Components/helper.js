import React, {useState, useEffect} from 'react'
import {axiosWithAuth} from './axiosWithAuth';
import LogOutHeader from './logOutHeader';

function Helper() {
    const [tickets, setTickets] = useState([]);
    const [userTickets, setUserTickets] = useState([]);
    const [selectedTicket, setSelectedTicket] = useState({})
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

 //   useEffect(() => {
 //       const getUserTickets = () => {
 //           axiosWithAuth()
 //               .get('/userTickets')
 //               .then(res => {
 //                   setUserTickets(res.data);
 //               })
 //               .catch(err => console.log(err))
 //       };
 //       getUserTickets()
 //   },[])

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
            <div>
                <h1>Welcome {username} to the Helper page</h1>
            </div>
            <div>
                <h3 className='ticketListHelper'>List of Tickets</h3>
                {tickets.map(ticket => (
                    <div className='ticketListHelper' key={ticket.id}>
                        <p>Title: {ticket.title}</p>
                        <p>Category: {ticket.category}</p>
                        <p>Description: {ticket.description}</p>
                        <p>Attempted: {ticket.attempted}</p>
                        {ticket.resolved === true ? <p>Resolved</p> : null }
                        {ticket.openStatus === false && ticket.resolved === false ? <p>Ticket Assigned</p> : null}
                        {ticket.resolved === false && ticket.openStatus === true ? <button onClick={assignTicket}>Assign Ticket</button> : null}
                    </div>
                ))}
                
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