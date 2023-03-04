const Owner = require("../models/owners");

const getOwner = (req, res) => {
    res.send({type:"GET"})
}
const postOwner = (req, res) => {
    res.send({type:"POST"})
  };
  
const putOwner = (req, res) => {
    res.send({ type: "PUT", id: req.params.id });
  }
  
const deleteOwner = (req, res) => {
    res.send({ type: "DELETE" }
  )};
  
module.exports = {
getOwner,
postOwner,
putOwner,
deleteOwner
};
  