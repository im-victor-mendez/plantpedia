import { Router } from "express";
import { getPlant, getPlants, searchPlant } from "./controllers/plants.controller.mjs";

const plantsRouter = Router()
const path = '/plants'

// Get all plants
plantsRouter.get(path, getPlants)

// Search plant
const pathSearchPlant = `${path}/search`
plantsRouter.get(pathSearchPlant, searchPlant)

// Get plant by plant id
const pathPlant = `${path}/:plant`
plantsRouter.get(pathPlant, getPlant)

export default plantsRouter