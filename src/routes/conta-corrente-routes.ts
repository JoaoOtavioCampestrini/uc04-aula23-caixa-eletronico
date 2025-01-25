import express, { Request, Response } from "express";
import ContaCorrente from "../classes/conta-corrente";

const router = express.Router();

const contas: ContaCorrente[] = [
  new ContaCorrente(
    1234,
    1,
    "João Otavio",
    "1112223334",
    new Date("1999-01-01"),
    new Date("2000-12-12")
  ),
];

console.log(contas[0]);

// GET /:id -> Retornar a conta corrente pelo id
router.get("/:id", (req: Request, res: Response) => {
  const { id } = req.params;

  if (!id) {
    res.status(400).send({ error: "Id da conta inválido" });
    return;
  }

  const conta = contas.find((c) => c.id === id);
  if (!conta) {
    res.status(404).send({ error: "Conta não encontrada" });
    return;
  }
  res.send(conta);
});

// GET /:agencia/:numero

// GET /:agencia/:numero/saldo

// POST /

// PATCH /saldo

// DELETE /