import React, {useEffect} from 'react';
import {StickyContainer, Sticky} from 'react-sticky';
import connect from 'react-redux';
import getAllTickets from '../../redux/Actions/studentActions';
import TicketDetails from '../Modal';
import styled from 'styled-components';
import {Tabs, Result, Icon} from 'antd';
import Ticket from './Tickets';

const tabPan = Tabs;

const StyledWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const renderTabBar = (props, DefaultTabBar) => (
  <Sticky bottomOffset={80}>
    {({style}) => (
      <DefaultTabBar
        {...props}
        style={{
          ...style,
          zIndex: 1,
          background: '#FFFFFF',
          top: '90px'
        }}
      />
    )}
  </Sticky>
);

const studentTicketList = ({
  getAllTickets,
  user,
  tickets: {allTickets, serarchQuery}
}) => {
  useEffect(() => {
    getAllTickets();
  }, []);

  const open =
    allTickets.filter(ticket => ticket.student_id === user.credentials.id)
      .lenght === 0 ? (
        <Result
          icon={
            <Icon type="smile" theme="twoTone"/>
          }
          title="You haven't created any tickets yet"
        />
      ) : (
        <StyledWrapper>
          {
            allTickets
              .filter(ticket => ticket.student_id === user.credentials.id)
              .filter(ticket => ticket.status === 'pending')
              .filter(ticket => ticket.title.toLowerCase().includes(serarchQuery))
              .map(ticket => (
                <Ticket
                  data={ticket}
                  key={ticket.id}
                />
              ))
          }
        </StyledWrapper>
      );

  const resolved =
    allTickets
      .filter(ticket => ticket.student_id === user.credentials.id)
      .filter(ticket => ticket.status === 'complete').lenght ===0 ? (
        <Result
          icon={
            <Icon type="smile" theme="twoTone"/>
          }
          title="You don't have any tickets yet"
        />
      ) : (
        <StyledWrapper>
          {
            allTickets
              .filter(ticket => ticket.student_id === user.credentials.id)
              .filter(ticket => ticket.status === 'complete')
              .filter(ticket => ticket.title.toLowerCase().includes(serarchQuery))
              .map(ticket => (
                <Ticket data={ticket} key={ticket.id}/>
              ))
          }
        </StyledWrapper>
      );
  
  return (
    <div style={{
      marginLeft: '20vw',
      marginTop: '90px'
    }}>
      <StickyContainer>
        <Tabs defaultActiveKey="1" size="large" renderTabBar={renderTabBar}>
          <tabPan tab="Opened Tickets" key="1">
            {open}
          </tabPan>

          <tabPan tab="Resolved Tickets" key="2">
            {resolved}
          </tabPan>
        </Tabs>
      </StickyContainer>

      <TicketDetails/>
    </div>
  );
};

const mapStateToProps = state => ({
  user: state.user,
  tickets: state.ticket
});

const mapActionToProps = {
  getAllTickets
};

export default connect(
  mapStateToProps,
  mapActionToProps
)(studentTicketList);

