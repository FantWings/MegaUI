import { Card, Col, Row } from 'antd'
import styled from 'styled-components'
export default function serverInfo() {
  return (
    <Container>
      <Row gutter={16} wrap={true}>
        <Col span={6}>
          <Card title="Backups" bordered={false}>
            Card content
          </Card>
        </Col>
        <Col span={6}>
          <Card title="PlayerDB Entries" bordered={false}>
            Card content
          </Card>
        </Col>
        <Col span={6}>
          <Card title="Directory Size" bordered={false}>
            Card content
          </Card>
        </Col>
        <Col span={6}>
          <Card title="Server uptime" bordered={false}>
            Card content
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

const Container = styled.div`
  padding: 12px;
`
