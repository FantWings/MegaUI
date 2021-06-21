import { useState } from 'react'
import { PageHeader, List, Tag, message, Popconfirm, Button, Progress } from 'antd'
import styled from 'styled-components'
import { useEffect } from 'react'
import { useHistory } from 'react-router'

// use interface
// import { instanceList } from '../utils/interfaces'

// use API
import { InstanceAPI } from 'src/utils/api'

// mockData
import { instanceListMock } from '../mock/instanceList'

export default function InstencePage() {
  const [data, setData] = useState([
    {
      title: 'My Dayz Community Server',
      status: 0,
      pid: 1000,
      gameport: 2302,
      queryport: 27016,
      version: '1.12.153904',
      players: 4,
      slots: 30,
    },
  ])
  const history = useHistory()

  useEffect(() => {
    const { getInstanceList } = InstanceAPI()
    getInstanceList().then((data) => setData(data))
  }, [])

  return (
    <>
      <PageHeader className="site-page-header" title="Instence" subTitle="Instence List" />
      <Container>
        <List
          itemLayout="horizontal"
          dataSource={instanceListMock}
          renderItem={(item) => (
            <List.Item actions={ServerAction(item.status)}>
              <List.Item.Meta
                title={
                  <a
                    onClick={() => {
                      history.push(`/admin/instance/${item.pid}`)
                    }}
                    href={undefined}
                  >
                    {item.status ? <Tag color="green">running</Tag> : <Tag color="red">stopped</Tag>}
                    {item.title}
                  </a>
                }
                description={`PID:${item.pid} - GamePort: ${item.gameport} - QueryPort: ${item.queryport}`}
              />
              <div className="onlineStatus">
                <div className="playerCounter">
                  <span>
                    {item.players} / {item.slots}
                  </span>
                  <span>{item.status ? 'Online Players ' : 'Offline'}</span>
                </div>
                <Progress
                  percent={Math.round((item.players / item.slots) * 100)}
                  size="small"
                  strokeColor={Math.round((item.players / item.slots) * 100) >= 80 ? '#ff1818' : undefined}
                />
              </div>
            </List.Item>
          )}
        />
      </Container>
    </>
  )
}

function ServerAction(statusCode: number) {
  const handleStartServer = async () => {
    message.info('Start Server Action')
  }
  const handleStopServer = async () => {
    message.info('Stop Server Action')
  }
  const handleDeleteServer = async () => {
    message.info('Delete Server Action')
  }

  const toggleButton = (
    <Popconfirm
      placement="top"
      title="Are you sure to do this action?"
      onConfirm={() => (statusCode ? handleStopServer() : handleStartServer())}
      okText="Yes"
      cancelText="No"
    >
      <Button type="primary" style={statusCode ? undefined : { backgroundColor: '#ffc107', borderColor: '#ffc107' }}>
        {statusCode ? 'Stop' : 'Start'}
      </Button>
    </Popconfirm>
  )

  const deleteButton = (
    <Popconfirm
      placement="topRight"
      title="There is no way to restore, are you sure?"
      onConfirm={() => handleDeleteServer()}
      okText="Yes, Delete this server"
      cancelText="No"
    >
      <Button type="default" danger>
        Delete
      </Button>
    </Popconfirm>
  )

  return [toggleButton, deleteButton]
}

const Container = styled.div`
  padding: 12px 22px;
  margin: 0 22px;
  background-color: #fff;
  .onlineStatus {
    flex: 0.3;
    .playerCounter {
      display: flex;
      justify-content: space-between;
    }
  }
`
