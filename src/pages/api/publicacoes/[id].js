import { publicacoes } from "../../../../dados";

export default function PublicacoesID(req, res) {
    const p = publicacoes.find(publicacao => publicacao.id == req.query.id);
    return res.status(200).json(p);
}