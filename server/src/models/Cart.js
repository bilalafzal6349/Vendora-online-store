import mongoose from "mongoose";

const cartItemSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    min: [1, "Quantity must be at least 1"],
    default: 1,
  },
});

const cartSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    items: [cartItemSchema],
    total: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

// Calculate total before saving
cartSchema.pre("save", async function (next) {
  if (!this.isModified("items")) return next();

  let total = 0;
  for (const item of this.items) {
    const product = await mongoose.model("Product").findById(item.product);
    if (product) {
      total += product.price * item.quantity;
    }
  }
  this.total = total;
  next();
});

const Cart = mongoose.model("Cart", cartSchema);

export default Cart;
