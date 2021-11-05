

function valid() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var login = 3;
    if (username == "admin" && password == "admin") {
        alert("Login Corrcet");
        window.open("http://localhost:63342/untitled15/admin.html?_ijt=6ilhmmtj85v8r0m03pb2osumc3");
    } else{
        alert("False")

    }

    for (var i =3 ; i=0; i--){
        if(username != "admin" || password != "admin"){
            login=login-1;
        }
        if (login==0){
            alert("hnbsakj");
        }
    }



}



