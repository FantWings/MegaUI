import React from 'react'
import ReactDOM from 'react-dom'
// import zhCN from 'antd/lib/locale/zh_CN'
import enUS from 'antd/lib/locale/en_US'
import { ConfigProvider } from 'antd'
import 'antd/dist/antd.css'
import '@ant-design/pro-card/dist/card.css'
import './index.css'

import Router from './Router'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ConfigProvider locale={enUS}>
        <Router />
      </ConfigProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
