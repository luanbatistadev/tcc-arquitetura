import styles from "./styles.module.css";
import Card from "../Card"
import { useEffect, useState } from "react";
import axios from "axios";
export default function CardList({ titulo, autor, orientador }) {

    const [cards, setCards] = useState([
    ]);
    useEffect(() => {
        axios.get('/api/publicacoes')
            .then((res) => {
                setCards(res.data);
            })
    }, []);

    return (
        <div className={styles.cardList}>
            {
                cards.map((card) => {
                    return <Card titulo={card.titulo} autor={card.autor} orientador={card.orientador} capa={card.capa}/>
                })
            }
        </div>
    )
}