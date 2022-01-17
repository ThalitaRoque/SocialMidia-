const Redesocial = require("./redesociales.model");
const { setError } = require("../../utils/error/error");
const { deleteFile } = require("../../middlewares/deleteFile");

const postNewRedesocial = async (req, res, next) => {
  try {
    const newRedesocial = new Redesocial();
    newRedesocial.name = req.body.name;
    newRedesocial.yearsonfundation = req.body.yearsonfundation;
    newRedesocial.on_air = req.body.on_fundation;
    newRedesocial.creator = req.body.creator;
    if (req.file) {
      newRedesocial.img = req.file.path;
    }
    const redesocialDB = await newRedesocial.save();
    return res.status(201).json(redesocialDB);
  } catch (error) {
    return next(setError(500, "Rede Social not saved"));
  }
};

const getAllRedesociales = async (req, res, next) => {
  try {
    const redesocialesDB = await Redesocial.find().populate('creator')
    res.status(200).json(redesocialDB);
  } catch (error) {
    return next(setError(500, "Rede Social failed server"));
  }
};

const getRedesocial = async (req, res, next) => {
  try {
    const { id } = req.params;
    const redesocialDB = await Redesocial.findById(id).populate('creator')
    if (!redesocialDB) {
      return next(setError(404, "Rede Social not found"));
    }
    return res.status(200).json(redesocialDB);
  } catch (error) {
    return next(setError(500, "Rede Social server error"));
  }
};

const patchRedesocial = async (req, res, next) => {
  try {
    const { id } = req.params;
    const patchRedesocial = new Redesocial(req.body);
    patchRedesocial._id = id;
    if (req.file) {
      patchRedesocial.img = req.file.path;
    }
    const redesocialDB = await Redesocial.findByIdAndUpdate(id, patchRedesocial);
    if (!redesocialDB) {
      return next(setError(404, "Rede Social not found"));
    }
    if (redesocialDB.img) deleteFile(redesocialDB.img);
    return res.status(200).json({ new: patchRedesocial, old: redesocialDB });
  } catch (error) {
    return next(setError(500, "Rede Social Patch server error"));
  }
};

const deleteRedesocial = async (req, res, next) => {
  try {
    const { id } = req.params;
    const redesocialDB = await Redesocial.findByIdAndDelete(id);
    if (!redesocialDB) {
      return next(setError(404, "Rede Social not found"));
    }
    if (redesocialDB.img) deleteFile(redesocialDB.img);
    return res.status(200).json(redesocialDB);
  } catch (error) {
    return next(setError(500, "Rede Social removed server error"));
  }
};

module.exports = {
  postNewRedesocial,
  getAllRedesociales,
  getRedesocial,
  patchRedesocial,
  deleteRedesocial,
};
