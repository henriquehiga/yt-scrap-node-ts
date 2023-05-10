import express, { json } from "express";
import { ObtemInfoMix } from "./services/obtem-info-mix";
const app = express();
const port = 8080;

app.use(json());

app.get("/lista-info", async (req, res) => {
  const obtemInfoMixUsecase = new ObtemInfoMix();
  const urlQuery = req.query.url;
  if (!urlQuery) {
    return res.status(400).json({
      msg: "Obrigatório url como parametro.",
    });
  }
  try {
    const itens = await obtemInfoMixUsecase.execute(urlQuery.toString());
    return res.status(200).json({ itens });
  } catch (err: any) {
    return res.status(500).json({
      msg: "Erro ao resgatar itens.",
      erro: err,
    });
  }
});

app.listen(port, () => {
  console.log("Rodando na porta: " + port);
});
