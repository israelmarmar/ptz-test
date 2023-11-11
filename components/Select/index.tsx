import { useState, CSSProperties } from "react";
import styles from "../../styles/SelectBox.module.css";
import Select, { ActionMeta, GroupBase, SingleValue } from "react-select";
import Image from "next/image";
import arrowUp from "../../public/icons/arrow-up.svg";
import arrowDown from "../../public/icons/arrow-down.svg";
import { Inter } from "@next/font/google";

interface SelectProps {
  name: string;
  label: string;
  placeholder?: string;
  style?: CSSProperties;
  options?: readonly (string | GroupBase<string>)[];
  value?: string
  onChange?: ((newValue: SingleValue<string>, actionMeta: ActionMeta<string>) => void) | undefined
}

const inter = Inter({ subsets: ['latin'], display: 'swap' })

export default function SelectBox({ name, label, placeholder, options=[], style, value, onChange }: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuOpen = () => {
    setIsOpen(!isOpen);
  };

  const customStyles = {
    // Estilos personalizados para o ícone
    indicatorSeparator: () => ({
      display: "none",
    }),
    dropdownIndicator: (base: any, state: any) => ({
      ...base,
      transition: "transform 0.2s",
      transform: state.selectProps.menuIsOpen ? "rotate(180deg)" : "rotate(0)",
    })
  };

  return (
    <div className={styles.select} style={style}>
      <label>{label}</label>
      <Select
        name={name}
        className={`${!style ? styles["select-input"] : ''} ${inter.className}`}
        placeholder={placeholder}
        options={options}
        styles={customStyles}
        defaultValue={value}
        onChange={onChange}
      />
    </div>
  );
}
