import express, { Express } from "express";
import cors from "cors";
import { getHelmetConfig } from "../src/config/helmetConfig";
import { getCorsOptions } from "../src/config/corsConfig";
import setupSwagger from "../src/config/swagger";

// Initialize Express application.
const app: Express = express();

// Apply basic Helmet security
app.use(getHelmetConfig());

app.use(cors(getCorsOptions()));

app.use(express.json());

// Define a route.
app.get("/", (req, res) => {
    res.send("Hello, World!");
});

// Health check.
app.get("/api/v1/health", (req, res) => {
    res.json({
        status: "OK",
        uptime: process.uptime(),
        timestamp: new Date().toISOString(),
        version: "1.0.0",
    });
});

// Setup Swagger
setupSwagger(app);

export default app;
