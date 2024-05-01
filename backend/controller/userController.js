import User from "../model/userModel.js";

export const createuser = async (req, res) => {
  try {
    const dataBody = req.body;
    const user = new User(dataBody);
    const userCreated = await user.save();
    res.send(userCreated);
  } catch (error) {
    console.log("Error in CreateUser", error);
    res.status(500).send(error);
  }
};

export const readAllUser = async (req, res) => {
  try {
    const userData = await User.find({});
    res.send(userData);
  } catch (error) {
    console.log("Error in ReadAllUser", error);
    res.status(500).send(error);
  }
};

export const readOneUser = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findById({ _id: id });
    res.send(user);
  } catch (error) {
    console.log("Error in ReadOneUser", error);
    res.status(500).send(error);
  }
};

export const updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    res.send(user);
  } catch (error) {
    console.log("Error Updating User", error);
    res.status(500).send(error);
  }
};

export const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findByIdAndDelete({ _id: id });
    res.send(user);
  } catch (error) {
    console.log("Error Deleting User", error);
    res.status(500).send(error);
  }
};
