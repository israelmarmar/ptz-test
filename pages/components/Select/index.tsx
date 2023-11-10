import { useState } from "react";
import styles from "../../../styles/SelectBox.module.css";
import Select from "react-select";

interface SelectProps {
    name: string
    label: string
    placeholder?: string
}
  
  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  const customStyles = {
    // Estilos personalizados para o ícone
    indicatorSeparator: () => ({
      display: "none",
    }),
    dropdownIndicator: (base, state) => ({
      ...base,
      transition: "transform 0.2s",
      transform: state.selectProps.menuIsOpen ? "rotate(180deg)" : "rotate(0)",
    }),
  };

export default function SelectBox({ name, label, placeholder }: SelectProps) {

  return (
    <div className={styles.select}>
        <label>{label}</label>
        <Select
            name={name}
            className={styles["select-input"]}
            placeholder={placeholder}
            options={options}
            styles={customStyles}
        />
    </div>
  );
}