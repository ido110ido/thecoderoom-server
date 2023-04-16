import RoomsModel, { IRooms } from "../../model/rooms/rooms.model";

//getting data
//get all main subs - its working :)
export const getRoomsData = async () => {
  try {
    return await RoomsModel.find();
  } catch (error: any) {
    throw Error("Error while getting rooms data:" + error.message);
  }
};
//adding data-its working :)
export const addingRoom = async (room: IRooms) => {
  try {
    const _newRoom = await RoomsModel.create(room);
    await _newRoom.save();

    return await getRoomsData();
  } catch (error: any) {
    throw new Error("Failed to add room: " + error.message);
  }
};
