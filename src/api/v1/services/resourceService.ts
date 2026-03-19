import { Resource } from "../models/resource";
import { resources } from "../data/resources";

export const getAllResources = () => {
    return resources;
};

export const getResourceById = (id: number) => {
    return resources.find(resources => resources.id === id);
};

