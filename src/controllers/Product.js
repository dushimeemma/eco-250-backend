import { Product } from '../../models';

export default {
  create: async (req, res) => {
    const owner = req.user.id;
    const { name, image, price } = req.body;
    const newProduct = await Product.create({
      name, image, price, owner
    })
    return res.status(201).json({
      message: "Product saved successfully",
      data: newProduct
    })
  },

  getAll: async (req, res) => {
    const allProducts = await Product.findAll({});
    if (!allProducts || allProducts.length === 0)
    {
      return res.status(404).json({
        error: "No products found"
      })
    };
    
    return res.status(200).json({
      data: allProducts
    })
  },

  getOne: async (req, res) => {
    const { id } = req.params;
    const findProduct = await Product.findOne({where: {id}});
    if (!findProduct)
    {
      return res.status(404).json({
        error: "No product found"
      })
    }
    return res.status(200).json({
      data: findProduct
    })
  },

  updateOne: async (req, res) => {
    const { id } = req.params;
    const findProduct = await Product.findOne({ id });
    if (!findProduct)
    {
      return res.status(404).json({
        error: "No product found"
      })
    }
    await findProduct.update({ ...req.body });
    return res.status(200).json({
      message: "Product updated successfully"
    })
  },

  deleteOne: async (req, res) => {
    const { id } = req.params;
    const findProduct = await Product.findOne({ id });
    if (!findProduct)
    {
      return res.status(404).json({
        error: "No product found"
      })
    }
    await findProduct.destroy({
      cascade: true
    })
    return res.status(200).json({
      message: "Product deleted successfully"
    })
  },

	getByOwner: async (req, res)=> {
		const {id} = req.user;
		const findProduct = await Product.findAll({where: {owner: id}});
		if (!findProduct || findProduct.length === 0)
    {
      return res.status(404).json({
        error: "No product found"
      })
    }
    return res.status(200).json({
      data: findProduct
    })
	}

}