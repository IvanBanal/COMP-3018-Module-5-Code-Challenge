import express, { Express } from "express";
import setupSwagger from "../src/config/swagger";

// Initialize Express application.
const app: Express = express();

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
