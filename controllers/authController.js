import { comparePassword, hashPassword } from "../helpers/authHelper.js";
import userModel from "../models/userModel.js";
import JWT from "jsonwebtoken";

// Register Controller
export const registerController = async (req, res) => {
    try {
        const { name, email, password, phone, address } = req.body;

        // Validation
        if (!name || !email || !password || !phone || !address) {
            return res.status(400).json({ success: false, message: 'All fields are required' });
        }

        // Check for existing user
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(200).json({
                success: false,
                message: 'User Already Registered',
            });
        }

        // Hash password
        const hashedPassword = await hashPassword(password);

        // Save user
        const user = new userModel({ name, email, phone, address, password: hashedPassword });
        await user.save();

        res.status(201).json({
            success: true,
            message: 'New User Registered',
            user,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Error Occurred in Registration',
            error,
        });
    }
};

// Login Controller
export const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validation
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: 'Invalid email or password',
            });
        }

        // Check user existence
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'Email is not registered',
            });
        }

        // Compare password
        const isMatch = await comparePassword(password, user.password);
        if (!isMatch) {
            return res.status(400).json({
                success: false,
                message: 'Invalid Password',
            });
        }

        // Generate token
        const token = JWT.sign(
            { _id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: "7d" }
        );

        res.status(200).json({
            success: true,
            message: 'Login Successful',
            user: {
                _id: user._id,
                name: user.name,
                email: user.email,
                phone: user.phone,
                address: user.address,
                role: user.role,
            },
            token,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Error Occurred in Logging in',
            error,
        });
    }
};
