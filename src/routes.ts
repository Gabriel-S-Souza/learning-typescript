import { Router } from "express";
import UserControler from "./controllers/UserControler";

const routes = Router()

routes.get('/users', UserControler.index)

export default routes