import React from 'react';
import axios from 'axios';
import registerImg from '../../src/SVG/register.svg';

export class studentRegister extends React.Component {
  state = {
    username: '',
    password: '',
    message:''
  } 

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value})    
  }

  register = e => {
    e.preventDefault();

    axios
      .post('/user/register', {
        username: this.username,
        password: this.password
      })
      .then(res => {
        this.setState(res.message);
        setTimeout(() => {window.location='/studentLogin'}, 2000)
      })
  }

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Student Register</div>
        
        <div className="content">
          <div className="image">
            <img src={registerImg} alt="Please Register"/>
          </div>
        </div>
        
        <div className="form">
          <div className="form-group">
            <label htmlFor="username">Username </label>
            <input 
              type="text" 
              name="username" 
              placeholder="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </div>
                    
          <div className="form-group">
            <label htmlFor="password">Password </label>
            <input 
              type="password" 
              name="password" 
              placeholder="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>
        </div>
        
        <div className="footer">
          <button type="button" className="btn" onClick={this.register}>
            Register
          </button>
        </div>
        <p>{this.message}</p>
      </div>
    );
  }
}

export default studentRegister