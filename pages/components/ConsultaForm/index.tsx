import styles from "../../../styles/ConsultaForm.module.css";
import { Inter } from "@next/font/google";
import Input from "../Input";
import SelectBox from "../Select";

const inter = Inter({ subsets: ['latin'], display: 'swap' })

export default function ConsultaForm() {

    return (
        <>
            <h2 className={`${inter.className} ${styles['consulta-form-title']}`}>Preencha o formulário abaixo para agendar sua consulta</h2>
            <div className={styles['consulta-form-main']}>
                <div className={styles["consulta-form-row"]}>
                    <Input name="name" label="Nome" placeholder="Digite seu nome" />
                    <Input name="lastname" label="Sobrenome" placeholder="Digite seu sobrenome" />
                </div>
                <br />
                <div className={styles["consulta-form-row"]}>
                    <SelectBox name="region" label="Região" placeholder=""/>
                    <SelectBox name="city" label="Cidade" placeholder="Selecione sua cidade"/>
                </div>

                <label>Cadastre seu time</label>
                <br />
                <p>Atendemos até 06 pokémons por vez</p>

            </div>
        </>
    );
}