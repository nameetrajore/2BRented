const Owner = require("../models/owners");

const getOwner = async (req, res) => {
  try {
    const owner = await Owner.find(req.query);
    res.json(owner);
  } catch (err) {
    res.status(500).json({ message: err.message });
  } 
}
const postOwner = async (req, res) => {
  const owner = new Owner({
    ownerName : req.body.ownerName,
    ownerAddress : req.body.ownerAddress,
    ownerPhoneNumber : req.body.ownerPhoneNumber,
    ownerEmail : req.body.ownerEmail,
    ownerPassword : req.body.ownerPassword
  });

  try {
    const newOwner = await owner.save();
    res.status(201).json(newOwner);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
 
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
  