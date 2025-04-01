import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },
    features: [{
        type: String,
    }],
    specifications: {
        type: Map,
        of: String,
    },
    category: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
});

export const Product = mongoose.models.Product || mongoose.model('Product', productSchema);