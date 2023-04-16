import express from "express";
import { addNewRoom, getRooms } from "../../controller/rooms/rooms.controllers";
const router = express.Router();

router.get("/", getRooms);
//add
router.post("/", addNewRoom);
export default router;
