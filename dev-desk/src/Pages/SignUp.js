import React from 'react';
import axios from 'axios';
import {withRouter} from 'react-router';
import {ContainerWrap, PageHeader, ImageContent, StyledImg, FormWrapper, FormGroup, FormLabel, FormInput} from '../Components/Styles';
import {Radio, Button, Icon} from 'antd';
import registerImg from '../../src/SVG/register.svg';


export class SignUp extends React.Component {
  constructor(props) {
    super(props);
  }
  
  state = {
    username: '',
    password: '',
    message:'',
    email: ''
  } 

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value})    
  }
  
  handleRegisterClick(register) {
    this.props.history.push('/studentDashboard')
  }

  register = e => {
    e.preventDefault();
    
    axios
      .post('https://dev-desk-que-3-bw.herokuapp.com/api/user/register', {
        username: this.state.username,
        password: this.state.password
      })
      .then(res => {
        this.setState(res.message);
        setTimeout(() => {window.location='/studentLogin'}, 2000)
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
            <FormLabel>Email</FormLabel>
            
            <FormInput
              type="text"
              name="email"
              password="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          
          <FormGroup>
            <FormLabel>Password</FormLabel>
            
            <FormInput
              type="text"
              name="password"
              placeholder="password"
              value={this.state.password}
              onChange={this.handleChange}
              prefix={
                <Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>
              }
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
          
          <FormGroup>
            <Button
              type="primary"
              htmlType="submit"
              className="signup-form-button"
              style={{bacckground: '#2F6627', border: 'none', margin: '0'}}
            >
              Register
            </Button>
          </FormGroup>
        </FormWrapper>
      </ContainerWrap>    
    );
  }
}

export default withRouter(SignUp)