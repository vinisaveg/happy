import { getRepository } from "typeorm";
import { Request, Response } from "express";
import * as Yup from "yup";

import Orphanage from "../models/Orphanage";
import orphanageView from "../views/orphanages_view";

export default {
  async show(request: Request, response: Response) {
    const { id } = request.params;

    const orphanagesRepository = getRepository(Orphanage);

    const orphanage = await orphanagesRepository.findOneOrFail(id, {
      relations: ["images"],
    });

    return response.status(200).json(orphanageView.render(orphanage));
  },

  async index(request: Request, response: Response) {
    const orphanagesRepository = getRepository(Orphanage);

    const orphanages = await orphanagesRepository.find({
      relations: ["images"],
    });

    return response.json(orphanageView.renderMany(orphanages));
  },

  async create(request: Request, response: Response) {
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

    const requestImages = request.files as Express.Multer.File[];

    const images = requestImages.map((image) => {
      return {
        path: image.filename,
      };
    });

    const data = {
      name,
      latitude,
      longitude,
      about,
      instructions,
      open_on_weekends: open_on_weekends === "true",
      opening_hours,
      images,
    };

    const schema = Yup.object().shape({
      name: Yup.string().required(),
      latitude: Yup.number().required(),
      longitude: Yup.number().required(),
      about: Yup.string().required().max(300),
      instructions: Yup.string().required(),
      opening_hours: Yup.string().required(),
      open_on_weekends: Yup.bool().required(),
      images: Yup.array(
        Yup.object().shape({
          path: Yup.string().required(),
        })
      ),
    });

    // const finalData = schema.cast(data)

    await schema.validate(data, { abortEarly: false });

    const newOrphanage = orphanagesRepository.create(data);

    const result = await orphanagesRepository.save(newOrphanage);

    if (result) {
      return response.status(201).json(result);
    }

    return response.status(400).send("Something went wrong!");
  },
};
