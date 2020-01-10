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
        <div className="logo"/>
        
        <Menu
         mode="inline"
         defaultSelectedKeys={['1']}
         style={{
           height: '100vh',
           width: '20vw',
           background: '#1F2041',
           position: 'fixed',
           boxShadow: '1px 1px 1px 1px #1F2041',
           border: 'none'
         }}
        >
          <Header/>
          <Profile/>
          <Footer/>        
        </Menu>
      </Sider>
    </div>
  );
};

const mapStateToProps = state => state.user;
const mapActionsToProps = {
  createTicket
};

export default connect(
  mapStateToProps,
  mapActionsToProps  
)(SideBar);