import { Router } from "express";
import { dataController, homeController } from "../controllers/homeController";

const homeRoute = Router();

homeRoute.get('/', homeController);
homeRoute.get('/globe-data', dataController);

export default homeRoute;