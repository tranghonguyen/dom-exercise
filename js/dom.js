/*global console*/

// TASK 1
var tl = document.getElementById("tag-line");
var bmc = document.querySelector(".bg-main-content");
var h = bmc.querySelectorAll("h2");
var collect = tl.innerHTML + "\n----------------------------------------\n";
for(var i = 0; i < h.length; i += 1) {
    collect += h[i].innerHTML + "\n";
}
alert(collect);

// TASK 2
var bmc = document.querySelector(".bg-main-content");
var b = bmc.querySelectorAll(".box");
var when_to_launch = b[12].children;
var collect = when_to_launch[0].innerHTML + "\n-----------------\n";
for (j = 1; j < when_to_launch.length; j += 1) {
    collect += when_to_launch[j].innerHTML + "\n\n";
}
alert(collect);

