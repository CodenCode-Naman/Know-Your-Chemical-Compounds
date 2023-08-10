const db = require('../models');

const getAllCompounds = async (offset, limit) => {
  try {
    return await db.Compound.findAndCountAll({
      offset,
      limit,
      order: [['id', 'ASC']],
    });
  }
  catch (err) {
    throw new Error(err);
  }
};

const getCompoundById = async (id) => {
  try {
    return await db.Compound.findByPk(id);
  }
  catch (err) {
    throw new Error(err);
  }

};

module.exports = {
  getAllCompounds,
  getCompoundById,
};
