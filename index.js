const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const serveStatic = require('serve-static');
const finalhandler = require('finalhandler');

const serve = serveStatic('./');

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('*', (req, res) => {
    const done = finalhandler(req, res);
    serve(req, res, done);
});

const history = [];

function jsonMatches(left, right) {
    return JSON.stringify(left) === JSON.stringify(right);
}

io.on('connection', (socket) => {
    console.log(`Connected: ${socket.id}`);

    socket.emit('data', {reset: true, history});

    socket.on('data', (msg) => {
        const [last] = msg.history.slice(-1);
        if(!jsonMatches(last, history.slice(-1)[0])) {
            console.log('emitting msg: ' + JSON.stringify(msg));
            socket.broadcast.emit('data', msg);
            history.push(...msg.history);
        }
    });
});

http.listen(8080, () => {
    console.log('listening on *:8080');
});
