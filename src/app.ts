import express, { json } from "express";
import { ObtemInfoMix } from "./services/obtem-info-mix";
const app = express();

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
    const items = await obtemInfoMixUsecase.execute(urlQuery.toString());
    return res.status(200).json({ items });
  } catch (err: any) {
    return res.status(500).json({
      msg: "Erro ao resgatar itens.",
      erro: err,
    });
  }
});

app.listen(8080, () => {
  console.log("Server on");
});
