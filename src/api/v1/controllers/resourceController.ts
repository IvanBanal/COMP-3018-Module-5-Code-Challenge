import { Request, Response} from "express";
import * as service from "../services/resourceService";
import { HTTP_STATUS } from "../../../constants/httpConstants";

export const getAllResources = (req: Request, res: Resposne) => {
    const resources = service.getAllResources();
    res.status(HTTP_STATUS.OK).json({
        message: "Resources retrieved",
        count: resources.length,
        data: resources
    });
};

