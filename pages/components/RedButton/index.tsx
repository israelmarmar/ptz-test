import styles from "../../../styles/RedButton.module.css";
import Image from "next/image";
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'], display: 'swap' })

interface RedButtonProps {
    title: string
    iconSrc?: string;
    isCollapse?: boolean;
}

export function RedButton({title, iconSrc, isCollapse}: RedButtonProps) {
  return (
    <button className={`${styles["red-button"]} ${isCollapse ? styles["red-button-collapse"] : ''}`}>
      {iconSrc && <Image src={iconSrc || ""} alt="" />}
      <p className={`${styles["red-button-text"]} ${inter.className}`}>{title}</p>
    </button>
  );
}
