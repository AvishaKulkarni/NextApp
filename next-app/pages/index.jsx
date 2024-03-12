
import Head from 'next/head'
//import Footer from '../comps/Footer'
//import Navbar from '../comps/Navbar'
import Link from 'next/link';
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
    <Head>
        <title>Developer List | Home</title>
        <meta name='keywords' content='developers' />
    </Head>
    <div>
      
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque sit expedita autem, adipisci, voluptatum provident rerum voluptates debitis commodi dicta eligendi perspiciatis nulla quaerat pariatur quisquam distinctio! Eligendi, minima suscipit?</p>
      <p className={styles.test}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui architecto cumque maiores corporis saepe quod dolor, nam dolore vitae quis! Id numquam ex porro aperiam, tenetur aut itaque dolorem sed.</p>
      <Link href="/nextFolder">
            <a className={styles.btn}> See Devedloper Listing </a>
      </Link>
      
    </div>
    </div>
  )
}

//code splitting by default next already code splits our app