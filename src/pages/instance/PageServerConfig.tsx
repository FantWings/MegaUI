import { Form, Input, Button, Switch, Row, Col, Divider, InputNumber, Space } from 'antd'
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons'

export default function ServerConfig() {
  const [form] = Form.useForm()
  return (
    <div style={{ margin: '22px', backgroundColor: '#FFF', padding: '22px' }}>
      <Form
        layout="vertical"
        form={form}
        onFinish={(values: any) => {
          console.log(values)
        }}
      >
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          <FormGroup />
          <SwitchGroup />
          <DymicFormGroup />
          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Submit
            </Button>
          </Form.Item>
        </Space>
      </Form>
    </div>
  )
}

function FormGroup() {
  return (
    <>
      <Form.Item label="Hostname" name="hostname" required>
        <Input placeholder="Server hostname (max. 64 characters)" />
      </Form.Item>
      <Form.Item label="Slots" name="slots" required>
        <InputNumber
          placeholder="How many players can play on your server (1-127)"
          min={1}
          max={127}
          style={{ width: '100%' }}
        />
      </Form.Item>
      <Form.Item label="Game password" name="password">
        <Input placeholder="This password is used to join your gameserver and will be needed on every connect" />
      </Form.Item>
      <Form.Item label="Ingame admin password" name="adminpassowrd">
        <Input placeholder="This password is used to login as ingame admin" />
      </Form.Item>
      <Form.Item label="Server time" name="servertime" required>
        <Input placeholder="Server time on startup (YYYY/MM/DD/HH/MM format or SystemTime)" />
      </Form.Item>
      <Form.Item label="Mission" name="mission" required>
        <Input placeholder="Mission to load" />
      </Form.Item>
      <Form.Item label="Time acceleration" name="timeacc" required>
        <Input placeholder="1 minute in real life equals X minutes in-game" />
      </Form.Item>
      <Form.Item label="Night acceleration" name="nightacc" required>
        <Input placeholder="1 minute in real life equals X minutes in-game (also accelerated by normal time accelleration)" />
      </Form.Item>
    </>
  )
}

function SwitchGroup() {
  return (
    <>
      <Row gutter={16}>
        <Col className="gutter-row" span={6}>
          <Form.Item label="Time persistence" name="timePersistence" valuePropName="checked">
            <Switch checkedChildren="ON" unCheckedChildren="OFF" checked />
          </Form.Item>
        </Col>
        <Col className="gutter-row" span={6}>
          <Form.Item label="3rd person perspective" name="perspective" valuePropName="checked">
            <Switch checkedChildren="ON" unCheckedChildren="OFF" checked />
          </Form.Item>
        </Col>
        <Col className="gutter-row" span={6}>
          <Form.Item label="Crosshair" name="crosshair" valuePropName="checked">
            <Switch checkedChildren="ON" unCheckedChildren="OFF" checked />
          </Form.Item>
        </Col>
        <Col className="gutter-row" span={6}>
          <Form.Item label="VoIP (Voice chat)" name="voIP" valuePropName="checked">
            <Switch checkedChildren="ON" unCheckedChildren="OFF" checked />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col className="gutter-row" span={6}>
          <Form.Item label="Save building states (Doors etc.)" name="saveStates" valuePropName="checked">
            <Switch checkedChildren="ON" unCheckedChildren="OFF" checked />
          </Form.Item>
        </Col>
        <Col className="gutter-row" span={6}>
          <Form.Item label="Storage auto fix" name="storgeAutoFix" valuePropName="checked">
            <Switch checkedChildren="ON" unCheckedChildren="OFF" checked />
          </Form.Item>
        </Col>
        <Col className="gutter-row" span={6}>
          <Form.Item label="Debug monitor" name="debug" valuePropName="checked">
            <Switch checkedChildren="ON" unCheckedChildren="OFF" checked />
          </Form.Item>
        </Col>
        <Col className="gutter-row" span={6}>
          <Form.Item label="Force same game version" name="forceGameVersion" valuePropName="checked">
            <Switch checkedChildren="ON" unCheckedChildren="OFF" checked />
          </Form.Item>
        </Col>
      </Row>
    </>
  )
}

function DymicFormGroup() {
  return (
    <>
      <Divider orientation="center">Custom serverDZ variable</Divider>
      <Form.List name="customVariable">
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name, fieldKey, ...restField }) => (
              <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
                <Form.Item
                  {...restField}
                  name={[name, 'first']}
                  fieldKey={[fieldKey, 'first']}
                  rules={[{ required: true, message: 'Missing Key' }]}
                >
                  <Input placeholder="Key" />
                </Form.Item>
                <Form.Item
                  {...restField}
                  name={[name, 'last']}
                  fieldKey={[fieldKey, 'last']}
                  rules={[{ required: true, message: 'Missing Value' }]}
                >
                  <Input placeholder="Value" />
                </Form.Item>
                <MinusCircleOutlined onClick={() => remove(name)} />
              </Space>
            ))}
            <Form.Item>
              <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                Add field
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
    </>
  )
}
