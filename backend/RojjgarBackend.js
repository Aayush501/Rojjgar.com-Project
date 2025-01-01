require('dotenv').config();

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const userRoutes = require('./Routes/usersRoutes');
const jobseekersRoutes = require('./Routes/jobSeekerRoutes');
const websiteStatsRoutes = require('./Routes/websiteStatsRoutes');
const viewwebsitestats = require('./Routes/viewWebsiteStats');
const adminRoutes = require('./Routes/adminRoutes');
const PORT = 3000;  
const MONGODB_URI = process.env.MONGODB_URI;


app.use(cors({
    origin: 'http://127.0.0.1:5501', 
    credentials: true,       
}));


// Middleware to parse incoming requests 
app.use(express.json());

mongoose.connect(MONGODB_URI).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('MongoDB connection error:', err);
});

app.use('/users', userRoutes); 
app.use('/jobseekers', jobseekersRoutes);
app.use('/websitestats', websiteStatsRoutes);
app.use('/viewwebsitestats', viewwebsitestats);
app.use('/admin', adminRoutes);

app.get('/', (req, res) => {
    res.send("hello");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});