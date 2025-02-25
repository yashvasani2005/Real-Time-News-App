import express from "express";
import { getTrendingNews, postNews } from "../controllers/newsController.js";

const router = express.Router();
router.get("/trending", getTrendingNews);
router.post("/", postNews);

export default router;
