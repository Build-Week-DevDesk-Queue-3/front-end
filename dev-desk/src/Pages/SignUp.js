import React from 'react';
import axios from 'axios';

import {withRouter} from 'react-router';
import {
  ContainerWrap, PageHeader, ImageContent, FormLabel,
  StyledImg, FormWrapper, FormGroup, FormInput
} from '../Components/Styles';

import {Radio, Button, Icon} from 'antd';
import registerImg from '../SVG/register.svg';

export class SignUp extends React.Component {
  constructor(props) {
    super(props);
  }
  
  state = {
    username: " ",
    password: " ",
    message: " ",
    email: " "
  };
  
  handleChange = e => {
    this.setState({[e.target.name]: e.target.value});
  };
  
  
}