import express from "express";
// import {login ,patientRegister} from "../controller/userController.js";
import {
  getAllMessages,
  sendMessage,
} from "../controller/messageController.js";
import { isAdminAuthenticated } from "../middlewares/auth.js";
const router = express.Router();

router.post("/send", sendMessage);
// router.post("/login", login);

router.get("/getall", isAdminAuthenticated, getAllMessages);

export default router;