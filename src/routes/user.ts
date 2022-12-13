import express from "express";
const router = express.Router();

import { getUser, getUsers, createUser } from "../controller/controller";

router.get("/user/", getUsers);
router.get("/user/:id", getUser);
router.post("/user/create-new-user", createUser);

export default router;
