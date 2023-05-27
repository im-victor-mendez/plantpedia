import { Router } from "express";
import { getPlant, getPlants, searchPlant } from "./controllers/plants.controller.mjs";

const plantsRouter = Router()
const path = '/plants'

plantsRouter.get(path, getPlants)

const pathSearchPlant = `${path}/search`

plantsRouter.get(pathSearchPlant, searchPlant)

const pathPlant = `${path}/:plant`

plantsRouter.get(pathPlant, getPlant)

export default plantsRouter