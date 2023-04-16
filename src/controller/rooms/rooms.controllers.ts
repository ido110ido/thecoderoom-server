import { Request, Response } from "express";
import { addingRoom, getRoomsData } from "../../services/rooms/rooms.services";

//get controllers
export const getRooms = async (req: Request, res: Response) => {
  try {
    const rooms = await getRoomsData();
    return res.status(200).json({
      status: 200,
      data: rooms,
      message: "Successfully rooms data Retrieved",
    });
  } catch (e: any) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};
//add controllers
export const addNewRoom = async (req: Request, res: Response) => {
  try {
    const rooms = await addingRoom(req.body);
    return res.status(200).json({
      status: 200,
      data: rooms,
      message: "Successfully add a room",
    });
  } catch (error: any) {
    return res.status(400).json({ status: 400, message: error.message });
  }
};
