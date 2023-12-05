const router = require("express").Router();
const Poll = require("../models/poll.models");

router.post("/", async (req, res) => {
    try {
        console.log(req.body);

        const poll = new Poll({
            question: req.body.question,
            option1: req.body.option1,
            option2: req.body.option2,
            option3: req.body.option3
        });

        await poll.save();

        return res.send({ success: true });
    } catch (e) {
        return res.send({ success: false, message: e.message });
    }
});

router.get("/", async (_, res) => {
    try {
        const Polls = await Poll.find();

        let trimmedPollsData = []; 

        for (const poll of Polls) {
            trimmedPollsData.push({
                question: poll.question,
                option1: poll.option1,
                option2: poll.option2,
                option3: poll.option3,
                date: poll.date
            });
        }

        return res.send({ success: true, polls: trimmedPollsData });
    } catch (e) {
        return res.send({ success: false, message: e.message });
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const pollId = req.params.id;

        await Poll.findByIdAndDelete(pollId);

        return res.send({ success: true, message: "Poll deleted successfully" });
    } catch (e) {
        return res.send({ success: false, message: e.message });
    }
});

router.patch("/:id", async (req, res) => {
    try {
        const pollId = req.params.id;

        const updatedPoll = await Poll.findByIdAndUpdate(
            pollId,
            {
                $set: {
                    question: req.body.question,
                    option1: req.body.option1,
                    option2: req.body.option2,
                    option3: req.body.option3,
                },
            },
            { new: true }
        );

        return res.send({ success: true, updatedPoll });
    } catch (e) {
        return res.send({ success: false, message: e.message });
    }
});

module.exports = router;
