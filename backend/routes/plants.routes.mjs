import { Router } from "express";
import { getPlant, getPlants } from "./controllers/plants.controller.mjs";

const plantsRouter = Router()
const path = '/plants'

plantsRouter.get(path, getPlants)

const pathPlant = `${path}/:plant`

plantsRouter.get(pathPlant, getPlant)

export default plantsRouter