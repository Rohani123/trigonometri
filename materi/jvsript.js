function ftampil(){
	/* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
	var dropdown = document.getElementsByClassName("dropdown-btn");
	var i;

	for (i = 0; i < dropdown.length; i++) {
		console.log(dropdown.length);
  		dropdown[i].addEventListener("click", function() {
  			this.classList.toggle("active2");
  			var dropdownContent = this.nextElementSibling;
  			if (dropdownContent.style.display === "block") {
  				dropdownContent.style.display = "none";
  			} else {
  				dropdownContent.style.display = "block";
  			}
  		});
	}
}






function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}

let bsetrika = document.getElementById('bsetrika');
let ssetrika = document.getElementById('ssetrika');

let bkipas = document.getElementById('bkipas');
let skipas = document.getElementById('skipas');

let bneon = document.getElementById('bneon');
let sneon = document.getElementById('sneon');

let bpijar = document.getElementById('bpijar');
let spijar = document.getElementById('spijar');

let bsolder = document.getElementById('bsolder');
let ssolder = document.getElementById('ssolder');

let bpemanas = document.getElementById('bpemanas');
let spemanas = document.getElementById('spemanas');


// $(function(){
//     setInterval(cek, 1000);
// });
const benar = '<span style="color : white;">Benar</span>'
const salah = '<span style="color : white;">Salah</span>'

let tarik = document.getElementById('tarik');


function cekKel(){
    if ((tarik.innerText == 'Lampu neonLampu pijar')||(tarik.innerText == 'Lampu pijarLampu neon')) {
        const jawabKel = document.getElementById('jawabKel');
        jawabKel.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3" style="background-color:blue;color:white;">
                            Jawaban Anda ${benar}<br>
                            <div class="pembahasan2">
                            <u>Pembahasan :</u>
                            </div>
                            Dari video tersebut kita dapat mengetahui bahwa : Lampu neon dan lampu pijar merupakan contoh dari perubahan energi listrik menjadi energi cahaya
                            </div>`;  
    } else {
        const jawabKel = document.getElementById('jawabKel');
        jawabKel.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3" style="background-color:red;color:white;">
                            Jawaban Anda ${salah}<br>
                            <div class="pembahasan2">
                            
                            </div>
                            Silahkan coba lagi
                            </div>`; 
    }
}
// function myFunction() {
//   var x = document.getElementById("coba1").value;
//   var jawaban;
  
 
//   if (isNaN(x) || x != 100) {
//       jawaban = "Incorrect"; document.getElementById("coba1");
//   } else {
//       jawaban = "Correct"; document.getElementById("coba1").style.color = "green";
//   }
//   document.getElementById("jawaban").innerHTML = jawaban;
// }




var x = document.getElementById("petunjuk");
var xx= document.querySelector('.petunjuk');

xx.addEventListener("click",function(){
  x.classList.toggle("hilang");
})

var x1 = document.getElementById("tujuan");
var xx1= document.querySelector('.tujuan');

xx1.addEventListener("click",function(){
  x1.classList.toggle("hilang");
})

var x2 = document.getElementById("petunjuksoal");
var xx2= document.querySelector('.petunjuksoal');

xx2.addEventListener("click",function(){
  x2.classList.toggle("hilang");
})


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}


// function myFunction() {
//   var x = document.getElementById("myText").value;
//    var jawaban;
//    if (x == "3,3") {
//      jawaban = "Berhasil, jawabanmu benar";
//    } else if (x=="3, 3"){
//      jawaban = "Berhasil, jawabanmu benar";
//    }else {
//      jawaban = "Jawabanmu salah, jangan lupa tanda koma(,) untuk pemisah titiknya";
//    }
//    document.getElementById("demo").innerHTML = jawaban;
//  }

//  function Functiontwo() {
//   var x = document.getElementById("Texttwo").value;
//    var jawaban;
//    if (x == "5,6") {
//     jawaban = "Berhasil, jawabanmu benar";
//   } else if (x=="5, 6"){
//     jawaban = "Berhasil, jawabanmu benar";
//   }else {
//     jawaban = "Jawabanmu salah, jangan lupa tanda koma(,) untuk pemisah titiknya";
//   }
//    document.getElementById("cektwo").innerHTML = jawaban;
//  }

//  function Functionthree() {
//   var x = document.getElementById("Textthree").value;
//    var jawaban;
//    if (x == "8,5") {
//     jawaban = "Berhasil, jawabanmu benar";
//   } else if (x=="8, 5"){
//     jawaban = "Berhasil, jawabanmu benar";
//   }else {
//     jawaban = "Jawabanmu salah, jangan lupa tanda koma(,) untuk pemisah titiknya";
//   }
//    document.getElementById("cekthree").innerHTML = jawaban;
//  }

 function Functionfour() {
  var x = document.getElementById("Textfour").value;
   var jawaban;
   if (x == "10,2") {
    jawaban = "Berhasil, jawabanmu benar";
  } else if (x=="10, 2"){
    jawaban = "Berhasil, jawabanmu benar";
  }else {
    jawaban = "Jawabanmu salah, jangan lupa tanda koma(,) untuk pemisah titiknya";
  }
   document.getElementById("cekfour").innerHTML = jawaban;
 }

 function Functionfive() {
  var x = document.getElementById("Textfive").value;
   var jawaban;
   if (x == "12,8") {
    jawaban = "Berhasil, jawabanmu benar";
  } else if (x=="12, 8"){
    jawaban = "Berhasil, jawabanmu benar";
  }else {
    jawaban = "Jawabanmu salah, jangan lupa tanda koma(,) untuk pemisah titiknya";
  }
   document.getElementById("cekfive").innerHTML = jawaban;
 }





// KALKULATOR Begin
function addChar(input, character) {
if(input.value == null || input.value == "0")
input.value = character
else
input.value += character
}
function arccos(form) {
form.display.value = Math.acos(form.display.value);}
function arcsin(form) {
form.display.value = Math.asin(form.display.value);}
function arctan(form) {
form.display.value = Math.atan(form.display.value);}
function sqrt(form) {
form.display.value = Math.sqrt(form.display.value);}
function ln(form) {
form.display.value = Math.log(form.display.value);}
function exp(form) {
form.display.value = Math.exp(form.display.value);}
function deleteChar(input) {
input.value = input.value.substring(0, input.value.length - 1)}
function changeSign(input) {
if(input.value.substring(0, 1) == "-")
input.value = input.value.substring(1, input.value.length)
else
input.value = "-" + input.value
}
function compute(form)  {
form.display.value = eval(form.display.value)}
function square(form)  {
form.display.value = eval(form.display.value) *
eval(form.display.value)}
function checkNum(str)  {
for (var i = 0; i < str.length; i++) {
var ch = str.substring(i, i+1)
if (ch < "0" || ch > "9") {
if (ch != "/" && ch != "*" && ch != "+" && ch !=
"-" && ch != "."
&& ch != "(" && ch!= ")") {
alert("tanya keun kanu pinter")
return false
        }
     }
  }
return true
}
// End -->

