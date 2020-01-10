import React from 'react';
import connect from 'react-redux';
import {Layout, Menu} from 'antd';
import Profile from './Profile';
import Header from './Header';
import Footer from './Footer';
import createTicket from '../../redux/Actions/studentActions';

const Sider = Layout;

export const SideBar = ({createTicket}) => {
  return (
    <div>
      <Sider>
        
      </Sider>
    </div>
  )
}