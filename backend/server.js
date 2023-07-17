const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const HealthRouter = require('./routes/health');

require('dotenv').config();

const app = express();
const PORT = process.env.port || 5000;

//Middleware
app.use(cors());
app.use(express.json());

// MONGO DB CONNETION
const uri = process.env.ATLAS_URI;
mongoose.connect(uri);

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection is established.");
})

app.use('/health', HealthRouter);

app.listen(PORT, () => {
    console.log(`Server is running in port ${PORT}`)
});

//  Other connection setup
// mongoose
//     .connect(process.env.ATLAS_URI)
//     .then(() => {
//         app.listen(PORT, () => {
//             console.log(`Server Running on port ${PORT}`)
//             console.log(`Yes Im Running!!! ${PORT}`)
//         })
//     })
