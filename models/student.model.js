import mongoose from 'mongoose';

const studentSchema = mongoose.Schema(
    {
        firstName : {type:String, required:true ,default:""},
        lastName : {type:String, required:true, default:""},
        vesEmail : {type:String, required:true, unique:true},
        personalEmail : {type:String, required:true, unique:true},
        placementNumber :{type:Number, required:true, unique:true},
        PRN : {type:String, required:true, unique:true},
        aggCGPI : {type:Number, required:true, default:0},
        percentage : {type:Number, required:true, default:0},
        deadKTs : {type:Number, required:true, default:0},
        liveKTs : {type:Number, required:true, default:0},
        contact : {type:Number, required:true, default:0},
        division : {type:String, required:true, default:""},
        rollNumber : {type:Number, required:true, default:0},
        dob : {type:Date, required:true, default:Date.now},
        intresedIn : {type:String, required:true, default:""},
        sem1 : {type:Number, required:true, default:0},
        sem2 : {type:Number, required:true, default:0},
        sem3 : {type:Number, required:true, default:0},
        sem4 : {type:Number, required:true, default:0},
        sem5 : {type:Number, required:true, default:0},
        sem6 : {type:Number, required:false, default:0},
        sem7 : {type:Number, required:false, default:0},
        sem8 : {type:Number, required:false, default:0},
        isVerified : {type:Boolean, required:true, default:false},
    },
    {timestamps:true}
);

export const Student = mongoose.model('Student', studentSchema);