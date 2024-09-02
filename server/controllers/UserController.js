const { User } = require('../models/index')
const { compareSync } = require('bcryptjs')
const { signToken } = require('../helpers/jwt')

class UserController {
    static async loginUser(req,res,next) {
        try {
            let {username, password} = req.body
            if(!username || !password) throw({name: "InvalidInput"})
            
            let user = await User.findOne({where: { username }})
            if(!user || !compareSync(password, user.password)) throw({name: "InvalidUser"})
            
            res.status(200).json({ access_token: signToken( { id: user.id} )})
        } catch (error) {
            next(error)
        }
    }

    static async registerUser(req,res,next) {
        try {
            let {fullName, username, password} = req.body
            
            let user = await User.create({fullName, username, password})
            
            res.status(201).json({
                id: user.id,
                username: user.username
            })
        } catch (error) {
            next(error)
        }
    }
}

module.exports = UserController;