// JavaScript code will be here

document.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM fully loaded and parsed');

  document.getElementById('submit').onclick = function () {
    let btns1 = document.getElementById("name").value;

    if (btns1 == "") {
      alert("No alert text has been entered!")
      document.getElementById("name").value = ""

    } else {
      alert("Thank you " + btns1  + "\nWelcome");
      document.getElementById("name").value = ""
    }

  };

})