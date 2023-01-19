import { FC, useEffect, useRef, useState } from 'react'

interface Props {
  miliseconds: number
}
export const Timer: FC<Props> = ({ miliseconds }) => {
  const [segundos, setSegundos] = useState(0)
  console.log()

  const ref = useRef<NodeJS.Timeout>()
  useEffect(() => {
    clearInterval(ref.current)
    ref.current = setInterval(() => setSegundos((s) => s + 1), miliseconds)
    return () => {} //SE ejecuta cuando se destruye el componente
  }, [miliseconds])
  return (
    <>
      <h4>Timer: {segundos}</h4>
    </>
  )
}
