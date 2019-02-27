const mongoose = require("mongoose");

const inventorySchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    item:String
});

module.exports = mongoose.model("Inventory",inventorySchema);