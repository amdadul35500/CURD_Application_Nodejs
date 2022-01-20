const express = require("express");
const route = express.Router();

const { homeRoutes, add_user, update_user } = require("../services/render");
const { remove, create, find, update } = require("../controller/controller");

/**
 *  @description Root Route
 *  @method GET /
 */
route.get("/", homeRoutes);

/**
 *  @description add users
 *  @method GET /add-user
 */
route.get("/add-user", add_user);

/**
 *  @description for update user
 *  @method GET /update-user
 */
route.get("/update-user", update_user);

// API
route.post("/api/users", create);
route.get("/api/users", find);
route.put("/api/users/:id", update);
route.delete("/api/users/:id", remove);

module.exports = route;
