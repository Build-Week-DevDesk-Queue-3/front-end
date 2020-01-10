import React from 'react';
import moment from 'moment';
import connect from 'react-redux';
import viewTicket from '../../redux/Actions/studentActions';
import styled from 'styled-components';
import Tag from 'antd';

const StyledDiv = styled.div`
  width: 225px;
  height: 250px;
  background: #F61067;
  border: 1px solid #5E239D;
  border-radius: 5px;
  transition: 0.3s transform;
  cursor: pointer;
  margin: 15px;
  padding: 20px;

  &:hover {
    transform: scale(1.1);
  }
`;

const Ticket = ({
  data,
  viewTicket,
  user: {
    credentials: {id, role}
  }
}) => {
  const handleClick = () => {
    viewTicket(data.id);
  };

  return(
    <StyledDiv onClick={handleClick}>
      <h1>{data.title}</h1>

      <p>
        {data.description.length > 30
          ? `${data.description.substring(0, 30)} ... `
          : data.description
        }
      </p>

      <p>
        Created : {' '}
        {
          moment(
            moment(
              data.created_at, 
              'YYYYMMDD, h:mm:ss a'))
            .add(1, 'hours')
            .fromNow()
        }
      </p>

      <Tag color="#1F2041">
        {data.status}
      </Tag>      
    </StyledDiv>
  );
};

const mapStateToProps = state => ({
  user: state.user,
  tickets: state.ticket
});

const mapActionToProps = {
  viewTicket
};

export default connect(
  mapStateToProps,
  mapActionToProps
)(Ticket);