import { Button, Card, Col, Row, Spacer, Text } from '@nextui-org/react'
import { useState } from 'react'

interface User {
  uuid: string
  name: string
}
const Usuario = () => {
  const [user, setUser] = useState<User>()

  const login = () => {
    setUser({
      uuid: 'ABCDE',
      name: 'Juan F',
    })
  }
  return (
    <Card>
      <div>
        <Spacer></Spacer>
        <Col>
          <Text>Usuario</Text>
          <br />
          <Button onClick={login}>SET</Button>
          <Text>{user?.name ?? 'Sin usuario'}</Text>
        </Col>
      </div>
    </Card>
  )
}

export default Usuario
