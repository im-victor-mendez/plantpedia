import { Router } from "express";
import { getFindBy } from "./controllers/findBy.controller.mjs";

const findByRouter = Router()
const path = '/findby'

// Get Find By content list
findByRouter.get(path, getFindBy)

export default findByRouter