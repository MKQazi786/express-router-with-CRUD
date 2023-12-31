import express from "express";

let router = express.Router();

import  authRouter  from "./routes/auth.mjs";
import  commentRouter from "./routes/comment.mjs";
import  feedRouter  from "./routes/feed.mjs";
import  postRouter  from "./routes/post.mjs";


router.use("/api/v2", authRouter)

// router.use((req, res, next) => {
//     if (token === "valid") {
//         next();
//     } else {
//         res.send({ message: "invalid token" })
//     }
// })

router.use("/api/v2", commentRouter)

router.use("/api/v2", feedRouter)

router.use("/api/v2", postRouter)


export default router