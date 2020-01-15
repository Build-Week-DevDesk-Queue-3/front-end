import React from 'react';
import {Radio} from 'antd';

class RadioBttn extends React.Component {
  constructor() {
    super();
    this.state={
      value: '1'
    };
  }

  onChange = e => {
    console.log('radio checked', e.target.value);
    this.state({
      value: e.target.value,
    });
  };

  render() {
    const radioStyle = {
      display: 'block',
      height: '30px',
      lineHeight: '30px',
    };

    return (
      <Radio.Group
        name="role"
        defaultValue={1}
        onChange={this.onChange}
        value={this.state.value}
      >
        <Radio
          style={radioStyle} 
          value={1}
        >
          I am a Student
        </Radio>

        <Radio
          style={radioStyle}
          value={2}
        >
          I am a Helper
        </Radio>
      </Radio.Group>
    )
  }
}

export default RadioBttn;