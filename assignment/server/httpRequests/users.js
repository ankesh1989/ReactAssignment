const { User } = require("../model/user.mongo");

const httpCreateUser = async (req, res) => {
  const { username, email, password } = req?.body;

  User.findOne({ username }).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    if (user) {
      res.status(409).json({ message: "Username already in use!" });
      return;
    }

    /** Checking existing email */

    User.findOne({ email }).exec(async (err, user) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }
      if (user) {
        res.status(409).json({ message: "Email already in use!" });
        return;
      } else {
        const user = new User({
          ...req?.body,
          confirmed: true,
          blocked: false,
          createdAt: Date.now(),
          updatedAt: Date.now(),
        });

        const result = await User.create(user);
        res.status(200).json(result);
      }
    });
  });
};

const httpGetUsers = async (req, res) => {
  await User.find({}).exec(async (err, users) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    if (users?.length > 0) {
      res.status(200).json(users);
    } else {
      res.status(200).json([]);
    }
  });
};

const httpDeleteUser = async (req, res) => {
  const { userId } = req.params;

  User.findByIdAndDelete({ _id: userId }).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    if (user) {
      res.status(200).json({
        message: "User deleted successfully",
        status: "ok",
        user: { id: user?._id, username: user?.username, email: user?.email },
      });
    }
  });
};

const httpEditUser = async (req, res) => {
  const { userId } = req.params;

  User.findByIdAndUpdate({ _id: userId }, { ...req?.body }).exec(
    (err, user) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }
      if (user) {
        res.status(200).json({
          message: "User updated successfully",
          status: "ok",
          user,
        });
      }
    }
  );
};

module.exports = {
  httpCreateUser,
  httpGetUsers,
  httpDeleteUser,
  httpEditUser,
};
