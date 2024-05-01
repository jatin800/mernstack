import express from "express";
import {
  createuser,
  deleteUser,
  readAllUser,
  readOneUser,
  updateUser,
} from "../controller/userController.js";

const router = express.Router();

router.post("/createuser", createuser);
router.get("/readalluser", readAllUser);
router.get("/read/:id", readOneUser);
router.put("/updateuser/:id", updateUser);
router.delete("/deleteuser/:id", deleteUser);

export default router;
