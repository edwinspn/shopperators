import express from "express";
import { api } from "./api";
import session from "cookie-session";
import { auth } from "./auth";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const app = express();

app.use(
  session({
    secret: "AssnhKiHtFcMRWNUjfeJPtDsp",
  })
);
app.use(api);
app.use(auth);

if (!process.env["VITE"]) app.listen(5001);
