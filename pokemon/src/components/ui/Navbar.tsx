import { Spacer, Text, useTheme } from '@nextui-org/react'
import Image from 'next/image'
const Navbar = () => {
  const { theme } = useTheme()
  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'start',
        padding: '0 1rem',
        backgroundColor: theme?.colors.gray100.value,
      }}
    >
      <Image
        src='https://www.pngall.com/wp-content/uploads/2016/06/Pokemon-PNG-HD.png'
        alt='Pokemon'
        width={50}
        height={50}
      />
      <Spacer></Spacer>
      <Text color='white' h2>
        P
      </Text>
      <Text color='white' h3>
        okémon
      </Text>
      <Spacer css={{ flex: 1 }}></Spacer>
      <Text color='white' h3>
        Favoritos
      </Text>
    </div>
  )
}

export default Navbar
