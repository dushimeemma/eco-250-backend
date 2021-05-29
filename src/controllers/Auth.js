import bcrypt from 'bcryptjs';
import { User } from '../../models';
import { encode } from '../helpers/jwtFunctions';

export default {
  signup: async (req, res) => {
    const { firstName, lastName, email, phoneNumber, password } = req.body;

    const emailExist = await User.findOne({
      where: { email: req.body.email }
    });
    if (emailExist) {
      return res.status(409).json({ error: 'Email already exists'});
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
      firstName,
      lastName,
      email,
      phoneNumber,
      password: hashedPassword
    });

    const token = encode({
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
    });
    return res.status(201).json({
      message: "User created successfully",
      token,
      data: {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        phoneNumber: user.phoneNumber
      }
    })
  },
  
  login: async (req, res) => {
    const { email, password } = req.body;
    const userAccount = await User.findOne({ where: { email } });
    if (!userAccount) {
      return res
        .status(403)
        .json({ message: 'Email or Password is incorrect' });
    }
    const validPass = await bcrypt.compare(password, userAccount.password);
    if (!validPass) {
      return res
        .status(403)
        .json({ message: 'Email or Password is incorrect' });
    }
    const token = encode({
      id: userAccount.id,
      firstName: userAccount.firstName,
      lastName: userAccount.lastName,
      email: userAccount.email,
    });
    return res.status(200).json({
      message: "Loged in successfully",
      token,
    })
  }
}