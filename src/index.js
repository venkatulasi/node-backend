import dotenv from 'dotenv';
import connectDB from './db/index.js';

dotenv.config({
    path: './env'    
});
connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running on the port: ${process.env.PORT}`);        
    })
})
.chatch((error) => {
    console.log("MONGODB connection failed !!", error);    
})
