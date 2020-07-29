import React, { useContext, useEffect, useState, } from 'react';

import { Layout, Spin, Form, Input, Button, Divider, Select, Switch, Icon, Typography, Alert, Row, Col, message } from 'antd';

const { Content, Header } = Layout;
const { Item } = Form;
const { Text, Title, Paragraph } = Typography;


function CreateTokenSymbol({ Form, formItemLayout, formSymbolValue, setFormSymbolValue, reserveSymbol }) {
  return (
    <div className="container d-flex justify-content-center">

      <Form colon={false} style={{ maxWidth: 600 }} {...formItemLayout}>
        <Title level={2} style={{ margin: 25 }}>Reserve Your Token Symbol</Title>
        <Paragraph style={{ margin: 25 }}>Reservation ensures that no other organization can create a token symbol identical to yours using the Polymath platform. This operation carries a cost of: 250 POLY.</Paragraph>
        <Item name="symbol"
          label="Symbol">
          <Input
            placeholder="SYMBOL"
            value={formSymbolValue}
            onChange={({ target: { value } }) => {
              const pattern = RegExp('^[a-zA-Z0-9_-]*$')
              if (pattern.test(value) && value.length <= 10) {
                setFormSymbolValue(value.toUpperCase())
              }
            }}
          />
        </Item>
        <Button className="" type="primary" style={{ width: '100%' }} onClick={reserveSymbol}>Reserve Symbol</Button>
      </Form>

    </div>
  );
}

export default CreateTokenSymbol;
