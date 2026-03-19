import { Router } from "express";
import * as controller from "../controllers/resourceController";

const router = Router();

router.get("/resources", controller.getAllResources);
router.get("/resources/:id", controller.getResourceById);
router.post("/resources", controller.createResource);
router.put("/resources/:id", controller.updateResource);
router.delete("/resources/:id", controller.deleteResource);

export default router;

