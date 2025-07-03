// Injects the shared navbar.html into the <div id="navbar-container">
fetch("navbar.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("navbar-container").innerHTML = data;
  });
