import React from 'react';
import registerImg from '../../src/SVG/register.svg';

export class studentRegister extends React.Component {
  constructor(props) {
    super(props);
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
            <label htmlFor="username">Username</label>
            <input type="text" name="username" placeholder="username"/>
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" placeholder="email"/>
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="text" name="password" placeholder="password"/>
          </div>
        </div>
        
        <div className="footer">
          <button type="button" className="btn">
            Register
          </button>
        </div>
      </div>
    );
  }
}

export default studentRegister