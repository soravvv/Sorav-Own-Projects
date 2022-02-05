import navbar from "./navbar.js";

let usernames;

let container = document.getElementById("container");
container.innerHTML = navbar();

document.getElementById("formm").addEventListener("submit", logIn);

async function logIn(e) {

    e.preventDefault();

    try {
        let loginData = {
        username: document.getElementById("usernameLogin").value,
        password: document.getElementById("passwordLogin").value,
    }

    localStorage.setItem("name", JSON.stringify())

    loginData = JSON.stringify(loginData);

    let api = `https://masai-api-mocker.herokuapp.com/auth/login`;
    let res = await fetch(api, {
        method: "POST",
        body: loginData,
        headers: {
            "Content-Type": "application/json"
        }
    })

    usernames = document.getElementById("usernameLogin").value;

    let data = await res.json();
    getUser(usernames, data.token)

    }

    catch (err) {
        alert("Wrong Credentials, Please Sign Up First");
        console.log(err);
    }
}

async function getUser(username, token) {
    let api = `https://masai-api-mocker.herokuapp.com/user/${username}`;

    let res = await fetch(api, {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    });

    let data = await res.json();

    if (data.token) {
        window.location.href = "index.html";
        localStorage.setItem("name", JSON.stringify(username));
    } 
}