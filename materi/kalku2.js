var selection = "rad_"
     
function insert2(num){
  var text = document.form2.textinput2.value
  document.form2.textinput2.value = text + num
}

function clean2(){
  document.form2.textinput2.value = ""
}
   
function calculate2(){
  var text = document.form2.textinput2.value
  document.form2.textinput2.value = eval(text)
}
   
function back2(){
   var text = document.form2.textinput2.value
   document.form2.textinput2.value = text.substring(0,text.length-1)
}
   
function calc_sin2(){
   var text = document.form2.textinput2.value
   if (selection == "rad_"){
     document.form2.textinput2.value = Math.sin(text)
   } else if (selection == "deg_"){
     document.form2.textinput2.value = Math.sin(text * (Math.PI / 180))
   }
 }
   
function calc_cos2(){
 var text = document.form2.textinput.value
 if (selection == "rad_"){
   document.form2.textinput.value = Math.cos(text)
 } else if (selection == "deg_"){
   document.form2.textinput2.value = Math.cos(text * (Math.PI / 180))
 }
}
   
function calc_tan2(){
 var text = document.form2.textinput2.value
 if (selection == "rad_"){
   document.form2.textinput2.value = Math.tan(text)
 } else if (selection == "deg_"){
   document.form2.textinput2.value = Math.tan(text * (Math.PI / 180))
 }
}

function calc_sqrt2(){
var text = document.form2.textinput2.value
document.form2.textinput2.value = Math.sqrt(text)
}

function calc_percent2(){
var text = document.form2.textinput2.value
document.form2.textinput2.value = text/100
}

function change_label_selection(){
 var label = document.getElementById("info2")
 label.innerHTML = "<b>"+selection.toUpperCase()+"</b>"
}

function calc_deg2(){
 var element = document.getElementById("deg_")
 element.style = "border: solid red"
 var element2 = document.getElementById("rad_")
 element2.style = "border solid"
 
 selection = "deg_" //Set selection to deg
 change_label_selection()
}

function calc_rad2(){
 var element2 = document.getElementById("rad_")
 element2.style = "border: solid red"
 var element = document.getElementById("deg_")
 element.style = "border: solid"
 
 selection = "rad_" //Set selection to rad
 change_label_selection()
}

function calc_log2(){
   var text = document.form2.textinput2.value
   document.form2.textinput.value = Math.log(text)
}

function calc_exp2(){
   var text = document.form2.textinput2.value
   document.form2.textinput2.value = Math.exp(text)
}
     
