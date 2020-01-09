import React, {useState, useEffect} from 'react';
import {axiosWithAuth} from './axiosWithAuth';

function CreateTicket() {
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [attempted, setAttempted] = useState('');

    const handleChange = e => {
        
    }

    const handleSubmit = e => {
        e.preventDefault();

        axiosWithAuth()
            .post('/ticket' , {
                title: title,
                category: category,
                description: description,
                attempted: attempted
            })
            .then(res => console.log(res.message))
            .catch(err => console.log(err.message));
    }

    const handleCancel = e => {
        window.location='/helper'
    }

    return(
        <div>
            <h1>Ticket Form</h1>
            <form onSubmit={handleSubmit}>
                Give your ticket a title:<br/>
                <input
                    type='text'
                    name='title'
                    value={title}
                    onChange={handleChange}
                />
                <br/>
                Give your ticket a category:<br/>
                (Examples: JavaScript, React, CSS)<br/>
                <input
                    type='text'
                    name='category'
                    value={category}
                    onChange={handleChange}
                />
                <br/>
                Describe the problem you are having:<br/>
                <input
                    type='text'
                    name='description'
                    value={description}
                    onChange={handleChange}
                />
                <br/>
                Describe what you have attempted so far:<br/>
                <input
                    type='text'
                    name='attempted'
                    value={attempted}
                    onChange={handleChange}
                />
                <br/>
                <button>Submit</button>
            </form>
            <button onClick={handleCancel}>Cancel</button>
        </div>
    )
}

export default CreateTicket