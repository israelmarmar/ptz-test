import styles from "../../../styles/Input.module.css";

interface InputProps {
    name: string
    label: string
    placeholder?: string
}

export default function Input({ name, label, placeholder }: InputProps) {
    return(
        <div className={styles.input}>
            <label htmlFor={name}>{label}</label>
            <input type="text" id={name} name={name} placeholder={placeholder}></input>
        </div>
    );
}