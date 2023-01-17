import Layout from '@/components/Layouts/Layout'
import { useRouter } from 'next/router'
import React from 'react'

const PokemonPage = () => {
  const router = useRouter()
  console.log(router.query)
  return (
    <Layout>
      <h1>Pokemon Page</h1>
    </Layout>
  )
}

export default PokemonPage
