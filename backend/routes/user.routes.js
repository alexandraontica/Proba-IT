const router = require("express").Router();
const User = require("../models/user.models");

router.post("/", async (req, res) => {
    try {
        console.log(req.body);

        const user = new User({
        email: req.body.email,
        password: req.body.password
    });

    const duplicateUser = await User.findOne({email: user.email});
    if(duplicateUser) {
        return res.send({succes: false, message: "User with that email already exists!"});
    }

    await user.save();

    return res.send({succes: true});
    } catch (e) {
        return res.send({succes: false, message: e.message});
    }
    
})

router.get("/", async(_, res) => {
    try {
        const users = await User.find();

        let trimmedUsersData;
        for(const user of userData) {
            trimmedUsersData.push({
                email: user.email,
                date: user.date
            })
        }

        return res.send({succes: true, users});
    } catch (e) {
        return res.send({succes: false, message: e.message});
    }
})

module.exports = router;