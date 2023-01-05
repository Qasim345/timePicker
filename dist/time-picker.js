/*
Time Picker v-0.1.2
Author: Qasim Sarwari
Date: 2023-1-5 & 1401/10/14
*/

function timePicker(el, opt = {
  bg: "light", shadow: false, lang: "fa", format: 12,
}) {
  var elem = document.querySelector(el);
  if (opt.lang == null) {
    opt.lang = "en";
  }
  if (opt.shadow) {
    elem.style.boxShadow = "0 2px 3px rgb(0,0,0,.2)";
  } 
  if(opt.format == undefined){
    opt.format = 24;
  }
  if (opt.bg == "dark") {
    elem.style.background = "#343a40";
    elem.style.color = "#f8f9fa";
  } else if (opt.bg == "light") {
    elem.style.background = "#f8f9fa";
    elem.style.color = "#343a40";
  } else if(opt.bg == undefined) {
    elem.style.background = "#fff";
  }else{
    throw Error("Undefined background\nYou can use just dark or light")
  }
  if (elem == undefined || elem == "") {
    throw new Error("Please select an input element!");
  }
  var d = new Date();
  var h = d.getHours();
  var m = d.getMinutes();
  var pml = ["AM",
    "PM"];
  if (opt.lang == "fa") {
    pml[0] = "قبل از ظهر";
    pml[1] = "بعد از ظهر"
  }
  var am = pml[0];
  if (opt.format == 12) {
    if (h > 12) {
      h = h - 12
      am = pml[1]
    }
  } else if (opt.format !== 24) {
    throw new Error("Unsupport format!\nJust use 2 for 12 Hours and 4 for 24 Hours format.")
  }

  if ((opt.format == 24 && opt.lang == "fa") || (opt.lang == "en")) {
    if (h > 12) {
      am = pml[1]
    }
  }
  if (h < 10)
    h = "0"+h;
  if (m < 10)
    m = "0"+m;
  elem.value = h+":"+m+" "+am;
}