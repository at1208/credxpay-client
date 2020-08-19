import React, {Fragment } from 'react';
import {Stack,Input } from "@chakra-ui/core";

const Pay = () => {
  return <Fragment>
             <div className="container card dk-pay-outer-container">
              <Stack spacing={3}>
               <Input placeholder="Beneficiary name" size="md" />
               <Input placeholder="Beneficiary account no" size="md" />
               <Input placeholder="Confirm account no" size="md" />
               <Input placeholder="IFSC code" size="md" />
               <Input placeholder="Amount" size="md" />
               <Input placeholder="Purpose" size="md" />
             </Stack>
             </div>
         </Fragment>
}

export default Pay;
