const mongoose = require("mongoose");

// Define the schema for individual order items
const orderItemsSchema = new mongoose.Schema({
    name: { type: String, required: true },
    qty: { type: Number, required: true },  // Fixed typo from 'Numbre' to 'Number'
    image: { type: String, required: true },
    price: { type: Number, required: true },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true
    }
});

// Define the main order schema
const orderSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" }, // Ensured 'User' is capitalized if it refers to the model name
    orderItems: [orderItemsSchema],  // Correctly using the orderItemsSchema
    shippingAddress: {
        address: { type: String, required: true },
        city: { type: String, required: true },
        postalCode: { type: String, required: true },
        country: { type: String, required: true }
    },
    paymentMethod: { type: String, required: true, default: "Paypal" }, 
    paymentResult: {  
        id: { type: String },
        status: { type: String },
        updated_time: { type: String },
        email_address: { type: String }
    },
    taxPrice: {
        type: Number,
        required: true,
        default: 0.0
    },
    shippingPrice: {
        type: Number,
        required: true,
        default: 0.0
    },
    totalPrice: {
        type: Number,  
        required: true,
        default: 0.0
    },
    isPaid: {
        type: Boolean,
        required: true,
        default: false
    },
    paidAt: {
        type: Date
    },
    isDelivered: {
        type: Boolean,
        required: true,
        default: false
    },
    deliveredAt: {
        type: Date
    }
}, { timestamps: true });

// Export the Order model
module.exports = mongoose.model("Order", orderSchema);
