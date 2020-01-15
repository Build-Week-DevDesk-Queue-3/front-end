import React, {useState, useEffect} from 'react';
import ticketImg from '../Images/ticketBoard.svg';

import {axiosWithAuth} from '../Components/axiosWithAuth';
import LogOutStd from '../Pages/studentLogOut';

function StdDashBoard() {
	const [tik, setTik] = useState([]);
	const [userTiks, setUserTiks] = useState([]);
	
	const [newUpdate, setNewUpdate] = useState(1);
	
	const userID = localStorage.getItem('id');
	const username = localStorage.getItem('name');
	
	useEffect(() => {
		const getTiks = () => {
			axiosWithAuth()
				.get('/ticket/')
				
				.then(res => {
					setTik(res.data);
					console.log(res);
				})
				
				.catch(err => console.log(err.message))
		};		
		getTiks()
		
		const getUserTiks = () => {
			axiosWithAuth()
				.get(`/ticket/users-tickets/${userID}`)
				
				.then(res => {
					setUserTiks(res.data)
					console.log(res);
				})
				
				.catch(err => console.log(err))
		};
		getUserTiks();	
	});
	
	const tikResolved = e => {
		let ticket = Number(e.target.value);
		console.log(ticket)
		
		axiosWithAuth()
			.put('/ticket/resolved', {
				ticketId: tik
			});
		
		setTimeout(() => {
			setNewUpdate(newUpdate +1)
		}, 100);
	}
	
	const handleCreateTik = e => {
		window.location=('/profile/Ticket');
	}
	
	const deleteTik = e => {
		e.preventDefault();
		let user = Number(userID);
		let id = Number(e.target.value)
		
		axiosWithAuth()
			.delete('/ticket/', {
				data: {
					userId: user,
					ticketId: id
				}
			})
			
			.catch(err => console.log(err.message))
	}
}

export default StdDashBoard;