// CategoryModel.js
import mongoose from 'mongoose';

let Category;

try {
  Category = mongoose.model('Category');
} catch (error) {
  const categorySchema = new mongoose.Schema({
    name: String,
    description: String,
    // other fields
  });

  Category = mongoose.model('Category', categorySchema);
}

export default Category;
