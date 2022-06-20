const { register, login, setavatar, getAllUsers } = require("../controllers/userController");

const router = require("express").Router();

router.post("/register",register);
router.post("/login",login);
router.post("/setavatar/:id",setavatar);
router.get("/allusers/:id",getAllUsers);

module.exports = router;