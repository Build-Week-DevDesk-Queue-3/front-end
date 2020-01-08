import React from "react";
import loginImg from "../../src/signIn.svg";

export class studentLogin extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Student Login</div>
        
        <div className="content">
          <div className="image">
            <img src={loginImg} alt="Student Login"/>
          </div>
          
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="username"/>
            </div>
            
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="text" name="password" placeholder="password"/>
            </div>
          </div>
        </div>
        
        <div className="footer">
          <button type="button" className="btn">
            Login
          </button>
        </div>
      </div>
    );
  }
}

export default studentLogin