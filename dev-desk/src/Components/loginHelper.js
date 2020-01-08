import React from 'react';
import helperImg from '../../src/askMe.svg';
import axios from 'axios';

class LoginHelper extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
        }
    };

    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        })
    };

    login = e => {
        e.preventDefault();

        axios
            .post('#', this.state.credentials)
            .then(res => {
                localStorage.setItem('token', res.data.payload);
                this.props.history.push('#');
            })
            .catch(err => console.log(err.message))
    };

    render(){
        return(
            <div>
                <h1>Helper Log In Page</h1>
                
                <div className='content'>
                    <div className='image'>
                        <img src={helperImg} alt='Helper'/>
                    </div>
                </div>
                <form onSubmit={this.login}>
                    <input
                        type='text'
                        name='username'
                        value={this.state.credentials.username}
                        onChange={this.handleChange}
                        placeholder='User Name'
                    />
                    <input
                        type='password'
                        name='password'
                        value={this.state.credentials.password}
                        onChange={this.handleChange}
                        placeholder='Password'
                    />
                    <button>Log In</button>
                </form>
            </div>
        );
    };
};

export default LoginHelper