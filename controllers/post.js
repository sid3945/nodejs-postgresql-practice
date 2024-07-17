const  createPost  = require('../models/post'); // Import the post model

const create = async (req, res) => {
    console.log(req.body)
  const { title, content } = req.body; // Get data from request body
  try {
    const newPost = await createPost(title, content);
    res.status(201).json(newPost); // Created (201) status with the created post data
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Error creating post' }); // Internal Server Error (500)
  }
};

module.exports = create ;
