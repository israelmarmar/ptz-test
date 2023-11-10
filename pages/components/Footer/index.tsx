import styles from "../../../styles/Footer.module.css";
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'], display: 'swap' })

export default function Footer() {
  return (
    <div className={`${styles.footer} ${inter.className}`}>
      Todas as marcas e ilustrações utilizadas são de seus resepctivos donos.
    </div>
  );
}
