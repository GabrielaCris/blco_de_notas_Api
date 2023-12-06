const Comment = require('../models/Comment');

exports.createComment = async (req, res) => {
  try {
    const { publicationId, content } = req.body;
    const newComment = new Comment({ publicationId, content });
    const savedComment = await newComment.save();
    res.json(savedComment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getCommentsByPublication = async (req, res) => {
  try {
    const comments = await Comment.find({ publicationId: req.params.id });
    res.json(comments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateComment = async (req, res) => {
  try {
    const updatedComment = await Comment.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedComment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteComment = async (req, res) => {
  try {
    await Comment.findByIdAndDelete(req.params.id);
    res.json({ message: 'Comentário excluído com sucesso' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
