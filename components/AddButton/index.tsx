import styles from "../../styles/AddButton.module.css";
import { Inter } from '@next/font/google'
import Link from "next/link";
import { MouseEventHandler } from "react";

const inter = Inter({ subsets: ['latin'], display: 'swap' })

interface AddButtonProps {
    title: string
    link?: string;
    onClick?: MouseEventHandler<HTMLButtonElement> | undefined
}

export function AddButton({title, link, onClick}: AddButtonProps) {
  return (
    <button className={styles["add-button"]} onClick={onClick}>
      <p className={`${styles["add-button-text"]} ${inter.className}`}>{title}</p>
      <p className={`${styles["add-button-text"]}`} style={{fontSize: 16, marginBottom: 0, marginTop: 10, marginLeft: 10 }}>+</p>
    </button>
  );
}
