import { Schema, model, models } from "mongoose";

const StockSchema = new Schema({
  ticker: { type: String, required: true },
  exDate: { type: String, required: true },
  yield: { type: String, required: true },
  dividend: { type: Number, required: true },
  price: { type: Number, required: true },
}, { timestamps: true });

export default models.Stock || model("Stock", StockSchema);
