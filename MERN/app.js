const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const authRoutes = require('./routes/auth');
const todoRoutes = require('./routes/todo');
const { UrlMongodb, PORT } = require('./utils/api');

const app = express();

app.use(express.json({ extended: true }));

app.use('/api/auth', authRoutes);
app.use('/api/todo', todoRoutes);

if(process.env.NODE_ENV === 'production') {
    app.use('/', express.static(path.join(__dirname, 'client', 'build')));
    app.get('*', (req, res) =>{
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

async function start() {
    try {
     await mongoose.connect(UrlMongodb, {
         useNewUrlParser: true,
         useUnifiedTopology: true,
         useCreateIndex: true,
     })
     app.listen(PORT, () => console.log(`App started server ${PORT}...`))
    } catch (e) {
        console.log('Server start error', e.message);
        process.exit(1);
    }
}
start();
