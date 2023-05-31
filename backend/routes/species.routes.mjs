import { Router } from "express";
import { getSpecies } from "./controllers/species.controller.mjs";

const speciesRouter = Router()
const path = '/species'

// Get all species
speciesRouter.get(path, getSpecies)

export default speciesRouter