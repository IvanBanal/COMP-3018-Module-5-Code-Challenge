import { Router } from "express";
import * as controller from "../controllers/resourceController";

const router = Router();

// Define routes
/**
 * @openapi
 * /resources:
 *   get:
 *     summary: Retrieve all resources
 *     description: Get a list of all educational resources
 *     tags: [Resources]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: Resources retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Resources retrieved"
 *                 count:
 *                   type: number
 *                   example: 4
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: number
 *                       title:
 *                         type: string
 *                         example: "Express.js Guide"
 *                       type:
 *                         type: string
 *                         enum: [article, video, tutorial, documentation]
 *                       url:
 *                         type: string
 *                         example: "https://expressjs.com/en/guide"
 *                       description:
 *                         type: string
 *                         example: "Official Express.js documentation"
 *                       createdAt:
 *                         type: string
 *                         format: date-time
 *       '401':
 *         description: Unauthorized - Missing or invalid authentication token
 *       '500':
 *         description: Internal server error
 */
router.get("/resources", controller.getAllResources);

/**
 * @openapi
 * /resources/{id}:
 *   get:
 *     summary: Retrieve a single resource
 *     description: Get details of a resource by its ID
 *     tags: [Resources]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: number
 *     responses:
 *       '200':
 *         description: Resource retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Resource retrieved"
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: number
 *                     title:
 *                       type: string
 *                       example: "Express.js Guide"
 *                     type:
 *                       type: string
 *                       enum: [article, video, tutorial, documentation]
 *                     url:
 *                       type: string
 *                       example: "https://expressjs.com/en/guide"
 *                     description:
 *                       type: string
 *                       example: "Official Express.js documentation"
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *       '404':
 *         description: Resource not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Resource not found"
 *       '401':
 *         description: Unauthorized - Missing or invalid authentication token
 *       '500':
 *         description: Internal server error
 */
router.get("/resources/:id", controller.getResourceById);

/**
 * @openapi
 * /resources:
 *   post:
 *     summary: Create a new resource
 *     description: Add a new educational resource
 *     tags: [Resources]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - type
 *               - url
 *             properties:
 *               title:
 *                 type: string
 *                 minLength: 2
 *                 maxLength: 100
 *                 example: "New Resource"
 *               type:
 *                 type: string
 *                 enum: [article, video, tutorial, documentation]
 *                 example: "article"
 *               url:
 *                 type: string
 *                 example: "https://example.com/new"
 *               description:
 *                 type: string
 *                 example: "A new resource"
 *     responses:
 *       '201':
 *         description: Resource created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Resource created"
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: number
 *                     title:
 *                       type: string
 *                     type:
 *                       type: string
 *                     url:
 *                       type: string
 *                     description:
 *                       type: string
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *       '400':
 *         description: Invalid input data
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 error:
 *                   type: string
 *                   example: "Missing required field: title"
 *       '401':
 *         description: Unauthorized - Missing or invalid authentication token
 *       '500':
 *         description: Internal server error
 */
router.post("/resources", controller.createResource);

/**
 * @openapi
 * /resources/{id}:
 *   put:
 *     summary: Update an existing resource
 *     description: Modify an existing educational resource by ID
 *     tags: [Resources]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: number
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: "Updated Resource"
 *               type:
 *                 type: string
 *                 enum: [article, video, tutorial, documentation]
 *                 example: "video"
 *               url:
 *                 type: string
 *                 example: "https://example.com/updated"
 *               description:
 *                 type: string
 *                 example: "Updated description"
 *     responses:
 *       '200':
 *         description: Resource updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Resource updated"
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: number
 *                     title:
 *                       type: string
 *                     type:
 *                       type: string
 *                     url:
 *                       type: string
 *                     description:
 *                       type: string
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *       '404':
 *         description: Resource not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Resource not found"
 *       '401':
 *         description: Unauthorized - Missing or invalid authentication token
 *       '500':
 *         description: Internal server error
 */
router.put("/resources/:id", controller.updateResource);

/**
 * @openapi
 * /resources/{id}:
 *   delete:
 *     summary: Delete a resource
 *     description: Remove a resource by its ID
 *     tags: [Resources]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: number
 *     responses:
 *       '200':
 *         description: Resource deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Resource deleted"
 *       '404':
 *         description: Resource not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Resource not found"
 *       '401':
 *         description: Unauthorized - Missing or invalid authentication token
 *       '500':
 *         description: Internal server error
 */
router.delete("/resources/:id", controller.deleteResource);

export default router;

