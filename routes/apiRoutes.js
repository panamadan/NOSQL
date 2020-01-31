module.exports = function(app){



  app.get("/api/workouts/range", (req, res) => {
    db.notes.find({}, (error, data) => {
      if (error) {
        res.send(error);
      } else {
        res.json(data);
      }
    });
  });
  
  app.get("/workout", (req, res) => {
    db.notes.findOne(
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
    db.notes.create(
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
    db.notes.update(
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
}