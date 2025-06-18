import express from "express";

const router = express.Router();
const registros = [
  {
    tipoDePessoa: 1,
    nome: "",
    razaoSocial: "Mercado Bitcoin",
    email: "josealmirsla@gmail.com",
    password: "1234567",
    cnpj: "99.906.622/0001-40",
    cpf: "",
    dataNascimento: "",
    dataAbertura: "2025-06-18",
    telefone: "(11) 96638-9057",
  },
  {
    tipoDePessoa: 0,
    nome: "José almir",
    razaoSocial: "",
    email: "josealmirsla@gmail.com",
    password: "1234567",
    cnpj: "",
    cpf: "221.777.270-81",
    dataNascimento: "2025-06-18",
    dataAbertura: "",
    telefone: "(11) 96638-9057",
  },
];
router.post("/registration", async (req, res) => {
  try {
    const {
      nome,
      razaoSocial,
      email,
      password,
      cnpj,
      cpf,
      dataNascimento,
      dataAbertura,
      telefone,
      tipoDePessoa,
    } = req.body;

    if (!email || !password || !telefone) {
      return res.status(400).json({ message: "Campos obrigatórios ausentes." });
    }

    if (tipoDePessoa === 0) {
      if (!cpf || !dataNascimento || !nome) {
        return res.status(400).json({
          message:
            "CPF, Nome e data de nascimento são obrigatórios para pessoa física.",
        });
      }
    } else if (tipoDePessoa === 1) {
      if (!cnpj || !dataAbertura || !razaoSocial) {
        return res.status(400).json({
          message:
            "CNPJ, razão social e data de abertura são obrigatórios para pessoa jurídica.",
        });
      }
    } else {
      return res.status(400).json({ message: "Tipo de pessoa inválido." });
    }

    res.status(201).json({ message: "Cadastro realizado com sucesso!" });
  } catch (error) {
    res.status(500).json({ message: "Erro no servidor!" });
  }
});

router.get("/registration", (req, res) => {
  try {
    res.status(200).json(registros);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar cadastros!" });
  }
});

export default router;
