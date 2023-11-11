import styles from "../../../styles/ConsultaForm.module.css";
import { Inter } from "@next/font/google";
import Input from "../Input";
import SelectBox from "../Select";
import { AddButton } from "../AddButton";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export default function ConsultaForm() {
    return (
        <>
            <h2 className={`${inter.className} ${styles["consulta-form-title"]}`}>
                Preencha o formulário abaixo para agendar sua consulta
            </h2>
            <div className={styles["consulta-form-main"]}>
                <div className={styles["consulta-form-row-space-between"]}>
                    <Input name="name" label="Nome" placeholder="Digite seu nome" />
                    <Input
                        name="lastname"
                        label="Sobrenome"
                        placeholder="Digite seu sobrenome"
                    />
                </div>
                <br />
                <br />
                <div className={styles["consulta-form-row-space-between"]}>
                    <SelectBox name="region" label="Região" placeholder="" />
                    <SelectBox
                        name="city"
                        label="Cidade"
                        placeholder="Selecione sua cidade"
                    />
                </div>
                <br />
                <br />
                <label>Cadastre seu time</label>
                <br />
                <br />
                <p>Atendemos até 06 pokémons por vez</p>
                <br />

                <div style={{ whiteSpace: "nowrap", marginBottom: 50 }}>
                    <label style={{ marginRight: 80, display: "inline-block" }}>
                        Pokemon 1
                    </label>
                    <SelectBox
                        name="pokemon1"
                        label=""
                        style={{ display: "inline-block", width: "70%" }}
                        placeholder="Selecione seu pokémon"
                    />
                </div>

                <div style={{ whiteSpace: "nowrap", marginBottom: 50 }}>
                    <label style={{ marginRight: 80, display: "inline-block" }}>
                        Pokemon 2
                    </label>
                    <SelectBox
                        name="pokemon1"
                        label=""
                        style={{ display: "inline-block", width: "70%" }}
                        placeholder="Selecione seu pokémon"
                    />
                </div>

                <AddButton link="#" title="Adicionar novo pokemon ao time..." />

                <div className={styles["consulta-form-row-space-between"]}>
                    <SelectBox
                        name="consulta_date"
                        label="Data para Atendimento"
                        placeholder="Selecione uma data"
                    />
                    <SelectBox
                        name="consulta_time"
                        label="Horário de atendimento"
                        placeholder="Selecione um horário"
                    />
                </div>
                <br />
                <br />
                <hr
                    style={{
                        background: "#D5D5D5",
                        color: "#D5D5D5",
                        borderColor: "#D5D5D5",
                        height: "1px",
                    }}
                />

                <div className="consulta-form-invoice">
                    <div className={styles["consulta-form-row-space-between"]}>
                        <p className={styles["consulta-form-invoice-text"]}>Número de pokémons a serem atendidos:</p>
                        <p className={styles["consulta-form-invoice-text"]}>01</p>
                    </div>

                    <div className={styles["consulta-form-row-space-between"]}>
                        <p className={styles["consulta-form-invoice-text"]}>Atendimento unitário por pokémon:</p>
                        <p className={styles["consulta-form-invoice-text"]}>R$ 70,00</p>
                    </div>

                    <div className={styles["consulta-form-row-space-between"]}>
                        <p className={styles["consulta-form-invoice-text"]}>Subtotal:</p>
                        <p className={styles["consulta-form-invoice-text"]}>R$ 70,00</p>
                    </div>

                    <div className={styles["consulta-form-row-space-between"]}>
                        <p className={styles["consulta-form-invoice-text"]}>Taxa geracional*: </p>
                        <p className={styles["consulta-form-invoice-text"]}>R$ 2,10</p>
                    </div>

                    <p>*adicionamos uma taxa de 3%, multiplicado pelo número da geração mais alta do time, com limite de até 30%</p>
                </div>

            </div>
        </>
    );
}
