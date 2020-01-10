import React from 'react';
import {Modal, Button, Tag, Select} from 'antd';
import moment from 'moment';
import connect from 'react-redux';
import closeTicket from '../redux/Actions/studentActions';

const Option = Select;

const TicketDetails = ({
  tickets,
  closeTicket,
  user: {
    credentials: {role, id}
  }
}) => {
  const handleCancel = () => {
    closeTicket();
  };

  return (
    <div>
      <Modal
        title={tickets.selectedTicket.title}
        visable={tickets.showModal}
        onCancel={handleCancel}
        footer={[
          <Button key="back" type="primary" onClick={handleCancel}>
            Back
          </Button>
        ]}
      >
        <p>
          Created:
          {
            moment(
              moment(
                data.created_at,
                'YYYYMMDD, h:mm:ss a'
              ))
              .add(1, 'hours')
              .fromNow()
          }
        </p>

        <Tag color="1F2041">
          {tickets.selectedTicket.status}
        </Tag>
      </Modal>
    </div>
  );
};

const mapStateToProps = state => ({
  tickets: state.ticket,
  user: state.user
});

const mapActionToProps = {
  closeTicket
};

export default connect(
  mapStateToProps,
  mapActionToProps
)(TicketDetails);