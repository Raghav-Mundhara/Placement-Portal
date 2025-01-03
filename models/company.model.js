import mongoose from "mongoose";

const companySchema = mongoose.Schema(
    {
        companyName : {
            type: String,
            required: true,
            default: ""
        },
        pcord:[{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Student",
            required: true
        }],
        schedule:[
            {
                roundName:{
                    type: String,
                    required: true,
                    default: ""
                },
                date:{
                    type: Date,
                    required: false,
                    default: Date.now
                },
                time:{
                    type: String,
                    required: false,
                    default: ""
                },
            }
        ]
    },
    {
        timestamps:true
    }
)