const mongoose = require("mongoose");
const subcategorySchema = new mongoose.Schema({
    subcategoryName: {
        type: String,
        required: true,
    },
    subcategoryImage: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("Subcategory", subcategorySchema);