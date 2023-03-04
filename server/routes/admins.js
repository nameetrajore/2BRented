const Admin = require("../models/admins");

const getAdmin = (req, res) => {
    res.send({type:"GET"})
}
const postAdmin = (req, res) => {
    res.send({type:"POST"})
  };
  
const putAdmin = (req, res) => {
    res.send({ type: "PUT", id: req.params.id });
  }
  
const deleteAdmin = (req, res) => {
    res.send({ type: "DELETE" }
  )};
  
module.exports = {
getAdmin,
postAdmin,
putAdmin,
deleteAdmin
};
  