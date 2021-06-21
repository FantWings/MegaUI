import { Button, Divider, Space } from 'antd'

export default function ServerAction() {
  return (
    <div style={{ margin: '22px', backgroundColor: '#FFF', padding: '22px' }}>
      <Divider orientation="left">Action</Divider>
      <Space direction="vertical" style={{ width: '100%' }}>
        <Button type="default" block danger>
          Shutdown
        </Button>
        <Button type="default" block>
          Restart internal modserver
        </Button>

        <Divider orientation="left">Backups</Divider>
        <Button type="default" block>
          Create persistence backup
        </Button>
        <Button type="default" block>
          Create full backup
        </Button>

        <Divider orientation="left">Tools</Divider>
        <Button type="default" block>
          Verify files
        </Button>
        <Divider orientation="left">Server</Divider>
        <Button type="primary" block>
          Copy server
        </Button>
        <Button type="primary" block danger>
          Delete Server
        </Button>
      </Space>
    </div>
  )
}
