
import { Footer } from '@/components/footer/Footer'
import Header from '@/components/header/Header'
import { MainComp } from '@/components/main/MainComp'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>

        <meta
          name="description"
          content="Лучший подарок для девушки. Работаем по всей Беларуси."
          key="desc"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
        <link rel="android-chrome-192x192" sizes="192x192" href="/favicon/android-chrome-192x192.png" />
        <link rel="android-chrome-512x512" sizes="512x512" href="/favicon/android-chrome-512x512.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="shortcut icon" href="/favicon/apple-touch-icon.png" />

        <title>
          Мыльные цветы
        </title>
      </Head>


      <div className='app' id='main'>
        <Header />

        <MainComp />

     

        <Footer />
      </div>
    </>

  )
}
