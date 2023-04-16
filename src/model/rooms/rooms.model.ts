import mongoose from "mongoose";
import { Schema, Document, Model } from "mongoose";
export interface IRooms {
  _id: string;
  title: string;
  description: string;
  correctSolution: string;
}
const roomsSchema: Schema = new Schema<IRooms>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  correctSolution: { type: String, required: false },
});

const RoomsModel: Model<IRooms> = mongoose.model<IRooms>("rooms", roomsSchema);

export default RoomsModel;
