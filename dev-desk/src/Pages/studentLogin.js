import React from "react";
import axios from 'axios';

import {
  ContainerWrap, PageHeader, ImageContent, FormLabel, BttnLogin,
  StyledImg, StyledFooter, FormWrapper, FormGroup, FormInput
} from '../Components/Styles';

import {Icon, Form, Checkbox} from 'antd';
import loginImg from '../Images/signIn.svg';

class studentLogin extends React.Component {
  constructor() {
    super();
    this.state={
      credentials: {
        username: '',
        password: '',
      },
      failLogin: false
    };
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
      .post('https://dev-desk-que-3-bw.herokuapp.com/api/user/login', this.state.credentials)

      .then(res => {
        console.log(res);
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('id', res.data.data[0].id);
        localStorage.setItem('name', res.data.data[0].username);
        this.props.history.push('/studentDashboard');
      })
      
      .catch(err => {
        console.log(err.message);
        this.setState({failLogin: true});
      })    
  }; 
  
  render() {
    return (
      <ContainerWrap ref={this.props.containerRef}>
        <PageHeader>Please Login Below</PageHeader>
        
        <ImageContent>
          <StyledImg src={loginImg} alt='Student Login'/>
        </ImageContent>
        
        <FormWrapper>
          <FormGroup onSubmit={this.login}>
            <FormInput
              type='text'
              name='username'
              placeholder='username'
              value={this.state.credentials.username}
              onChange={this.handleChange}
            />
            
            <FormInput
              type='password'
              name='password'
              placeholder='password'
              value={this.state.credentials.password}
              onChange={this.handleChange}
              prefix={
                <Icon
                  type='lock'
                  style={{color: 'rgba(0,0,0,.25)'}}
                />
              }
            />        
          </FormGroup>
          
          <FormGroup>
            <Form.Item>
              <Checkbox>
                Remember me
              </Checkbox>          
            </Form.Item>
          </FormGroup>
        </FormWrapper>
        
        <StyledFooter>
          <BttnLogin
            type='primary'
            htmlType='submit'
            className='login-form-button'
            onClick={this.login}
          >
            Login
          </BttnLogin>
          
          Or <a href='./SignUp'>register now!</a>
        </StyledFooter>
      </ContainerWrap>
    )
  }  
}; 
   
export default studentLogin;