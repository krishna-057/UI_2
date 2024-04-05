let main122 = document.getElementById("main122");
let rev = document.getElementById("rev");
let my= document.getElementById("my");
let logo1= document.getElementById("logo1");
let msg= document.getElementById("msg");
let btn= document.getElementById("btn");
let myrest=document.getElementById('myrest');

rev.addEventListener("click", function () {
  main122.style.height="141%";
  main122.style.top="27.3%";
  main122.style.marginBottom="7%";  
  myrest.style.display="flex";  
//   my.style.display = "none";
  logo1.style.display = "none";
  msg.style.display = "none";
  btn.style.display = "none";
  console.log("hell");
  rev.style.backgroundColor='rgb(146, 193, 251)';
  rev.style.color='blue';
});

