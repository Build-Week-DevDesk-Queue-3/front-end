import React, {useState} from 'react';
import {axiosWithAuth} from '../axiosWithAuth';

function TicketCreator() {
  const [tikTitle, setTikTitle] = useState('');
  const [tikCateg, setTikCateg] = useState('');
  
  const [tikDes, setTikDes] = useState('');
  const [tried, setTried] = useState('');
  
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
  
  const handleTried = e => {
    setTried(e.target.value)
  }
  
  const submitHandle = e => {
    e.preventDefault();
    let number = Number(studentId);
    setNewMessage('Your ticket is being submitted.')
    
    axiosWithAuth()
      .post('/ticket/', {
        tikTitle: tikTitle,
        tikCateg: tikCateg,
        tikDes: tikDes,
        tried: tried,
        userId: number
      })

      .then(res => console.log(res.newMessage))
      .catch(err => console.log(err.newMessage));

    setTimeout(() =>{window.location='/studentDashboard'}, 1000)
  }

  const cancelHandle = e => {
    window.location='/studentDashboard'
  }

  return (
    <div className ='studentComponent studentTicket'>
      <h1>Create Help Ticket</h1>

      <form onSubmit={submitHandle}>
        Give your ticket a title:<br/>

        <input
          type='text'
          name='ticket title'
          value={tikTitle}
          onChange={handleTikTitle}
          size='40'
        />
        <br/><br/>

        Give your ticket a category:<br/>
        (Examples: JavaScript, React, CSS, Redux)<br/>
        <input
          type='text'
          name='ticket category'
          value={tikCateg}
          onChange={handleTikCateg}
          size='40'
        />
        <br/><br/>

        Describe the problem you are having:<br/>
        <textarea
          type='text'
          name='ticket description'
          value={tikDes}
          onChange={handleTikDes}
          rows="8"
          cols="32"
        />
        <br/><br/>

        Describe what you have tried to fix the problem:<br/>
        <textarea
          type='text'
          name='tried'
          value={tried}
          onChange={handleTried}
          rows='8'
          cols='32'
        />
        <br/><br/>

        <button className='studentTicketBttn'>Submit</button>
      </form>

      <button onClick={cancelHandle} className="studentTicketBttn">
        Cancel
      </button>

      <p>{newMessage}</p>
    </div>
  )
}

export default TicketCreator;