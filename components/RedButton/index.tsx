import styles from "../../styles/RedButton.module.css";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Link from "next/link";
import { CSSProperties, MouseEventHandler } from "react";

const inter = Inter({ subsets: ["latin"], display: "swap" });

interface RedButtonProps {
  title: string;
  iconSrc?: string;
  isCollapse?: boolean;
  link?: string;
  style?: CSSProperties;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

export function RedButton({
  title,
  iconSrc,
  isCollapse,
  link,
  style,
  onClick,
  disabled,
}: RedButtonProps) {
  if (onClick)
    return (
      <button
        className={`${styles["red-button"]} ${
          isCollapse ? styles["red-button-collapse"] : ""
        } ${disabled ? styles["red-button-disabled"] : ""}`}
        style={style}
        onClick={onClick}
        disabled={disabled}
      >
        {iconSrc && <Image src={iconSrc || ""} alt="" />}
        <p
          className={`${styles["red-button-text"]} ${inter.className}`}
          style={style}
        >
          {title}
        </p>
      </button>
    );

  return (
    <Link
      className={`${styles["red-button"]} ${
        isCollapse ? styles["red-button-collapse"] : ""
      }`}
      href={link || "#"}
      style={style}
      onClick={onClick}
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
