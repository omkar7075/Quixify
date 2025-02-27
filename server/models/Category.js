const mongoose = require("mongoose");

// Define the Tags schema
const categorySchema = new mongoose.Schema({
	categoryName: {
		type: String,
		required: true,
	},
	 description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
	subImage: {
        type: String,
        required: true,
    },
    subcategories:[
		{
		type:mongoose.Schema.Types.ObjectId,
		ref:'Subcategory'
		},
	],
});

// Export the Tags model
module.exports = mongoose.model("Category", categorySchema);

