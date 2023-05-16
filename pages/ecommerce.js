import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Hero from '../slices/Hero/index'
const inter = Inter({ subsets: ['latin'] })

import { SliceZone } from '@prismicio/react'

import { createClient } from '../prismicio'
import { components } from '../slices'
import GrowWithUs from '../components/Grow With Us/growWithUs'

export default function Page({ page }) {

  

  return (
    <>
      <SliceZone slices={page.data.slices} components={components} />
      <GrowWithUs titleA='Want to help us' titleB='grow your business?' />
      
    </>
  )
}

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData })

  const page = await client.getSingle('ecommercepage')

  return {
    props: {
      page,
    },
  }
}
