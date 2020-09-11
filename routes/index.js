const express = require("express");
const router = express.Router();
const { isAuth, noAuth } = require("../middleware/auth");

router.get("/", noAuth, (req, res) => {
  res.render("login");
});

router.get("/profil", isAuth, (req, res) => {
  // console.log(req.user);
  res.render("profil", {
    name: req.user.firstName,
    lastName: req.user.lastName,
    image: req.user.image,
  });
});
router.get("/logout", (req, res) => {
  req.logout();
  req.session.destroy();
  res.redirect("/");
});

module.exports = router;
