import styles from "../../../styles/WhiteButton.module.css";
import Image from "next/image";
import { Inter } from '@next/font/google'
import Link from "next/link";

const inter = Inter({ subsets: ['latin'], display: 'swap' })

interface WhiteButtonProps {
    title: string
    iconSrc?: string;
    link?: string;
}

export function WhiteButton({title, iconSrc, link}: WhiteButtonProps) {
  return (
    <Link className={styles["white-button"]} href={link || "#"}>
      {iconSrc && <Image src={iconSrc || ""} alt="" />}
      <p className={`${styles["red-button-text"]} ${inter.className}`}>{title}</p>
    </Link>
  );
}
