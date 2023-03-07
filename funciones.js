function login(){ 
    var user , password
    user = document.getElementById("username").value;
    password = document.getElementById("password").value;

    if( user == "Diego Pava" && password == "1234"){
      
      alert ("!entro")
}else{
  alert ("!user Not registered! please, Registered")
}

}