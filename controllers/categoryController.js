import Category from  '../models/CategoryModel.js';

// Create Category
export const createCategoryController = async (req, res) => {
    try {
        const { name, description } = req.body;
        if (!name || !description) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        const category = new Category({ name, description });
        await category.save();

        res.status(201).json({ success: true, message: 'Category created successfully', category });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

// Get Categories
export const getCategoryController = async (req, res) => {
    try {
        const categories = await Category.find({});
        res.status(200).json({ categories });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};
