import { Router } from "express";
import plantsRouter from "./plants.routes.mjs";

const routes = Router()
const path = ''
const routers = [plantsRouter]

routes.use(path, routers)

export default routes