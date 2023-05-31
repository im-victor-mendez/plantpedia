import { Router } from "express";
import { getSpecies } from "./controllers/species.controller.mjs";

const speciesRouter = Router()
const path = '/species'

speciesRouter.get(path, getSpecies)

export default speciesRouter