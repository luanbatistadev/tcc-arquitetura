import Image from "next/image";
import styles from "./styles.module.css";
export default function Card({ titulo, autor ,orientador , capa }) {
    return (
      <div className={styles.card}>
        <Image src={capa} alt={titulo} width="387" height="272"/>
        <div>{titulo}</div>
        <div>Autor(a): {autor}</div>
        <div>Orientador(a): {orientador}</div>
      </div>
    )
  }