import User from "../../models/user.model.js";
import bcryptjs from 'bcryptjs';
import { errorHandler } from "../utils/error.js";

export const signup = async (req, res, next) => {
    const { username, password, email } = req.body;

    if (!username || !password || !email || username === '' || password === '' || email === '') {
        // return res.status(400).json({ message: "All fields are required" });
        next(errorHandler(400, "All fields are required"));
    }

    const hashedPassword = bcryptjs.hashSync(password, 10);
    const newUser = new User({
        username,
        email,
        password: hashedPassword,
    })

    try {

        await newUser.save();
        res.json('Signup successful');

    } catch (error) {
        next(error);
    }


}