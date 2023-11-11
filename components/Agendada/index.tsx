import { Inter } from "@next/font/google";
import styles from "../../styles/Agendada.module.css";
import successIcon from "../../public/icons/success.svg"
import Image from "next/image";
import { RedButton } from "../RedButton";

const inter = Inter({ subsets: ['latin'] })

export default function Agendada() {
    return (
        <div className={styles["agendada-box"]}>
            <h2 className={inter.className}>Consulta Agendada</h2>
            <br />
            <Image src={successIcon} alt="" />
            <br />
            <p className={`${styles["agendada-box-text"]} ${inter.className}`}>Seu agendamento para dia xx/xx/xxxx, às 00h00m,
                para 0x pokémons foi realizado com sucesso!</p>
            <br />
            <RedButton title="Fazer Novo Agendamento" link="/consulta" style={{fontSize: 18}} />
        </div>
    );
}