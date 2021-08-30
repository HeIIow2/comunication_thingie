import fs from "fs";

const socket = io();

// logMessage für Debug-Zwecke
socket.on('logMessage', msg => {
    console.log(msg);
});

function logMessage(msg) {
    socket.emit('logMessage', msg);
}

// Nutzer beim Server anmelden
function joinRoom(userName) {
    socket.emit('joinRoom', userName);
    fs.readFile('messages.json', 'utf-8', function (err, jsonString){
        const messages = JSON.parse(jsonString);
        for(const message in messages)
        {
            addMessage(message);
        }
    });
}

socket.on('userJoined', data => {
    welcomeUser(data.name);
    updateUserList(data.nameList);
});

// Nachricht senden
function sendMessage(msg) {
    socket.emit('sendMessage', msg);
}

socket.on('sendMessage', msg => {
    addMessage(msg);


})

// Nutzer verabschieden
socket.on('userLeft', data => {
    removeUser(data.name);
    updateUserList(data.nameList);
});