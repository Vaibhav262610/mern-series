const User = require("../models/user-model")
const bcrypt = require('bcryptjs')


const home = async (req, res) => {
    try {
        res.status(200).json({ msg: "WELCOME TO THE ROUTER PAGE" })
    } catch (error) {
        console.log("ERROR");
    }
}

const register = async (req, res) => {
    try {
        // console.log(req.body);
        const { username, phone, email, password } = req.body

        const userExist = await User.findOne({ email })

        if (userExist) {
            return res.status(400).json({ msg: "Email already exist" })
        }

        const userCreated = await User.create({ username, email, phone, password })

        res.status(200).json({ msg: "Registration Successful", token: await userCreated.generateToken(), userId: userCreated._id.toString() })
    } catch (error) {
        console.log("ERROR");
    }
}


const login = async (req, res) => {
    try {
        const { email, password } = req.body

        const userExist = await User.findOne({ email })
        console.log(userExist);


        if (!userExist) {
            return res.status(400).json({ msg: "Invalid Credentials " })
        }

        var user;

        if (password == userExist.password) {
            user = true
        } else {
            user = false
        }

        if (user) {
            return res.status(200).json({ msg: "Login Successful", token: await userExist.generateToken(), userId: userExist._id.toString() })
        }
        else {
            return res.status(401).json({ msg: "Invalid Email or Password" })
        }

    } catch (error) {
        res.status(500).json("internal server error")
    }
}


module.exports = { home, register, login }