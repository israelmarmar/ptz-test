import styles from "../../../styles/RedButton.module.css";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Link from "next/link";
import { CSSProperties } from "react";

const inter = Inter({ subsets: ["latin"], display: "swap" });

interface RedButtonProps {
  title: string;
  iconSrc?: string;
  isCollapse?: boolean;
  link?: string;
  style: CSSProperties;
}

export function RedButton({
  title,
  iconSrc,
  isCollapse,
  link,
  style,
}: RedButtonProps) {
  return (
    <Link
      className={`${styles["red-button"]} ${
        isCollapse ? styles["red-button-collapse"] : ""
      }`}
      href={link || "#"}
      style={style}
    >
      {iconSrc && <Image src={iconSrc || ""} alt="" />}
      <p
        className={`${styles["red-button-text"]} ${inter.className}`}
        style={style}
      >
        {title}
      </p>
    </Link>
  );
}
