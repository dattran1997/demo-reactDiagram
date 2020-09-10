import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Modal, Button, Typography } from 'antd';
import { NodeDataForm } from './NodeDataForm';
const { Title } = Typography;

export const NodeDataModel = (props) => {

  const [ModalText, setModalText] = useState('Content of the modal');
  const [visible, setVisible] = useState(true);
  const [confirmLoading, setconfirmLoading] = useState(false);
  const [serviceFromData, setServiceFormData] = useState({});

  const showModal = () => {
    console.log('show !!')
    setVisible(true);
  };

  const handleOk = () => {
    setModalText('The modal will be closed after two seconds');
    setconfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setconfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log('Clicked cancel button');
    setVisible(false);
  };

  const getServiceForm = (serviceData) => {
    setServiceFormData(serviceData);
    props.changeServiceData(serviceData);
    console.log(serviceData);
    // handleOk();
    props.handleFormClose();
  }

  return (
    <>
      <Button type="primary" onClick={() => showModal()}>
        Open Modal with async logic
      </Button>
      <Modal
        visible={props.visible}
        onOk={() => props.handleFormOpen()}
        confirmLoading={confirmLoading}
        onCancel={() => props.handleFormClose()}
        footer={null}
      >
        <p>{ModalText}</p>
        <Title level={3}>Service Info</Title>
        <NodeDataForm getServiceForm={getServiceForm} handleCancel={props.handleFormClose} />
      </Modal>
    </>
  );
}
