const fs = require('fs');
const http = require('http');


const server = http.createServer((req,res)=>{
    fs.readFile('./index.html', (err,result)=> res.end(result)) // server.on('request')
});


const io= require('socket.io')(server); //taking HTTP server and returning TCP server


io.on('connection', (socket)=>{
    socket.on('massage', ({name,text})=>{
        console.log('emit');
        io.emit('massage', {name,text}) //emiting to all other sokets that are connected
    })
})


server.listen(3000);
