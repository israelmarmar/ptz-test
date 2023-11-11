import { useState, CSSProperties } from "react";
import styles from "../../../styles/SelectBox.module.css";
import Select from "react-select";
import Image from "next/image";
import arrowUp from "../../../public/icons/arrow-up.svg";
import arrowDown from "../../../public/icons/arrow-down.svg";
import { Inter } from "@next/font/google";

interface SelectProps {
  name: string;
  label: string;
  placeholder?: string;
  style?: CSSProperties;
}

const inter = Inter({ subsets: ['latin'], display: 'swap' })

const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];


export default function SelectBox({ name, label, placeholder, style }: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuOpen = () => {
    setIsOpen(!isOpen);
  };

  const customStyles = {
    // Estilos personalizados para o ícone
    indicatorSeparator: () => ({
      display: "none",
    }),
    dropdownIndicator: (base, state) => ({
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
        isMenuOpen={isOpen}
        onMenuOpen={handleMenuOpen}
        onMenuClose={handleMenuOpen}
        components={{
          DropdownIndicator: () =>
            isOpen ? (
              <Image src={arrowUp} alt="" style={{ marginRight: 10 }} />
            ) : (
              <Image src={arrowDown} alt="" style={{ marginRight: 10 }} />
            ),
        }}
      />
    </div>
  );
}
