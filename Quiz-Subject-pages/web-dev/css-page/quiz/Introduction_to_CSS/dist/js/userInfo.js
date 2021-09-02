let user_name = sessionStorage.getItem("name");
let user_points = sessionStorage.getItem("points");
let user_time = sessionStorage.getItem("time");

let Lminutes=Math.floor(user_time/60);
let Lseconds=Math.floor(user_time%60);
let Ltime=Lminutes+"m "+Lseconds+"s";

let Lpoints=user_points+"/100";

document.querySelector("span.name").innerHTML = user_name;
document.querySelector("span.points").innerHTML = Lpoints;
document.querySelector("span.time_taken").innerHTML = Ltime;

