import { Form, Input, Button, Switch, Row, Col, Divider, InputNumber, Space } from 'antd'

export default function OmegaConfigBackup() {
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
          <General />
          <Backup />
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

function General() {
  return (
    <>
      <Divider>Bacup Settings</Divider>
      <Form.Item label="Backup path" name="backupPath" required>
        <Input placeholder="Where to save backups (Keeping the default configuration is recommended)" />
      </Form.Item>
      <Form.Item label="Scheduled backup interval" name="ackupInterval" required>
        <InputNumber
          placeholder="Interval (in seconds) in which to create backups (Dont go lower then 3600 seconds)"
          style={{ width: '100%' }}
        />
      </Form.Item>
      <Form.Item label="Keep time" name="keepTime">
        <InputNumber placeholder="For how many days backups are being kept" style={{ width: '100%' }} />
      </Form.Item>
      <Row gutter={16}>
        <Col className="gutter-row" span={16}>
          <Form.Item label="Startup backup" name="startupBackup" valuePropName="checked">
            <Switch checkedChildren="ON" unCheckedChildren="OFF" checked />
          </Form.Item>
        </Col>
        <Col className="gutter-row" span={16}>
          <Form.Item label="Scheduled backups" name="scheduledBackup" valuePropName="checked">
            <Switch checkedChildren="ON" unCheckedChildren="OFF" checked />
          </Form.Item>
        </Col>
      </Row>
    </>
  )
}

function Backup() {
  return (
    <>
      <Divider>Bacup Settings</Divider>
      <Form.Item label="Backup path" name="backupPath" required>
        <Input placeholder="Where to save backups (Keeping the default configuration is recommended)" />
      </Form.Item>
      <Form.Item label="Scheduled backup interval" name="ackupInterval" required>
        <InputNumber
          placeholder="Interval (in seconds) in which to create backups (Dont go lower then 3600 seconds)"
          style={{ width: '100%' }}
        />
      </Form.Item>
      <Form.Item label="Keep time" name="keepTime">
        <InputNumber placeholder="For how many days backups are being kept" style={{ width: '100%' }} />
      </Form.Item>
      <Row gutter={16}>
        <Col className="gutter-row" span={16}>
          <Form.Item label="Startup backup" name="startupBackup" valuePropName="checked">
            <Switch checkedChildren="ON" unCheckedChildren="OFF" checked />
          </Form.Item>
        </Col>
        <Col className="gutter-row" span={16}>
          <Form.Item label="Scheduled backups" name="scheduledBackup" valuePropName="checked">
            <Switch checkedChildren="ON" unCheckedChildren="OFF" checked />
          </Form.Item>
        </Col>
      </Row>
    </>
  )
}
