var ws, log, msg, username;

function connect() {
    username = document.getElementById("username").value;
    ws = new WebSocket("ws://localhost:8080/chat-websocket-application/chat/" + username);


    ws.onmessage = function(event) {
    log = document.getElementById("log");
        console.log(event.data);
        log.innerHTML += event.data + "\n";
    };
}

function send() {
    msg = document.getElementById("msg").value;
    ws.send(msg);
}