import mongoose from 'mongoose';
import app from './app.js';
import { registerUser } from './controllers/Auth.js';
import process from 'process'
import morgan from 'morgan';
import authRoute from './routes/Auth.js'
import { upload } from './middleware/multer.js';
import { uploadImg } from './middleware/uploadImg.js';

//Connect to DB
mongoose.connect(process.env.DB_URL);

app.use(morgan("common"));

// Add your routes here
app.use("/auth", authRoute)


//Single Route
app.post("/auth/register",upload.single("userPicture"), registerUser);

app.post("/upload", upload.single("userPicture"), uploadImg)

//Port
app.listen(app.get('port'), () => {
  console.log(`App is listening to port ${app.get('port')}`);
});
