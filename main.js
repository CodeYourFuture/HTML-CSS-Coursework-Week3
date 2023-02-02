function myFunction() {
  var x = document.getElementById("my-topnav");
  if (x.className === "topnav") {
    x.className += "responsive";
  } else {
    x.className = "topnav";
  }
}