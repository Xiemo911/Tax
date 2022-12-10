
import mongoose from "mongoose";
const conn_str = `mongodb+srv://histeel:6984@cluster0.u3l9bic.mongodb.net/?retryWrites=true&w=majority`;
mongoose.set('strictQuery', false)
export default mongoose.connect(
  conn_str,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log("error in connection");
    } else {
      console.log("mongodb is connected");
    }
  }
);

