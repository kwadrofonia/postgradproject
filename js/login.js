const loginUser = () => {
    let password = document.getElementById('password').value;
    let username = document.getElementById('username').value;
    let data = {
       password: password,
       username: username
    }
    fetch('http://localhost:3000/login', {
       method: 'POST',
       body: JSON.stringify(data),
       mode: 'cors',
       cache: 'no-cache',
       credentials: 'same-origin', 
       headers: {
         'Content-Type': 'application/json'
       },
       redirect: 'follow',
       referrerPolicy: 'no-referrer'
    })
    .then( res=> {
       window.location.href = "http://127.0.0.1:5501/booking.html";
    })
    .catch(err=> {
       console.log(err);
    })
  }
   console.log(document.getElementById('login'));
  document.getElementById('login').addEventListener("click", () => loginUser)