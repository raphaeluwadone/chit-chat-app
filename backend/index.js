const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
      }
});
io.on('connection', (socket) => {
    console.log("Socket has been connected");
    socket.on("newUser", data => {
        socket.emit("salute", `${data}, just joined`)
    })
    socket.on("disconnect", () => {
        console.log("User has disconnected");
    })

    socket.on("msg", (data) => {
        io.emit("post", data);
    })
});


server.listen(8080, () => {
    console.log("Server is currently running on port 8080");
});