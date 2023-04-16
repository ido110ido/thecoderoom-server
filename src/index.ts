import express from "express";
import roomsRoutes from "./routes/rooms/rooms.routes";

const router = express.Router();
router.use("/rooms", roomsRoutes);

export default router;
