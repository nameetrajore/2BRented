const prisma = require("../lib/prisma");

const getQuery = async (req, res) => {
  try {
    const queries = await prisma.query.findMany();
    res.json(queries.map((q) => ({ ...q, _id: q.id })));
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const postQuery = async (req, res) => {
  try {
    const query = await prisma.query.create({ data: req.body });
    res.status(201).json({ ...query, _id: query.id });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = { getQuery, postQuery };
