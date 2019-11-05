    function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

    // Close the dropdown if the user clicks outside of it
    window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains('show')) {
    myDropdown.classList.remove('show');
      }
    }
  }

    function functieBijEvent()
    {
    alert("Is gestuurd!");
  }
    document.getElementById("submit").onclick = functieBijEvent;

    function myFunctionzoeken() {
      location.href = "../zoeken/zoeken.html";
    }
    function myFunctionOverOns() {
      location.href = "../OverOns/overons.html";
    }
    function myFunctionHome() {
      location.href = "../home/home.html";
    }
    function myFunctionContent() {
      location.href = "../Contcten/contcten.html";
    }
    function myFunctionVakantiebestemmingen() {
      location.href = "../Vakantiebestemmingen/Vakantiebestemmingen.html";
    }
