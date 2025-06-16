import express from "express";

const router = express.Router();

router.post("/registration", async (req, res) => {
  try {
    const user = req.body;

    res.status(201).json({ message: "Cadastro realizado com sucesso!" });
  } catch (error) {
    res.status(500).json({ message: "Erro no servidor!" });
  }
});

export default router;
