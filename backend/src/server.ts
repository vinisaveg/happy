import express, { Request, Response } from "express";
import { getRepository } from "typeorm";
import Orphanage from "./models/Orphanage";

import "./database/connection";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  return res.json({ message: "hello world!" });
});

app.post("/orphanages", async (request: Request, response: Response) => {
  const {
    name,
    latitude,
    longitude,
    about,
    instructions,
    open_on_weekends,
    opening_hours,
  } = request.body;

  const orphanagesRepository = getRepository(Orphanage);

  const newOrphanage = orphanagesRepository.create({
    name,
    latitude,
    longitude,
    about,
    instructions,
    open_on_weekends,
    opening_hours,
  });

  const result = await orphanagesRepository.save(newOrphanage);

  if (result) {
    return response.status(201).json(result);
  }

  return response.status(400).send("Something went wrong!");
});

app.listen(3000, () => {
  console.log("server runnig at http://localhost:3000");
});
