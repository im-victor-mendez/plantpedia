import { Router } from "express";
import plantsRouter from "./plants.routes.mjs";
import findByRouter from "./findBy.routes.mjs";
import speciesRouter from "./species.routes.mjs";
import distributionsRouter from "./distributions.routes.mjs";

const routes = Router()
const path = ''
const routers = [
    findByRouter,
    plantsRouter,
    speciesRouter,
    distributionsRouter
]

routes.use(path, routers)

export default routes