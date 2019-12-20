import React from 'react';
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
            .post('https://dev-desk-que-3-bw.herokuapp.com/api/helper', this.state.credentials)
            .then(res => {
                localStorage.setItem('token', res.data.payload);
                localStorage.setItem('id', res.data.id)
                this.props.history.push('/helper');
            })
            .catch(err => console.log(err.message))
    };

    render(){
        return(
            <div>
                <h1>Helper Log In Page</h1>
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