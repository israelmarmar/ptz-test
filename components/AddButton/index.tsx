import styles from "../../styles/AddButton.module.css";
import { Inter } from '@next/font/google'
import Link from "next/link";

const inter = Inter({ subsets: ['latin'], display: 'swap' })

interface AddButtonProps {
    title: string
    link?: string;
}

export function AddButton({title, link}: AddButtonProps) {
  return (
    <Link className={styles["add-button"]} href={link || "#"}>
      <p className={`${styles["add-button-text"]} ${inter.className}`}>{title}</p>
      <p className={`${styles["add-button-text"]}`} style={{fontSize: 16, marginBottom: 0, marginTop: 10, marginLeft: 10 }}>+</p>
    </Link>
  );
}
