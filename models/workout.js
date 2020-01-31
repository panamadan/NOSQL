const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    
  
//   / day - type: Date and default to current date.
  day: {
    type: Date,
    default: Date.now
  },
//   exercises - an Array of Objects.
// - The fields for the objects inside the "exercises" array are:
// -       type - type: String
// -       name - type: String
// -       duration - type: Number
// -       weight - type: Number
// -       reps - type: Number
// -       sets - type: Number
// -       distance: type: Number
exercises : 
    [{
        type: {type: String},
        name : {type: String},
        duration : {type: Number},
        weight: {type: Number},
        reps: {type: Number},
        sets: {type: Number},
        distance: {type: Number},
    }
    ]


  
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;