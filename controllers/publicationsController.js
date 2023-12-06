const Publication = require('../models/Publication');

exports.createPublication = async (req, res) => {
  try {
    const { title, content } = req.body;
    const newPublication = new Publication({ title, content });
    const savedPublication = await newPublication.save();
    res.json(savedPublication);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllPublications = async (req, res) => {
  try {
    const publications = await Publication.find();
    res.json(publications);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getPublicationById = async (req, res) => {
  try {
    const publication = await Publication.findById(req.params.id);
    res.json(publication);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updatePublication = async (req, res) => {
  try {
    const updatedPublication = await Publication.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedPublication);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deletePublication = async (req, res) => {
  try {
    await Publication.findByIdAndDelete(req.params.id);
    res.json({ message: 'Publicação excluída com sucesso' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
