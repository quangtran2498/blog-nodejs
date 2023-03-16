import { PostModel } from "../models/PostModal.js";
import { RegisterModal } from "../models/register.js";
export const register = async (req, res) => {
  try {
    const { userName, password } = req.body;
    console.log(req.body);
    RegisterModal.findOne({
      userName: userName,
    })
      .then((data) => {
        if (data) {
          res.status(500).json("tai khoan da ton tai");
        } else {
          RegisterModal.create({
            userName: userName,
            password: password,
          });
          res.status(200).json("tao tai khoan thanh cong");
        }
        console.log(data);
      })
      .catch((error) => {
        res.status(500).json("da co loi xay ra");
      });
  } catch (error) {
    res.status(500).json({ error: err });
  }
};
export const login = async (req, res) => {
  try {
    const { userName, password } = req.body;
    console.log(req.body);
    RegisterModal.findOne({
      userName: userName,password:password
    })
      .then((data) => {
        if (data) {
          res.status(200).json("dang nhap thanh cong");
        } else {
          
          res.status(500).json("sai ten dang nhap hoac mat khau");
        }
      })
      .catch((error) => {
        res.status(500).json("da co loi xay ra");
      });
  } catch (error) {
    res.status(500).json({ error: err });
  }
};
export const getPosts = async (req, res) => {
  try {
    const posts = await PostModel.find();
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const createPost = async (req, res) => {
  try {
    const newPost = req.body;

    const post = new PostModel(newPost);
    await post.save();

    res.status(200).json(post);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const updatePost = async (req, res) => {
  try {
    const updatePost = req.body;
    console.log(req.body);
    const post = await PostModel.findOneAndUpdate(
      { _id: updatePost._id },
      updatePost,
      { new: true }
    );

    res.status(200).json(post);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
