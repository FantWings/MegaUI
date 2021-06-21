import styled from 'styled-components'
import { Route, Switch } from 'react-router-dom'
import { useHistory } from 'react-router'
import { Layout, Menu, Dropdown, Avatar } from 'antd'
import { PieChartOutlined, DesktopOutlined, LoginOutlined, UserOutlined } from '@ant-design/icons'

import { ThemeColorDark, ColorActive } from 'src/utils/constent'
import { AuthAPI } from 'src/utils/api'

// SubPage
import BashBoard from './PageDashboard'
import InstencesList from './PageInstancesList'
import ManageInstance from './instance'
import { useState, useEffect } from 'react'

export default function Index() {
  const history = useHistory()
  const { Header, Footer, Sider, Content } = Layout
  const { logOut } = AuthAPI()
  const [current, setCurrent] = useState(history.location.pathname.split('/')[2])

  const avatarMenu = (
    <Menu>
      <Menu.Item onClick={logOut}>
        <span>
          <LoginOutlined style={{ color: 'red', marginRight: '8px' }} />
          Logout
        </span>
      </Menu.Item>
    </Menu>
  )

  return (
    <Layout style={{ height: '100%' }}>
      <Sider breakpoint="lg" collapsedWidth="0" style={{ backgroundColor: ThemeColorDark }}>
        <Logo>
          <span />
        </Logo>
        <Menu
          selectedKeys={[current]}
          mode="inline"
          theme="dark"
          style={{ backgroundColor: ThemeColorDark }}
          onClick={(e) => {
            setCurrent(e.key)
          }}
        >
          <Menu.Item key="dashboard" icon={<PieChartOutlined />} onClick={() => history.push('/admin/dashboard')}>
            DashBoard
          </Menu.Item>
          <Menu.Item key="instance" icon={<DesktopOutlined />} onClick={() => history.push('/admin/instancelist')}>
            Instances
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ backgroundColor: ThemeColorDark, padding: '0' }}>
          <Dropdown overlay={avatarMenu} placement="bottomRight" arrow>
            <div style={{ maxWidth: '120px', marginLeft: 'auto' }}>
              <span style={{ color: '#FFF' }}>localhost</span>
              <Avatar size={32} icon={<UserOutlined />} style={{ margin: '0 12px' }} />
            </div>
          </Dropdown>
        </Header>
        <Content style={{ overflowY: 'scroll', overflowX: 'hidden' }}>
          <Switch>
            <Route path="/admin/dashboard" component={BashBoard} exact />
            <Route path="/admin/instancelist" component={InstencesList} exact />
            <Route path="/admin/instance/:pid" component={ManageInstance} />
          </Switch>
        </Content>
        <Footer
          style={{
            background: ThemeColorDark,
            width: '100%',
            bottom: '0',
            height: '48px',
            padding: '0 24px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <span style={{ color: '#fff' }}>OmegaManager v1.9.0007 © 2018 - 2021 CFTools</span>
        </Footer>
      </Layout>
    </Layout>
  )
}

const Logo = styled.div`
  display: block;
  height: 60px;
  padding: 12px;
  overflow: hidden;

  span {
    display: block;
    background-color: ${ColorActive};
    height: 100%;
  }
`
