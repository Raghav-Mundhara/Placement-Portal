import mongoose from 'mongoose';

const adminSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: "PCORD"
    },
    password: {
        type: String,
        required: true
    },
    division: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    },
    assignedCompanies: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Job',
        required: false
    }
});

export const Admin = mongoose.model('Admin', adminSchema);