

function fun() {
    
    var w = document.getElementById("Userid").value;
    var regx = /^411\d{3}$/;
    if (regx.test(w)) {
  
window.location.href = "home.html";
            return true;
          }
    else{
        
        alert("wrong username");
        return false;
        }
   
}