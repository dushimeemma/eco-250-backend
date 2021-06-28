import { Tree } from '../../models';

export default {
	create: async (req, res) =>{
		const owner = req.user.id;
		const {type}= req.body
		const newTree = await Tree.create({
				owner, type
		})
		return res.status(201).json({
				message: "Tree created successfully",
				data: newTree
		})
	},

	getAll: async (req, res)=>{
		const findTrees = await Tree.findAll({});
		if (!findTrees || findTrees.length === 0) {
			return res.status(404).json({
				error: "No Tree found so far"
			})
		}
		return res.status(200).json({
			message: "Tree found successfully",
			data: findTrees
		})
	},

	getOne: async (req, res) => {
		const {id} = req.params;
		const findTree = await Tree.findOne({where: {id}});
		if(!findTree){
			return res.status(404).json({
				error: "No Tree found so far"
			})
		}
		return res.status(200).json({
			message: "Tree found successfully",
			data: findTree
		})
	},

	updateOne: async (req, res) => {
		const {id} = req.params;
		const findTree = await Tree.findOne({where: {id}});
		if(!findTree){
			return res.status(404).json({
				error: "No tree found so far"
			})
		}
		const updateData = await findTree.update({...req.body});
		return res.status(200).json({
			message: "Tree updated successfully",
			data:	updateData
		})
	},

	deleteOne: async (req, res)=> {
		const {id} = req.parmas;
		const findTree = await Tree.findOne({where: {id}});
		if(!findTree){
			return res.status(404).json({
				error: "No tree found so far"
			})
		}
		await findTree.destroy();
		return res.status(200).json({
			message: "Tree deleted successfully",
			data: findTree
		})
	},

	getByOnwer: async (req, res)=>{
		const {id} = req.user;
		const findTree = await Tree.findAll({where: {owner: id}});
		if(!findTree || findTree.length === 0){
			return res.status(404).json({
				error: "No Tree found so far"
			})
		}
		return res.status(200).json({
			message: "Tree found successfully",
			data: findTree
		})
	}
}