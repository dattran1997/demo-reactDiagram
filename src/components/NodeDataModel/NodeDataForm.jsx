import React from 'react';
import { Form, Input, Button, Select } from 'antd';
const { Option } = Select;

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not validate email!',
    number: '${label} is not a validate number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};


export const NodeDataForm = (props) => {
  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <Form {...layout} name="nest-messages" onFinish={(value) => props.getServiceForm(value)} validateMessages={validateMessages}>
      <Form.Item
        name={['service', 'name']}
        label="Name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={['service', 'uri']}
        label="Uri"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={['service', 'protocolType']}
        label='Protocol type'
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Select
          showSearch
          style={{ width: 200 }}
          placeholder="Select a person"
          optionFilterProp="children"
          // onChange={onChange}
          // onFocus={onFocus}
          // onBlur={onBlur}
          // onSearch={onSearch}
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
        >
          <Option value="http">http</Option>
          <Option value="https">https</Option>
          <Option value="mongodb">mongodb</Option>
          <Option value="amqp">amqp</Option>
          <Option value="ws">ws</Option>
          <Option value="wss">wss</Option>
        </Select>
      </Form.Item>
      <Form.Item name={['service', 'linkDoc']} label="Link doc">
        <Input />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="default" style={{marginRight: '6px'}} onClick={() => props.handleCancel()} >
          Cancel
        </Button>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};