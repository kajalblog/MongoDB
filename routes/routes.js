const express = require("express");
const router = express.Router();
const ObjetId = require("mongoose").Types.ObjectId;
const Employee = require("../models/employee.js");

router.get("/", (req, res) => {
  Employee.find((err, doc) => {
    if (err) {
      console.log("Error in post methos", +err);
    } else {
      res.send(doc);
    }
  });
});
// get single employee

router.get("/:id", (req, res) => {
  if (ObjetId.isValid(req.params.id)) {
    Employee.findById(req.params.id, (err, doc) => {
      if (err) {
        console.log("Error in get employee by id", +err);
      } else {
        res.send(doc);
      }
    });
  } else {
    return res.status(400).send("No record found for " + req.params.id);
  }
});

router.post("/", (req, res) => {
  let emp = new Employee({
    name: req.body.name,
    position: req.body.position,
    dept: req.body.dept,
  });
  emp.save((err, doc) => {
    if (err) {
      console.log("Error in post methos", +err);
    } else {
      res.send(doc);
    }
  });
});
// update api
router.put("/:id", (req, res) => {
  if (ObjetId.isValid(req.params.id)) {
    let emp = {
      name: req.body.name,
      position: req.body.position,
      dept: req.body.dept,
    };
    Employee.findByIdAndUpdate(
      req.params.id,
      { $set: emp },
      { new: true },
      (err, doc) => {
        if (err) {
          console.log("Error in update employee by id", +err);
        } else {
          res.send(doc);
        }
      }
    );
  } else {
    return res.status(400).send("No record found for " + req.params.id);
  }
});

// delete api
router.delete("/:id", (req, res) => {
  if (ObjetId.isValid(req.params.id)) {
    Employee.findByIdAndRemove(req.params.id, (err, doc) => {
      if (err) {
        console.log("Error in delete employee by id", +err);
      } else {
        res.send(doc);
      }
    });
  } else {
    return res.status(400).send("No record found for " + req.params.id);
  }
});

module.exports = router;
