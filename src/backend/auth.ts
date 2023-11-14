import express, { Router } from "express";
import { User } from "../shared/User";
import { UsersController } from "./controllers/UsersController";
import { remult } from "remult";
import { api } from "./api";

export const auth = Router();

auth.use(express.json());

auth.post("/api/signIn", api.withRemult, async (req, res) => {
  const userInfo = req.body as User;
  const user = await UsersController.findUser({
    username: userInfo.username,
    password: userInfo.password,
  });

  if (user) {
    req.session!["user"] = user;
    res.json(user);
  } else {
    res.status(401).json("Invalid login information.");
  }
});

auth.post("/api/signOut", api.withRemult, (req, res) => {
  req.session!["user"] = null;
  res.json("signed out");
});

auth.post("/api/register", api.withRemult, async (req, res) => {
  const userRepo = remult.repo(User);

  const userInfo = req.body as User;

  const user = userRepo.create(userInfo);

  if (user) {
    await userRepo.save(user);
    
    req.session!["user"] = user;
    res.json(user);
  } else {
    res.status(401).json("Invalid login information.");
  }
});

auth.get("/api/user", (req, res) => res.json(req.session!["user"]));
