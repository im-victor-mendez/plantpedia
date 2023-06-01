import { Router } from "express";
import { getDistribution, getDistributions } from "./controllers/distributions.controller.mjs";

const distributionsRouter = Router()
const path = '/distributions'

// Get all distributions
distributionsRouter.get(path, getDistributions)

// Get distribution by distribution id
const pathDistribution = `${path}/:distribution`
distributionsRouter.get(pathDistribution, getDistribution)

export default distributionsRouter