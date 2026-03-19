import { Request, Response} from "express";
import * as service from "../services/resourceService";
import { HTTP_STATUS } from "../../../constants/httpConstants";

export const getAllResources = (req: Request, res: Response) => {
    const resources = service.getAllResources();
    res.status(HTTP_STATUS.OK).json({
        message: "Resources retrieved",
        count: resources.length,
        data: resources
    });
};

export const getResourceById = (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const resource = service.getResourceById(id);
    
    if (!resource) {
        res.status(HTTP_STATUS.NOT_FOUND).json({ message: "Resource not found" });
        return;
    }
    res.status(HTTP_STATUS.OK).json({ message: "Resource retrieved", data: resource });
};


