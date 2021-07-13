import Joi from "joi";

export default {
  create: (req, res, next) => {
    const schema = Joi.object({
      name: Joi.string().required().label('Name'),
      image: Joi.string().required().label('Image'),
      price: Joi.string().required().label('Price'),
    });
  
    const { error } = schema.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });
    next();
  },

  update: (req, res, next) => {
    const schema = Joi.object({
      name: Joi.string().label('Name').allow(""),
      image: Joi.string().label('Image').allow(""),
      price: Joi.string().label('Price').allow(""),
    });
  
    const { error } = schema.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });
    next();
  }
}