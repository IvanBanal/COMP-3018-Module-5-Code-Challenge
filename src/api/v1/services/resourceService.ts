import { Resource } from "../models/resource";
import { resources } from "../data/resources";

export const getAllResources = () => {
    return resources;
};

export const getResourceById = (id: number) => {
    return resources.find(resources => resources.id === id);
};

export const createResource = (data: Partial<Resource>) => {
    const newResource: Resource = {
        id: resources.length + 1,
        title: data.title!,
        type: data.type!,
        url: data.url!,
        description: data.description || "",
        createdAt: new Date().toISOString()
    };
    
    resources.push(newResource);
    return newResource;
};