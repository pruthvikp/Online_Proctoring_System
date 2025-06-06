const express = require("express");
const router = express.Router();
const { ReportsController } = require("../controllers/index")

router.get("/", async (req, res) => {
    try {
        const result = await ReportsController.getAllreports()
        return res.status(200).json(result)
    }
    catch (err) {
        return res.status(500).json({ error: err.message })
    }
});
router.post("/getallReportsByUser", async (req, res) => {
    const { username } = req.body;
    try {
        const result = await ReportsController.getallReportsByUser(username)
        return res.status(200).json(result)
    }
    catch (err) {
        return res.status(500).json({ error: err.message })
    }
});

router.get("/:reportId", async (req, res) => {
    try {
        const report = await ReportsController.getReportById(req.params.reportId);
        return res.status(200).json(report);
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
});

router.get("/getAllAttemptedTestsByUsername", async (req, res) => {
    const { username } = req.body;
    try {
        const result = await ReportsController.getAllAttemptedTestsByUsername(username)
        return res.status(200).json(result)
    }
    catch (err) {
        return res.status(500).json({ error: err.message })
    }
});
router.delete("/deleteAllReportsByUsername", async (req, res) => {
    const { username } = req.body;
    try {
        const result = await ReportsController.deleteAllReportsByUsername(username)
        return res.status(200).json(result)
    }
    catch (err) {
        return res.status(500).json({ error: err.message })
    }
});

module.exports = router;