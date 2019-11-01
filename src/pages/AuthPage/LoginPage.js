import React from 'react'
import { Row, Col, Card, Form, Icon, Input, Button, Alert, Checkbox } from 'antd'

import logoUrl from '../../assets/logo-pfalfa.svg'
import { store, decrypt } from '../../utils'

const LoginPage = props => {
  const { form, loading, error, onSubmit } = props
  const { getFieldDecorator } = form
  const alias = decrypt(store.get('alias'))
  const passphare = decrypt(store.get('passphare'))

  const handleSubmit = e => {
    e.preventDefault()
    props.form.validateFields((err, values) => {
      if (!err) {
        onSubmit(values)
      }
    })
  }

  return (
    <Row justify="center" className="login-background">
      <Col xs={{ span: 12, offset: 6 }} lg={{ span: 24, offset: 9 }} className="login">
        <Card title={<img alt="logo" src={logoUrl} style={{ height: '50px' }} />} className="login-card">
          <Form onSubmit={handleSubmit}>
            <Form.Item>
              {getFieldDecorator('alias', {
                initialValue: alias || 'user@email.com',
                rules: [{ required: true, message: 'Please input Your email!' }],
              })(<Input placeholder="Email" prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} />)}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('passphare', {
                initialValue: passphare || 'Sample Passphare',
                rules: [{ required: true, message: 'Please input Your passphare!' }],
              })(<Input placeholder="Passphare" prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} />)}
            </Form.Item>

            {error && <Alert message="Error" description={props.message} type="error" closable />}

            <Form.Item>
              {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true,
              })(<Checkbox>Remember me</Checkbox>)}

              <Button type="primary" loading={loading} htmlType="submit" className="login-form-button">
                Log in
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Col>
    </Row>
  )
}

export default Form.create()(LoginPage)
