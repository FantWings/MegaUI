import { useState } from 'react'
import { PageHeader } from 'antd'
import { StatisticCard } from '@ant-design/pro-card'
import RcResizeObserver from 'rc-resize-observer'
const { Divider, Statistic } = StatisticCard

export default function DashBoard() {
  return (
    <>
      <PageHeader className="site-page-header" title="Server" subTitle="Host Server Infomation" />
      <div style={{ margin: '22px' }}>
        <InstenceStatistic />
      </div>
      <div style={{ margin: '22px' }}>
        <HostStatistic />
      </div>
    </>
  )
}

function InstenceStatistic() {
  const [responsive, setResponsive] = useState(false)
  return (
    <RcResizeObserver
      key="resize-observer"
      onResize={(offset) => {
        setResponsive(offset.width < 596)
      }}
    >
      <StatisticCard.Group title="Instances" direction={responsive ? 'column' : 'row'}>
        <StatisticCard
          statistic={{
            title: 'deployed',
            tip: 'How many nstance(s) deployed',
            value: 1,
          }}
        />
        <Divider type={responsive ? 'horizontal' : 'vertical'} />
        <StatisticCard
          statistic={{
            title: 'version',
            tip: 'Deployment version',
            value: '1.12.153904',
          }}
        />
        <Divider type={responsive ? 'horizontal' : 'vertical'} />
        <StatisticCard
          statistic={{
            title: 'Last upstream check',
            value: 8,
            suffix: 'minutes ago',
          }}
        />
        <Divider type={responsive ? 'horizontal' : 'vertical'} />
        <StatisticCard
          statistic={{
            title: 'Tracked workshop items',
            value: 8,
          }}
        />
      </StatisticCard.Group>
    </RcResizeObserver>
  )
}

function HostStatistic() {
  const [responsive, setResponsive] = useState(false)

  return (
    <RcResizeObserver
      key="resize-observer"
      onResize={(offset) => {
        setResponsive(offset.width < 596)
      }}
    >
      <StatisticCard.Group title="SYSTEM UTILIZATION" direction={responsive ? 'column' : 'row'}>
        <StatisticCard
          statistic={{
            title: 'CPU USAGE',
            value: 65,
            suffix: '%',
            description: <Statistic title="Cores" value="2" />,
          }}
          chart={<img src="https://gw.alipayobjects.com/zos/alicdn/ShNDpDTik/huan.svg" alt="百分比" width="100%" />}
          chartPlacement="left"
        />
        <Divider type={responsive ? 'horizontal' : 'vertical'} />
        <StatisticCard
          statistic={{
            title: 'MEMORY USAGE',
            value: 65,
            suffix: '%',
            description: <Statistic title="4 GB /" value="3 GB" />,
          }}
          chart={<img src="https://gw.alipayobjects.com/zos/alicdn/ShNDpDTik/huan.svg" alt="百分比" width="100%" />}
          chartPlacement="left"
        />
        <Divider type={responsive ? 'horizontal' : 'vertical'} />
        <StatisticCard
          statistic={{
            title: 'DISK USAGE',
            value: 36,
            suffix: '%',
            description: <Statistic title="79 GB /" value="47 GB" />,
          }}
          chart={<img src="https://gw.alipayobjects.com/zos/alicdn/6YR18tCxJ/huanlv.svg" alt="百分比" width="100%" />}
          chartPlacement="left"
        />
      </StatisticCard.Group>
    </RcResizeObserver>
  )
}
