const express = require('express');
const http = require('http');
const {Server} =require('socket.io');
const path = require('path');
const cors = require('cors');
require('dotenv').config();

const PORT = process.env.PORT || 5000 ;

//Routers
const { aboutRouter } = require('./routes/AboutRouter');
const { projectRouter } = require('./routes/ProjectRouter');
const { blogRouter } = require('./routes/BlogRouter');
const { contactRouter } = require('./routes/ContactRouter');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Allow io access inside routers/controllers
app.set('io', io);

// Middleware
app.use(cors({
    origin:'http://localhost:3000'
}));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

//Routes
app.use('/about',aboutRouter);
app.use('/projects',projectRouter);
app.use('blog',blogRouter);
app.use('/contact',contactRouter);

io.on('connection', (socket) => {
    console.log('Client connected:', socket.id);
});

server.listen(PORT,()=>{
    console.log("Server Started");
});

