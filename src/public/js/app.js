let userName = "";

function login() {
    userName = document.getElementById('name').value;
    console.log(userName);

    document.getElementById('login').hidden = true;
    document.getElementById('chat').hidden = false;

    joinRoom(userName);
}

function updateUserList(userList) {
    let html = "";
    for (let i = 0; i < userList.length; i++) {
        html += `
            <li class="list-group-item"> ${userList[i]}</li>
        `;
    }
    document.getElementById('nutzerListe').innerHTML = html;
}

function welcomeUser(user) {
    document.getElementById('chatVerlauf').innerHTML += `<i>Hallo ${user}!</i><br>`;
}

function removeUser(user) {
    document.getElementById('chatVerlauf').innerHTML += `<i>${user} hat den Chat verlassen.</i><br>`;
}

function send() {
    let time = new Date().toLocaleTimeString();
    let message = document.getElementById('nachricht').value;
    let msg = {
        name: userName,
        time: time,
        message: message,
    };
    sendMessage(msg);
    addMessage(msg);
}

function addMessage(msg) {
    document.getElementById('chatVerlauf').innerHTML += `
        <div class="card mb-2">
            <div class="card-body container-fluid">
                <div class="row">
                    <h6 class="card-subtitle mb-2 text-muted col-6">${msg.name}</h6>
                    <h6 class="card-subtitle mb-2 text-muted col-6 text-end">${msg.time}</h6>
                </div>
                <p class="card-text">
                ${msg.message}
                </p>
            </div>
        </div>
    `;
}