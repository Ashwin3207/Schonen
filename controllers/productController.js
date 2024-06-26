import Product from '../models/ProductModel.js';

// Create Product
export const createProductController = async (req, res) => {
    try {
        const { name, description, price, category, quantity, photo } = req.body;
        if (!name || !description || !price || !category || !quantity || !photo) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        const product = new Product({ name, description, price, category, quantity, photo });
        await product.save();

        res.status(201).json({ success: true, message: 'Product created successfully', product });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

// Get Products by Category
export const getProductsByCategoryController = async (req, res) => {
    try {
        const { categoryId } = req.params;
        const products = await Product.find({ category: categoryId });
        if (products.length === 0) {
            return res.status(404).json({ message: 'No products found' });
        }

        res.status(200).json({ products });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};
