<<<<<<< HEAD
// Injects the shared navbar.html into the <div id="navbar-container">
fetch("navbar.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("navbar-container").innerHTML = data;
  });
=======
// Injects the shared navbar.html into the <div id="navbar-container">
fetch("navbar.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("navbar-container").innerHTML = data;
  });
>>>>>>> d9ce26b1ad76c3fdf7c18a19adab84d36b80e31e
