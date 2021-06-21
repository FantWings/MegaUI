import { Menu } from 'antd'
import {
  UnorderedListOutlined,
  AppstoreOutlined,
  SettingOutlined,
  InfoCircleOutlined,
  ControlOutlined,
  FullscreenExitOutlined,
} from '@ant-design/icons'
import { useState } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { useHistory } from 'react-router'

import PageServerInfo from './PageServerInfo'
import PageServerAction from './PageServerAction'
import PageServerConfig from './PageServerConfig'
import PageServerMods from './PageServerMods'
import PageServerEvents from './PageServerEvents'
import PageOmegaConfig from './OmegaConfig/General'
import { useEffect } from 'react'

const { SubMenu } = Menu

export default function PageManageInstance() {
  const history = useHistory()
  const [current, setCurrent] = useState(history.location.pathname.split('/').reverse()[0])

  useEffect(() => {
    setCurrent(history.location.pathname.split('/').reverse()[0])
  })

  return (
    <>
      <Menu
        onClick={(e) => {
          setCurrent(e.key)
        }}
        selectedKeys={[current]}
        mode="horizontal"
      >
        <Menu.Item
          key="info"
          icon={<InfoCircleOutlined />}
          onClick={() => {
            history.push('info')
          }}
        >
          Serverinfo
        </Menu.Item>
        <Menu.Item
          key="actions"
          icon={<ControlOutlined />}
          onClick={() => {
            history.push('actions')
          }}
        >
          Actions
        </Menu.Item>
        <Menu.Item
          key="config"
          icon={<UnorderedListOutlined />}
          onClick={() => {
            history.push('config')
          }}
        >
          Server Configuration
        </Menu.Item>
        <Menu.Item
          key="omega"
          icon={<FullscreenExitOutlined />}
          onClick={() => {
            history.push('omega')
          }}
        >
          Omega instance Configuration
        </Menu.Item>
        <Menu.Item
          key="mods"
          icon={<AppstoreOutlined />}
          onClick={() => {
            history.push('mods')
          }}
        >
          Mod Configuration
        </Menu.Item>
        <SubMenu key="events" icon={<SettingOutlined />} title="Advanced">
          <Menu.ItemGroup title="Server">
            <Menu.Item
              key="setting:1"
              onClick={() => {
                history.push('events')
              }}
            >
              Event history
            </Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
      </Menu>
      <Switch>
        <Route path="/admin/instance/:pid/info" component={PageServerInfo} exact />
        <Route path="/admin/instance/:pid/actions" component={PageServerAction} exact />
        <Route path="/admin/instance/:pid/config" component={PageServerConfig} exact />
        <Route path="/admin/instance/:pid/mods" component={PageServerMods} exact />
        <Route path="/admin/instance/:pid/events" component={PageServerEvents} exact />
        <Route path="/admin/instance/:pid/omega" component={PageOmegaConfig} exact />
        <Redirect to="/admin/instance/:pid/info" />
      </Switch>
    </>
  )
}
