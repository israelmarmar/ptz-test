import { Inter } from "@next/font/google";
import styles from "../../styles/Agendada.module.css";
import errorIcon from "../../public/icons/error.svg"
import Image from "next/image";
import { RedButton } from "../RedButton";

const inter = Inter({ subsets: ['latin'] })

export default function ConsultaError() {
    return (
        <div className={styles["agendada-box"]}>
            <h1 className={inter.className} style={{fontSize: 18}}>Houve um problema no agendamento</h1>
            <br />
            <Image src={errorIcon} alt="" />
            <br />
            <p className={`${styles["agendada-box-text"]} ${inter.className}`}>{`{mensagem de erro}`}</p>
            <br />
            <RedButton title="Fazer Novo Agendamento" link="/consulta" style={{fontSize: 18}} />
        </div>
    );
}