import { Router } from 'express';
import TreeController from '../controllers/Tree';
import asyncHandler from "../middlewares/asyncHandler";
import { authorization } from "../middlewares/authorization";

const router = new Router();

router.post("/",
  authorization,
  asyncHandler(TreeController.create)
).get("/",
  authorization,
  asyncHandler(TreeController.getAll)
).get("/my-trees",
  authorization,
  asyncHandler(TreeController.getByOnwer)
).get("/:id",
  authorization,
  asyncHandler(TreeController.getOne)
).put("/:id",
  authorization,
  asyncHandler(TreeController.updateOne)
).delete("/:id",
  authorization,
  asyncHandler(TreeController.deleteOne)
)

export default router;