import styles from "../../../styles/RedButton.module.css";
import Image from "next/image";
import { Inter } from '@next/font/google'
import Link from "next/link";

const inter = Inter({ subsets: ['latin'], display: 'swap' })

interface RedButtonProps {
    title: string
    iconSrc?: string;
    isCollapse?: boolean;
    link?: string;
}

export function RedButton({title, iconSrc, isCollapse, link}: RedButtonProps) {
  return (
    <Link className={`${styles["red-button"]} ${isCollapse ? styles["red-button-collapse"] : ''}`} href={link || "#"}>
      {iconSrc && <Image src={iconSrc || ""} alt="" />}
      <p className={`${styles["red-button-text"]} ${inter.className}`}>{title}</p>
    </Link>
  );
}
