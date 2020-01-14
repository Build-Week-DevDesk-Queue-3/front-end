import React from 'react';
import axios from 'axios';

import {
  ContainerWrap, PageHeader, ImageContent, FormLabel, BttnRegister,
  StyledImg, StyledFooter, FormWrapper, FormGroup, FormInput
} from '../Components/Styles';
import RadioBttn from '../Components/radio';

import {Icon} from 'antd';
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
              prefix={
                <Icon
                  type="lock"
                  style={{color: "rgba(0,0,0,.25"}}
                />
              }
            />
          </FormGroup>
          
          <FormGroup>
            <RadioBttn/>
          </FormGroup>
        </FormWrapper>
        
        <StyledFooter>
          <BttnRegister
            type="primary"
            htmlType="submit"
            className="signup-form-button"
            onClick={this.register}
          >
            Register
          </BttnRegister>          
          
          <p>{this.state.message}</p>
        </StyledFooter>
      </ContainerWrap>
    )
  }
}

export default SignUp;