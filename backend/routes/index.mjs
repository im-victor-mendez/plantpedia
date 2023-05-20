import { Router } from "express";
import plantsRouter from "./plants.routes.mjs";
import findByRouter from "./findBy.routes.mjs";

const routes = Router()
const path = ''
const routers = [findByRouter, plantsRouter]

routes.use(path, routers)

export default routes