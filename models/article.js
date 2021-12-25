const mongoose = require("mongoose");

// ES 6 MODULE import { Schema as _Schema, model } from "mongoose";

const Schema = mongoose.Schema;

const articleSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },

        body: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Article", articleSchema);
