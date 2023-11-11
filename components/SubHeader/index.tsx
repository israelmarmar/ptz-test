import Link from "next/link";
import styles from "../../styles/Subheader.module.css";
import { Breadcrumbs, Typography } from "@mui/material";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"], display: "swap" });

interface SubHeaderProps {
  path: { title: string; link: string }[];
  description: string;
}

export default function SubHeader({ path=[], description }: SubHeaderProps) {
  return (
    <div className={styles["sub-header"]}>
      <div className={styles["sub-header-crumbs"]}>
        <Breadcrumbs aria-label="breadcrumb" separator="›">
          {path.map(({ title, link },i) => (
            <Link color="inherit" href={link} className={inter.className} key={i}>
              {title}
            </Link>
          ))}
        </Breadcrumbs>
      </div>
      {path.at(-1) && <h1 className={`${styles['sub-header-title']} ${inter.className}`}>{path.at(-1)?.title}</h1>}
      <p className={inter.className}>{description}</p>
    </div>
  );
}
