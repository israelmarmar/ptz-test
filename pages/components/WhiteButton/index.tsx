import styles from "../../../styles/WhiteButton.module.css";
import Image from "next/image";
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'], display: 'swap' })

interface WhiteButtonProps {
    title: string
    iconSrc?: string;
}

export function WhiteButton({title, iconSrc}: WhiteButtonProps) {
  return (
    <button className={styles["white-button"]}>
      {iconSrc && <Image src={iconSrc || ""} alt="" />}
      <p className={`${styles["red-button-text"]} ${inter.className}`}>{title}</p>
    </button>
  );
}
