import express from "express";

const router = express.Router();
const registros = [];
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
    registros.push(req.body);
    res.status(201).json({ message: "Cadastro realizado com sucesso!" });
  } catch (error) {
    res.status(500).json({ message: "Erro no servidor!" });
  }
});

router.get("/GetRegistration", (req, res) => {
  try {
    res.status(200).json(registros);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar cadastros!" });
  }
});

export default router;
