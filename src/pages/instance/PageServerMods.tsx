import React, { useState } from 'react'
import { Table, Divider, Button, Space, Popconfirm, message } from 'antd'
// import Highlighter from 'react-highlight-words'
// import { SearchOutlined } from '@ant-design/icons'

export default function ServerMods() {
  const [selectedRowKeys, setSelectedRowKeys] = useState([])
  const [RowData, setRowData] = useState([])
  // const [searchText, setSearchText] = useState('')
  // const [searchedColumn, setSearchedColumn] = useState('')

  function onSelectChange(selectdKeys: any, data: any) {
    setSelectedRowKeys(selectdKeys)
    setRowData(data)
    console.log(selectdKeys, data)
  }

  return (
    <>
      <div style={{ margin: '22px', backgroundColor: '#FFF', padding: '22px' }}>
        <Space style={{ justifyContent: 'space-between', display: 'flex' }}>
          <Space>
            <Button type="primary" onClick={() => setSelectedRowKeys([])}>
              Unselect all
            </Button>
            {selectedRowKeys.length ? <span>{selectedRowKeys.length} mods selected</span> : undefined}
          </Space>
          <Space>
            <Button
              type="primary"
              onClick={() => {
                message.info('data has output to console')
                console.log(RowData)
              }}
              disabled={selectedRowKeys.length ? false : true}
            >
              Disable
            </Button>
            <Popconfirm title="Are You Sure To delete this mods?">
              <Button
                type="primary"
                onClick={() => setSelectedRowKeys([])}
                disabled={selectedRowKeys.length ? false : true}
                danger
              >
                Remove
              </Button>
            </Popconfirm>
          </Space>
        </Space>
        <Divider orientation="left">Active Mods</Divider>
        <Table
          rowSelection={{ onChange: onSelectChange, selectedRowKeys }}
          columns={activeModsColumns}
          dataSource={activemodsmock}
        />
      </div>

      <div style={{ margin: '22px', backgroundColor: '#FFF', padding: '22px' }}>
        <Divider orientation="left">Available Mods</Divider>
        <Table columns={AvailableModsColumns} dataSource={availablemodsmock} />
      </div>
    </>
  )
}

// MockData for Active mods
const activeModsColumns = [
  {
    title: 'Directory',
    dataIndex: 'dir',
  },
  {
    title: 'File ID',
    dataIndex: 'id',
    render: (text: string) => <a href={`https://steamcommunity.com/sharedfiles/filedetails/?id=${text}`}>{text}</a>,
  },
  {
    title: 'Last updated',
    dataIndex: 'lastUpdated',
  },
  {
    title: 'Version-hash',
    dataIndex: 'hash',
  },
]

interface ActiveModsDataType {
  key: React.Key
  dir: string
  id: number
  lastUpdated: string
  hash: string
}

const activemodsmock: ActiveModsDataType[] = [
  {
    key: '1',
    dir: '@CF',
    id: 1559212036,
    lastUpdated: '2021-04-20 21:37:44',
    hash: '8fe3347e0c70d0d602a4038d8be95c70',
  },
  {
    key: '2',
    dir: '@PvZmoD_Spawn_System',
    id: 1772776141,
    lastUpdated: '2021-04-20 21:37:44',
    hash: '4e79cd2fdf225881024fb10d9b02a38a',
  },
  {
    key: '3',
    dir: '@Community-Online-Tools',
    id: 1564026768,
    lastUpdated: '2021-04-20 21:37:44',
    hash: 'c45945e713665639027abef2e83452fc',
  },
  {
    key: '4',
    dir: '@PvZmoD_CustomisableZombies',
    id: 2051775667,
    lastUpdated: '2021-04-20 21:37:44',
    hash: '7e538681129522f26a61b5c4c02c0529',
  },
  {
    key: '5',
    dir: '@UnDeleteable_Mods_Name',
    id: 1111111111,
    lastUpdated: '2021-04-20 21:37:44',
    hash: '7e538681129522f26a61b5c4c02c0529',
  },
]

// MockData for Available mods
const AvailableModsColumns = [
  {
    title: 'File ID',
    dataIndex: 'id',
    render: (text: string) => <a href={`https://steamcommunity.com/sharedfiles/filedetails/?id=${text}`}>{text}</a>,
  },
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Size',
    dataIndex: 'size',
  },
  {
    title: 'Subscriptions',
    dataIndex: 'subscriptions',
  },
  {
    title: 'Published',
    dataIndex: 'published',
  },
  {
    title: 'Last updated',
    dataIndex: 'lastUpdated',
  },
  {
    title: 'Actions',
    render: (e: any) => (
      <Button type="link" onClick={() => console.log(e)}>
        Add
      </Button>
    ),
  },
]

interface AvailableModsDataType {
  key: React.Key
  id: number
  name: string
  size: string
  subscriptions: number
  published: string
  lastUpdated: string
}

const availablemodsmock: AvailableModsDataType[] = [
  {
    key: '1',
    id: 1559212036,
    name: 'CF',
    size: 'less then 1 MB',
    subscriptions: 1910604,
    published: '2018-11-08 05:01:09',
    lastUpdated: '2021-04-20 21:37:44',
  },
  {
    key: '2',
    id: 1590841260,
    name: 'Trader',
    size: 'less then 1 MB',
    subscriptions: 1853752,
    published: '2018-11-08 05:01:09',
    lastUpdated: '2021-04-20 21:37:44',
  },
  {
    key: '3',
    id: 1560819773,
    name: 'Unlimited Stamina',
    size: 'less then 1 MB',
    subscriptions: 1743429,
    published: '2018-11-08 05:01:09',
    lastUpdated: '2021-04-20 21:37:44',
  },
  {
    key: '4',
    id: 1623711988,
    name: 'VanillaPlusPlusMap',
    size: 'less then 1 MB',
    subscriptions: 1675085,
    published: '2018-11-08 05:01:09',
    lastUpdated: '2021-04-20 21:37:44',
  },
]
