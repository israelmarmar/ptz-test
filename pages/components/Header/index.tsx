import styles from "../../../styles/Header.module.css";
import pokeball from "../../../public/images/white-pokeball.svg";
import { RedButton } from "../RedButton";
import { WhiteButton } from "../WhiteButton";

export default function Header() {
  return (
    <div className={styles.header}>
        <RedButton title="Centro pokémon" iconSrc={pokeball} isCollapse />
        <div className={styles["header-menu"]}>
            <WhiteButton title="Quem somos" link={"/about"} />
            <RedButton title="Agendar consulta" />
        </div>
    </div>
  );
}
