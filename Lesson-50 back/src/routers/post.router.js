const express = require("express");
const {
  getAllPost,
  createPost,
  updatePost,
  getSinglePost,
  deletePost,
  changeStatusPost
} = require("../controllers/post.controller");

const postRouter = express.Router();

postRouter.get("/", getAllPost)
postRouter.post("/", createPost)
postRouter.put("/:id", updatePost)
postRouter.get("/:id", getSinglePost)
postRouter.patch("/:id/status", changeStatusPost)
postRouter.delete("/:id", deletePost)


module.exports = postRouter