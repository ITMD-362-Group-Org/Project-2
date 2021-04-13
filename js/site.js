// JavaScript code will be here

document.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM fully loaded and parsed');



  function clean() {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("birthday").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("name").focus();
  }

  function thanks() {
    window.alert("Thank you!" + "\n" + "Welcome to the community!");
    clean();
  }
})