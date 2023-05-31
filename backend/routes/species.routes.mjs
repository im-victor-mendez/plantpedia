import { Router } from "express";
import { getSpecie, getSpecies, searchSpecie } from "./controllers/species.controller.mjs";

const speciesRouter = Router()
const path = '/species'

// Get all species
speciesRouter.get(path, getSpecies)

// Search specie
const pathSearchSpecie = `${path}/search`
speciesRouter.get(pathSearchSpecie, searchSpecie)

// Get specie by specie id
const pathSpecie = `${path}/:specie`
speciesRouter.get(pathSpecie, getSpecie)

export default speciesRouter