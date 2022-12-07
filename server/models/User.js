import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose"
const User = new mongoose.Schema({
    username: {type: String, unique: true},
    password: {type: String}
});


User.plugin(passportLocalMongoose)

const UserDetail = mongoose.model('userData', User)
export default UserDetail
