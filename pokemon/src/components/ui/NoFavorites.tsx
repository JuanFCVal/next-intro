import { Container, Spacer, Text, Image } from '@nextui-org/react'

const NoFavorites = () => {
  return (
    <Container
      css={{
        display: 'flex',
        flexDirection: 'column',
        height: 'calc(100vh- 100px)',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
      }}
    >
      <Text h1>No hay favoritos</Text>
      <Spacer></Spacer>
      <Image
        src='https://www.pngall.com/wp-content/uploads/2016/06/Pokemon-PNG-HD.png'
        alt='Pokemon'
        width={250}
        height={250}
      />
    </Container>
  )
}

export default NoFavorites
