const io=require("socket.io")({
    cors: {
      origin: '*',
    },
  });

io.on("connection", (socket)=>{
    console.log('user connected');
    socket.on("chat", (data)=>{
        // console.log('received message => ' + data.msg);
        io.emit('message', {
            username : data.username,
            msg : data.msg
        })
    })
    socket.on("disconnect", ()=>console.log('user disconnected'))
});

io.listen(5000);
console.log('server is on the port 5000');