import { Inter } from "@next/font/google";
import styles from "../../styles/Agendada.module.css";
import successIcon from "../../public/icons/success.svg"
import Image from "next/image";
import { RedButton } from "../RedButton";

const inter = Inter({ subsets: ['latin'] })

export default function Agendada({quantity, time, date}: {quantity: string | null, time: string | null; date: string | null}) {
    return (
        <div className={styles["agendada-box"]}>
            <h2 className={inter.className}>Consulta Agendada</h2>
            <br />
            <Image src={successIcon} alt="" />
            <br />
            <p className={`${styles["agendada-box-text"]} ${inter.className}`}>{`Seu agendamento para dia ${date}, às ${time},
                para ${quantity}x pokémons foi realizado com sucesso!`}</p>
            <br />
            <RedButton title="Fazer Novo Agendamento" link="/consulta" style={{fontSize: 18}} />
        </div>
    );
}