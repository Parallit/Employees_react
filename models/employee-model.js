import mongoose from "mongoose";

const { Schema, model } = mongoose;

const EmployeeShema = new Schema({
    firstname: {
        type: String,
    },
    lastname: {
        type: String,
    },
    age: {
        type: Number,
    },
    adress: {
        type: String,
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
}, {
    timestamps: true,
});

export const Employee = model("Employee", EmployeeShema, "Employee")