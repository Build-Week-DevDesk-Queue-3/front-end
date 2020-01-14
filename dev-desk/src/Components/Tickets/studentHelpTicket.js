import React, {useState} from 'react';
import {axiosWithAuth} from './axiosWithAuth';

function CreateTickets() {
  const [tikTitle, setTikTitle] = useState('');
  const [tikCateg, setTikCateg] = useState('');
  const [tikDes, setTikDes] = useState('');
  const [submitted, setSubmitted] = useState('');
  const studentId = localStorage.getItem('id');
  const [newMessage, setNewMessage] = useState('');
  
  const handleTikTitle = e => {
    setTikTitle(e.target.value)
  }
  
  const handleTikCateg = e => {
    setTikCateg(e.target.value)
  }
  
  const handleTikDes = e => {
    setTikDes(e.target.value)
  }
  
  const handleSubmitted = e => {
    setSubmitted(e.target.value)
  }
  
  const submitHandle = e => {
    e.preventDefault();
    let numbers = Number(studentId);
    setNewMessage('Your ticket is being submitted.')
    
    axiosWithAuth()
      .post('')
  }
}