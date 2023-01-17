import { PokemonItem } from '@/interfaces/pokemon-list'
import { Card, Col, Grid, Row, Text } from '@nextui-org/react'
import { useRouter } from 'next/router'
import { FC } from 'react'

interface CardProps {
  pokemon: PokemonItem
}
const PokemonCard: FC<CardProps> = ({ pokemon }) => {
  const router = useRouter()
  const OnClick = () => {
    router.push(`/pokemon/${pokemon.id}`)
  }

  return (
    <Grid xs={6} sm={3} md={2} xl={1} onClick={OnClick}>
      <Card isHoverable>
        <Card.Body css={{ padding: 1 }}>
          <Card.Image src={pokemon.img} width='100%' height={150}></Card.Image>
        </Card.Body>
        <Card.Footer>
          <Col>
            <Row justify='space-between'>
              <Text transform='capitalize'>{pokemon.name}</Text>
              <Text>#{pokemon.id}</Text>
            </Row>
          </Col>
        </Card.Footer>
      </Card>
    </Grid>
  )
}

export default PokemonCard
