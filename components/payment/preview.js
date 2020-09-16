import { Modal, Button } from 'antd';
import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';

const Preview  = ({ data, proceed, modal, paynow }) => {
const [visible, setVisible] = useState(false)
const showModal = () => {
   proceed()
   setVisible(modal)
  };

  const handleOk = e => {
    setVisible(false)
    paynow()
  };

  const handleCancel = e => {
   setVisible(false)
  };

  return (
    <>
      <Button  className="ptp-btn" onClick={showModal} block>
        Proceed to pay
      </Button>
      <Modal
        title="CREDxpay"
        okText="Pay now"
        visible={visible}
        variant="outlined"
        onOk={handleOk}
        onCancel={handleCancel}
      >

      <form className="pay-now-form">
      <TextField
      className="pay-now-field"
      variant="outlined"
      fullWidth
      disabled={true}
      value={data.beneficiary_name}
      label="Beneficiary name"
      size="small"
     />

      <TextField
      className="pay-now-field"
      fullWidth
      value={data.beneficiary_account}
      variant="outlined"
      disabled={true}
      label="Beneficiary Account number"
      type="number"
      size="small"
     />

      <TextField
      className="pay-now-field"
      fullWidth
      disabled={true}
      value={data.ifsc_code}
      variant="outlined"
      label="IFSC"
      size="small"
     />

      <TextField
      className="pay-now-field"
      fullWidth
      disabled={true}
      value={data.amount}
      variant="outlined"
      type="Number"
      label="₹ Amount"
      size="small"
     />

      <TextField
      className="pay-now-field"
      fullWidth
      disabled={true}
      variant="outlined"
      value={data.purpose}
      label="Purpose"
      size="small"
      />
      </form>


      </Modal>
    </>
  );
}

export default Preview;
