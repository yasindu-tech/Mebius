const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    customerName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    items: [
      {
        itemId: { type: mongoose.Schema.Types.ObjectId,
        ref:'Product',
        required: true },
        quantity: { type: Number, required: true, min: 1 }
      }
    ],
    totalAmount: { type: Number, required: true },
    paymentStatus:{
        type:String,
        enum:['pending','completed'],
        default:'pending',
        required:true,
    }
  
   
  }
);

export default mongoose.model("Order", orderSchema);