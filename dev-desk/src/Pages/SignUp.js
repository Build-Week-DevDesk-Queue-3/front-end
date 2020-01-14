import React from 'react';
import axios from 'axios';

import {
  ContainerWrap, PageHeader, ImageContent, FormLabel,
  StyledImg, StyledFooter, FormWrapper, FormGroup, FormInput
} from '../Components/Styles';

import {Radio, Button} from 'antd';
import registerImg from '../SVG/register.svg';

export class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this)
  }
  
  state = {
    username: " ",
    password: " ",
    message: " "
  };
  
  handleChange = e => {
    this.setState({[e.target.name]: e.target.value});
  };
  
  register = e => {
    e.preventDefault();
    
    axios
      .post('https://dev-desk-que-3-bw.herokuapp.com/api/user/register', {
        username: this.state.username,
        password: this.state.password
      })
      
      .then(res => {
        this.setState({message: 'Thank you for registering!'});
        setTimeout(() => {window.location='/studentLogin'}, 2000);
      })
      
      .catch(err => console.log(err))
  }
  
  render() {
    return (
      <ContainerWrap ref={this.props.containerRef}>
        <PageHeader>Dev Desk SignUp</PageHeader>
        
        <ImageContent>
          <StyledImg src={registerImg} alt="Please Register"/>
        </ImageContent>
        
        <FormWrapper>
          <FormGroup>
            <FormLabel htmlFor="username">Username</FormLabel>
            
            <FormInput
              type="text"
              name="username"
              placeholder="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </FormGroup>
          
          <FormGroup>
            <FormLabel htmlFor="password">Password</FormLabel>
            
            <FormInput
              type="password"
              name="password"
              placeholder="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </FormGroup>
          
          <FormGroup>
            <Radio.Group
              name="role"
              defaultValue={1}
              onChange={this.handleChange}
            />
            
            <Radio value={1}>I am a Student</Radio>
            <Radio value={2}>I am a Helper</Radio>
          </FormGroup>
        </FormWrapper>
        
        <StyledFooter>
          <Button
            type="primary"
            htmlType="submit"
            className="signup-form-button"
            onClick={this.register}
            style={{
              background: "#2F6627",
              border: "none",
              margin: "0"
            }}
          >
            Register
          </Button>
          
          <p>{this.state.message}</p>
        </StyledFooter>
      </ContainerWrap>
    )
  }
}

export default SignUp;