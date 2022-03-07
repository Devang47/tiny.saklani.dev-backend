import mongoose from 'mongoose';
const { Schema } = mongoose;

export const LinkSchema = new Schema({
  url: {
    type: String,
    required: true,
  },
  short: {
    type: String,
    required: true,
  },
  fullShortUrl: {
    type: String, 
    required: true
  },
  created: {
    type: Date,
    default: new Date()
  },
});
export default mongoose.model('Shorten', LinkSchema);
