import { Router } from "express";
import { getPlants } from "./controllers/plants.controller.mjs";

const plantsRouter = Router()
const path = '/plants'

plantsRouter.use(path, getPlants)

export default plantsRouter