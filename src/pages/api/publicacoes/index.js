import { publicacoes } from "../../../../dados";

export default function Publicacoes(req, res) {
    return res.status(200).json(publicacoes);
}