// Create a Mongoose model for weather data
import mongoose from "mongoose";

const WeatherSchema = new mongoose.Schema({
  city: String,
  country: String,
  temperature: Number,
  description: String,
  icon: String,
});

export default mongoose.model('weather', WeatherSchema); 