import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        
        <Link href='/'>
          <a>Home</a>
        </Link>
        <Link href='/blogs'>
          <a>Blogs</a>
        </Link>
        <Link href='/docs'>
          <a>Docs</a>
        </Link>
        <Link href='/products'>
          <a>Products</a>
        </Link>
        
        <h1>Welcome, Home Page</h1>
      </div>

    </div>
  )
}