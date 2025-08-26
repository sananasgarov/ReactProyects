const readFileHelper = require("../helpers/readFile");
const writeFileHelper = require("../helpers/writeFile");

const getAllPost = (_, res) => {
  try {
    const posts = readFileHelper("posts");

    res.status(200).json({
      posts: posts,
      message: "Fetch posts success",
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server error",
    });
  }
};
const createPost = (req, res) => {
  try {
    const { content, file, userId } = req.body;

    if (!content || !userId) {
      return res.status(400).json({
        message: "Content and userId are required",
      });
    }

    const posts = readFileHelper("posts");

    const newPost = {
      id: posts.length ? posts[posts.length - 1].id + 1 : 1,
      userId,
      content,
      file: file || null
    };

    posts.push(newPost);

    writeFileHelper(posts, "posts");

    res.status(201).json({ post: newPost });
  } catch (error) {
    res.status(500).json({ message: "Internal Server error" });
  }
};

const getSinglePost = (req, res) => {
  try {
    const { id } = req.params;
    const posts = readFileHelper("posts");
    const post = posts.find((post) => post.id === id);

    if (!post) {
      return res.status(404).json({
        message: "Post not found",
      });
    }

    res.status(200).json({
      post,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server error",
    });
  }
};

const updatePost = (req, res) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;

    const posts = readFileHelper("posts");
    const postIndex = posts.findIndex((post) => post.id === id);
    if (postIndex === -1) {
      return res.status(404).json({
        message: "Post not found",
      });
    }

    const postExists = posts.find((post) => post.title === title);
    if (postExists) {
      return res.status(400).json({
        message: "Post already exists",
      });
    }

    if (title) {
      posts[postIndex].title = title;
    }

    if (content) {
      posts[postIndex].content = content;
    }

    writeFileHelper(posts, "posts");

    res.status(200).json({
      post: posts[postIndex],
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server error",
    });
  }
};

const changeStatusPost = (req, res) => {
  try {
    const { id } = req.params;

    const posts = readFileHelper("posts");
    const postIndex = posts.findIndex((post) => post.id === id);

    if (postIndex === -1) {
      return res.status(404).json({
        message: "Post not found",
      });
    }

    posts[postIndex].isActive = !posts[postIndex].isActive;

    writeFileHelper(posts, "posts");

    res.status(200).json({
      message: "Post status changed successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server error",
    });
  }
};

const deletePost = (req, res) => {
  try {
    const { id } = req.params;

    const posts = readFileHelper("posts");
    const postIndex = posts.findIndex((post) => post.id === id);

    if (postIndex === -1) {
      return res.status(404).json({
        message: "Post not found",
      });
    }

    posts.splice(postIndex, 1);

    writeFileHelper(posts, "posts");

    res.status(200).json({
      message: "Post deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server error",
    });
  }
};

module.exports = {
  getAllPost,
  createPost,
  getSinglePost,
  updatePost,
  changeStatusPost,
  deletePost,
};
