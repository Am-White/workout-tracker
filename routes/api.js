const router = require("express").Router();
const Workout = require("../models/workout.js");

router.post("/api/workouts", (req,res) => {
    Workout.create({}).then(dbWorkout => {
        res.json(dbWorkout);
    }).catch(err => {
        res.json(err);
    });
});
router.put("/api/workouts:id", () => {

});
router.get("/api/workouts", (req,res) => {

});
router.get("/api/workouts/range", (req,res) => {

});
router.delete("/api/workouts", (req,res) => {
    Workout.findByIdAndDelete(body.id)
    .then(() => {
        res.json(true);
    }).catch(err => {
        res.json(err);
    });
});

module.exports = router;