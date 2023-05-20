import { Router } from "express";
import { getFindBy } from "./controllers/findBy.controller.mjs";

const findByRouter = Router()
const path = '/findby'

findByRouter.use(path, getFindBy)

export default findByRouter