import styles from "../../styles/ConsultaForm.module.css";
import { Inter } from "@next/font/google";
import Input from "../Input";
import SelectBox from "../Select";
import { AddButton } from "../AddButton";
import { RedButton } from "../RedButton";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { ActionMeta, GroupBase, SingleValue } from "react-select";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export default function ConsultaForm() {
  const router = useRouter()

  const [dates, setDates] = useState<readonly (string | GroupBase<string>)[]>(
    []
  );
  const [times, setTimes] = useState<readonly (string | GroupBase<string>)[]>(
    []
  );
  const [pokemons, setPokemons] = useState<
    readonly (string | GroupBase<string>)[]
  >([]);
  const [regions, setRegions] = useState<
    readonly (string | GroupBase<string>)[]
  >([]);
  const [cities, setCities] = useState<readonly (string | GroupBase<string>)[]>(
    []
  );
  const [region, setRegion] = useState();
  const [city, setCity] = useState();
  const [date, setDate] = useState();
  const [time, setTime] = useState();
  const [pokeTeam, setPokeTeam] = useState<{ value?: string }[]>([{}]);

  const validating = () => {
    return (region && city && date && time)
  }

  useEffect(() => {
    if (region)
      axios.get(`/api/region?name=${region}`).then((response) => {
        setCities(
          response.data.map((d: any) =>
            Object.assign({ label: d["name"], value: d["name"] })
          )
        );
      });
  }, [region]);

  useEffect(() => {
    axios
      .get<string[]>("/api/scheduling/date")
      .then((response) => {
        setDates(
          response.data.map((d: string) =>
            Object.assign({ label: d, value: d })
          )
        );
      })
      .catch((e) => {
        router.push(`/consulta-error?msg=${e}`);
      });

    axios
      .get("/api/pokemon")
      .then((response) => {
        setPokemons(
          response.data.map((d: any) =>
            Object.assign({ label: d["name"], value: d["name"] })
          )
        );
      })
      .catch((e) => {
        router.push(`/consulta-error?msg=${e}`);
      });

    axios
      .get("/api/region")
      .then((response) => {
        setRegions(
          response.data.map((d: any) =>
            Object.assign({ label: d["name"], value: d["name"] })
          )
        );
      })
      .catch((e) => {
        router.push(`/consulta-error?msg=${e}`);
      });

    axios
      .post<string[]>("/api/scheduling/time", {
        headers: { "content-type": "application/json" },
      })
      .then((response) => {
        setTimes(
          response.data.map((d: string) =>
            Object.assign({ label: d, value: d })
          )
        );
      })
      .catch((e) => {
        router.push(`/consulta-error?msg=${e}`);
      });
  }, []);

  const addPokemon = () => {
    if (pokeTeam.length < 6) {
      const newPokeTeam = [...pokeTeam, {}];
      setPokeTeam(newPokeTeam);
    }
  };

  const onPokemonChange = (
    index: number,
    selected: { value: string; label: string }
  ) => {
    const pokemons = [...pokeTeam];
    pokemons[index] = { value: selected.value };
    setPokeTeam(pokemons);
  };

  const subtotal = 70 * pokeTeam.length;
  const fee = subtotal*0.03
  const total = subtotal + fee;

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
          <SelectBox
            name="region"
            label="Região"
            placeholder=""
            options={regions}
            value={region}
            onChange={(s: any) => setRegion(s.value)}
          />
          <SelectBox
            name="city"
            label="Cidade"
            placeholder="Selecione sua cidade"
            options={cities}
            value={city}
            onChange={(s: any) => setCity(s.value)}
          />
        </div>
        <br />
        <br />
        <label>Cadastre seu time</label>
        <br />
        <br />
        <p>Atendemos até 06 pokémons por vez</p>
        <br />

        {pokeTeam.map(({ value }, i) => (
          <div style={{ whiteSpace: "nowrap", marginBottom: 50 }} key={i}>
            <label
              style={{ marginRight: 80, display: "inline-block" }}
              className={`${inter.className}`}
            >
              {`Pokemon ${i + 1}`}
            </label>
            <SelectBox
              name="pokemon1"
              label=""
              style={{ display: "inline-block", width: "70%" }}
              placeholder="Selecione seu pokémon"
              value={value}
              options={pokemons}
              onChange={(v: SingleValue<string>) =>
                onPokemonChange(
                  i,
                  v as unknown as { value: string; label: string }
                )
              }
            />
          </div>
        ))}

        <AddButton
          link="#"
          title="Adicionar novo pokemon ao time..."
          onClick={addPokemon}
        />

        <div className={styles["consulta-form-row-space-between"]}>
          <SelectBox
            name="consulta_date"
            label="Data para Atendimento"
            placeholder="Selecione uma data"
            value={date}
            onChange={(s: any) => setDate(s.value)}
            options={dates}
          />
          <SelectBox
            name="consulta_time"
            label="Horário de atendimento"
            placeholder="Selecione um horário"
            value={time}
            onChange={(s: any) => setTime(s.value)}
            options={times}
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
            <p
              className={`${styles["consulta-form-invoice-text"]} ${inter.className}`}
            >
              Número de pokémons a serem atendidos:
            </p>
            <p
              className={`${styles["consulta-form-invoice-text"]} ${inter.className}`}
            >
              {`0${pokeTeam.length}`}
            </p>
          </div>

          <div className={styles["consulta-form-row-space-between"]}>
            <p
              className={`${styles["consulta-form-invoice-text"]} ${inter.className}`}
            >
              Atendimento unitário por pokémon:
            </p>
            <p
              className={`${styles["consulta-form-invoice-text"]} ${inter.className}`}
            >
              R$ 70,00
            </p>
          </div>

          <div className={styles["consulta-form-row-space-between"]}>
            <p
              className={`${styles["consulta-form-invoice-text"]} ${inter.className}`}
            >
              Subtotal:
            </p>
            <p
              className={`${styles["consulta-form-invoice-text"]} ${inter.className}`}
            >
              {`R$ ${subtotal.toFixed(2).replace(".", ",")}`}
            </p>
          </div>

          <div className={styles["consulta-form-row-space-between"]}>
            <p
              className={`${styles["consulta-form-invoice-text"]} ${inter.className}`}
            >
              Taxa geracional*:{" "}
            </p>
            <p
              className={`${styles["consulta-form-invoice-text"]} ${inter.className}`}
            >
              {`R$ ${fee.toFixed(2).replace(".", ",")}`}
            </p>
          </div>

          <p className={`${inter.className}`}>
            *adicionamos uma taxa de 3%, multiplicado pelo número da geração
            mais alta do time, com limite de até 30%
          </p>

          <div className={styles["consulta-form-row-space-between"]}>
            <h2 className={`${inter.className}`}>{`Valor Total: R$ ${total
              .toFixed(2)
              .replace(".", ",")}`}</h2>
            <RedButton
              title="Concluir Agendamento"
              onClick={()=>router.push(`/consulta-success?quantity=${pokeTeam.length}&time=${time}&date=${date}`)}
              style={{ fontSize: 16 }}
              disabled={!validating()}
            />
          </div>
        </div>
      </div>
    </>
  );
}
