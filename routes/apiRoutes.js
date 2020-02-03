// var db = require("../models");
const mongojs = require("mongojs");

module.exports = function(app,db){

 app.get("/api/workouts/range", (req, res) => {
    db.workouts.find({}, (error, data) => {
      if (error) {
        res.send(error);
      } else {
        res.json(data);
      }
    });
  });
  
  app.get("/workout", (req, res) => {
    db.workouts.findOne(
      {
        _id: mongojs.ObjectId(req.params.id)
      },
      (error, data) => {
        if (error) {
          res.send(error);
        } else {
          res.send(data);
        }
      }
    );
  });
  app.post("/update/:id", (req, res) => {
    db.workouts.create(
      {
        _id: mongojs.ObjectId(req.params.id)
      },
      {
        $set: {
          title: req.body.title,
          note: req.body.note,
          modified: Date.now()
        }
      },
      (error, data) => {
        if (error) {
          res.send(error);
        } else {
          res.send(data);
        }
      }
    );
  });
  app.put("/api/workouts/:id", (req, res) => {
      console.log(req.body);
      
    db.workouts.update(
      {
        _id: mongojs.ObjectId(req.params.id)
      },
      {
        $set: {
          title: req.body.title,
          note: req.body.note,
          modified: Date.now()
        }
      },
      (error, data) => {
        if (error) {
          res.send(error);
        } else {
          res.send(data);
        }
      }
    );
  });
  app.post("/api/workouts", (req, res) => {
      console.log(req.body);
      
    db.workouts.insert(
        // {
        //   _id: mongojs.ObjectId(req.params.id)
        // },
        // {
        //   $set: {
        //     title: req.body.title,
        //     note: req.body.note,
        //     modified: Date.now()
        //   }
        // },
        {exercises:[{
            type:"benchpress",
        }]},
        (error, data) => {
          if (error) {
            res.send(error);
          } else {
            res.send(data);
          }
        }
      );
    });
}