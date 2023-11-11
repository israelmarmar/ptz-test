import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '../styles/About.module.css'
import SubHeader from '../components/SubHeader'
import ConsultaForm from '../components/ConsultaForm'
import Agendada from '../components/Agendada'

const inter = Inter({ subsets: ['latin'] })

export default function Consulta() {
  return (
    <div className={styles.about}>
      <Head>
        <title>Agendar consulta</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SubHeader path={[{ title: 'Home', link: '/'},{ title: 'Agendar consulta', link: '/consulta' }]} description='Recupere seus pokémons em 5 segundos'/>
      <Agendada />
    </div>
  )
}
