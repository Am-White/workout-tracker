const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema (
    { 
        day:{
            type: DataCue,
            default: () => Date()
        },
        exercises: [
            {
                type: {

                },
                name: {
    
                },
                duration: {
    
                },
                weight: {

                },
                reps: {

                },
                sets: {

                },
                distance: {
                    
                }
            }
        ]
    }
)