import ContaCorrente from "../classes/conta-corrente";
import express 

const router = express.Router();

const contas: ContaCorrente[] = [
  new ContaCorrente(
    1234,
    1,
    "João Otavio",
    "111222333444"
  )
];

console.log

import express from "express";

const ContaCorrenteRoutes = express.Router();

// GET /: id -> Retornar a conta corrente pelo id
router.get ("/id", (req: Request, res: Response) => {
  const {id} = req.params;
})
// GET /: agencia/: numero

// GET /: agencia/: numero/saldo

// POST / 

// PATCH / saldo

// DELETE / 