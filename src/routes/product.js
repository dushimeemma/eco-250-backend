import { Router } from 'express';
import productValidator from '../middlewares/validations/product';
import ProductController from '../controllers/Product';
import asyncHandler from "../middlewares/asyncHandler";
import { authorization } from "../middlewares/authorization";

const router = new Router();

router.post("/",
  authorization,
  productValidator.create,
  asyncHandler(ProductController.create)
).get("/",
  authorization,
  asyncHandler(ProductController.getAll)
).get("/my-products",
  authorization,
  asyncHandler(ProductController.getByOwner)
).get("/:id",
  authorization,
  asyncHandler(ProductController.getOne)
).put("/:id",
  authorization,
  asyncHandler(ProductController.updateOne)
).delete("/:id",
  authorization,
  asyncHandler(ProductController.deleteOne)
)

export default router;
