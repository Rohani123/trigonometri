

// latihan identitas trigonometri 2.2
// mencob 1
// AMPLITUDO
function myFunction() {
    var x = document.getElementById("coba1").value;
    var jawaban;
    
   
    if (x == "2") {
        // jawaban = "Incorrect"; document.getElementById("coba1").style.color = "red";
        jawaban = document.getElementById('coba1');
        jawaban = `<div class="pembahasan mt-3 mr-3 p-3" style="background-color:green;color:white;">
                            Jawaban Anda benar <br> </div>
                            </div>`;  
        
    } else {
        // jawaban = "Correct"; document.getElementById("coba1").style.color = "green";
        jawaban = document.getElementById('coba1');
        jawaban = `<div class="pembahasan mt-3 mr-3 p-3" style="background-color:red;color:white;">
                            Jawaban Anda salah <br> </div>
                            <div style="border-dotted">
                            <img src="../img/jawaban latihan grafik 1a.PNG" alt=""> </div>
                            <br>
                            </div>`;  
    }
    document.getElementById("jawaban").innerHTML = jawaban;
  }
  
  function Functiontwo() {
    var x = document.getElementById("coba2").value;
    var jawabantwo;
    
   
    if (x =="360") {
        // jawaban = "Incorrect"; document.getElementById("coba1").style.color = "red";
        jawabantwo = document.getElementById('coba2');
        jawabantwo = `<div class="pembahasan mt-3 mr-3 p-3" style="background-color:green;color:white;">
                            Jawaban Anda benar <br> </div>
                            </div>`;  
        
    } else {
        // jawaban = "Correct"; document.getElementById("coba1").style.color = "green";
        jawabantwo = document.getElementById('coba2');
        jawabantwo = `<div class="pembahasan mt-3 mr-3 p-3" style="background-color:red;color:white;">
                            Jawaban Anda salah <br> </div>
                            <img src="../img/jawaban latihan grafik 1b.PNG" alt="">
                            </div>`;  
    }
    document.getElementById("jawabantwo").innerHTML = jawabantwo;
  }
  
  
  function Functionthree() {
    var x = document.getElementById("coba3").value;
    var jawabanthree;
    
    
    if (x =="-45") {
        // jawaban = "Incorrect"; document.getElementById("coba1").style.color = "red";
        jawabanthree = document.getElementById('coba3');
        jawabanthree = `<div class="pembahasan mt-3 mr-3 p-3" style="background-color:green;color:white;">
                            Jawaban Anda benar <br> </div>
                            </div>`;  
        
    } else {
        // jawaban = "Correct"; document.getElementById("coba1").style.color = "green";
        jawabanthree = document.getElementById('coba3');
        jawabanthree = `<div class="pembahasan mt-3 mr-3 p-3" style="background-color:red;color:white;">
                            Jawaban Anda salah <br> </div>
                            <img src="../img/jawaban latihan grafik 1c.PNG" alt="">
                            </div>`;  
    }
    document.getElementById("jawabanthree").innerHTML = jawabanthree;
  }

  function Functionfour() {
    var x = document.getElementById("coba4").value;
    var jawabanfour;
    
   
    if (x =="-"||x =='tidak ada') {
        // jawaban = "Incorrect"; document.getElementById("coba1").style.color = "red";
        jawabanfour = document.getElementById('coba4');
        jawabanfour = `<div class="pembahasan mt-3 mr-3 p-3" style="background-color:green;color:white;">
                            Jawaban Anda benar <br> </div>
                            </div>`;  
        
    } else {
        // jawaban = "Correct"; document.getElementById("coba1").style.color = "green";
        jawabanfour = document.getElementById('coba4');
        jawabanfour = `<div class="pembahasan mt-3 mr-3 p-3" style="background-color:red;color:white;">
                            Jawaban Anda salah <br> </div>
                            <img src="../img/jawaban latihan grafik 1d.PNG" alt="">
                            </div>`;  
    }
    document.getElementById("jawabanfour").innerHTML = jawabanfour;
  }


  function Functionfive() {
    var x = document.getElementById("coba5").value;
    var jawabanfive;
    
   
    if (x =="2") {
        // jawaban = "Incorrect"; document.getElementById("coba1").style.color = "red";
        jawabanfive = document.getElementById('coba5');
        jawabanfive = `<div class="pembahasan mt-3 mr-3 p-3" style="background-color:green;color:white;">
                            Jawaban Anda benar <br> </div>
                            </div>`;  
        
    } else {
        // jawaban = "Correct"; document.getElementById("coba1").style.color = "green";
        jawabanfive = document.getElementById('coba5');
        jawabanfive = `<div class="pembahasan mt-3 mr-3 p-3" style="background-color:red;color:white;">
                        Jawaban Anda salah <br> </div>
                        <img src="../img/jawaban latihan grafik 2a.PNG" alt="">
                        </div>`;  
    }
    document.getElementById("jawabanfive").innerHTML = jawabanfive;
  }

  function Functionsix() {
    var x = document.getElementById("coba6").value;
    var jawabansix;
    
   
    if (x =="369") {
        // jawaban = "Incorrect"; document.getElementById("coba1").style.color = "red";
        jawabansix = document.getElementById('coba6');
        jawabansix = `<div class="pembahasan mt-3 mr-3 p-3" style="background-color:green;color:white;">
                            Jawaban Anda benar <br> </div>
                            </div>`;  
        
    } else {
        // jawaban = "Correct"; document.getElementById("coba1").style.color = "green";
        jawabansix = document.getElementById('coba6');
        jawabansix = `<div class="pembahasan mt-3 mr-3 p-3" style="background-color:red;color:white;">
                            Jawaban Anda salah <br> </div>
                            <img src="../img/jawaban latihan grafik 2b.PNG" alt="">
                            </div>`;  
    }
    document.getElementById("jawabansix").innerHTML = jawabansix;
  }
  function Functionseven() {
    var x = document.getElementById("coba7").value;
    var jawabanseven;
    
   
    if (x =="90") {
        // jawaban = "Incorrect"; document.getElementById("coba1").style.color = "red";
        jawabanseven = document.getElementById('coba7');
        jawabanseven = `<div class="pembahasan mt-3 mr-3 p-3" style="background-color:green;color:white;">
                            Jawaban Anda benar <br> </div>
                            </div>`;  
        
    } else {
        // jawaban = "Correct"; document.getElementById("coba1").style.color = "green";
        jawabanseven = document.getElementById('coba7');
        jawabanseven = `<div class="pembahasan mt-3 mr-3 p-3" style="background-color:red;color:white;">
                            Jawaban Anda salah <br> </div>
                            <img src="../img/jawaban latihan grafik 2c.PNG" alt="">
                            </div>`;  
    }
    document.getElementById("jawabanseven").innerHTML = jawabanseven;
  }
  function Functioneight() {
    var x = document.getElementById("coba8").value;
    var jawabaneight;
    
   
    if (x =="1") {
        // jawaban = "Incorrect"; document.getElementById("coba1").style.color = "red";
        jawabaneight = document.getElementById('coba8');
        jawabaneight = `<div class="pembahasan mt-3 mr-3 p-3" style="background-color:green;color:white;">
                            Jawaban Anda benar <br> </div>
                            </div>`;  
        
    } else {
        // jawaban = "Correct"; document.getElementById("coba1").style.color = "green";
        jawabaneight = document.getElementById('coba8');
        jawabaneight = `<div class="pembahasan mt-3 mr-3 p-3" style="background-color:red;color:white;">
                            Jawaban Anda salah <br> </div>
                            <img src="../img/jawaban latihan grafik 2d.PNG" alt="">
                            </div>`;  
    }
    document.getElementById("jawabaneight").innerHTML = jawabaneight;
  }
  


  function mencobaaktivitas1() {
    var x = document.getElementById("ymax1").value;
    var y = document.getElementById("ymin1").value;
    var z = document.getElementById("konstanta1").value;
    var r = document.getElementById("amplitudo1").value;

    
   
    if (x == "3") {
        document.getElementById('ymax1').style="border: 3px solid green; font-size:15px; text-align:center;"
        
    } else {
        document.getElementById('ymax1').style="border: 3px solid red; font-size:15px; text-align:center;"
  }
    if (y == "-3") {
        document.getElementById('ymin1').style="border: 3px solid green; font-size:15px; text-align:center;"
        
    } else {
        document.getElementById('ymin1').style="border: 3px solid red; font-size:15px; text-align:center;"
  }

  if (z == "3") {
    document.getElementById('konstanta1').style="border: 3px solid green; font-size:15px; text-align:center;"
    
} else {
    document.getElementById('konstanta1').style="border: 3px solid red; font-size:15px; text-align:center;"
}
  if (r == "3") {
    document.getElementById('amplitudo1').style="border: 3px solid green; font-size:15px; text-align:center;"
    
} else {
    document.getElementById('amplitudo1').style="border: 3px solid red; font-size:15px; text-align:center;"
}
}

  function mencoba322() {
    var x = document.getElementById("cobacos1").value;
    var y = document.getElementById("cobacos2").value;
    var z = document.getElementById("cobacos3").value;


    
   
    if (x == "3") {
        document.getElementById('cobacos1').style="border: 3px solid green; font-size:15px; text-align:center;"
        
    } else {
        document.getElementById('cobacos1').style="border: 3px solid red; font-size:15px; text-align:center;"
  }
    if (y == "-2") {
        document.getElementById('cobacos2').style="border: 3px solid green; font-size:15px; text-align:center;"
        
    } else {
        document.getElementById('cobacos2').style="border: 3px solid red; font-size:15px; text-align:center;"
  }
    if (z == "0,5") {
        document.getElementById('cobacos3').style="border: 3px solid green; font-size:15px; text-align:center;"
        
    } else {
        document.getElementById('cobacos3').style="border: 3px solid red; font-size:15px; text-align:center;"
  }
}
  function mencoba321() {
    var x = document.getElementById("cobacosperiode1").value;
    var y = document.getElementById("cobacosperiode2").value;


   
    if (x == "120") {
        document.getElementById('cobacosperiode1').style="border: 3px solid green; font-size:15px; text-align:center;"
        
    } else {
        document.getElementById('cobacosperiode1').style="border: 3px solid red; font-size:15px; text-align:center;"
  }
    if (y == "60") {
        document.getElementById('cobacosperiode2').style="border: 3px solid green; font-size:15px; text-align:center;"
        
    } else {
        document.getElementById('cobacosperiode2').style="border: 3px solid red; font-size:15px; text-align:center;"
  }
}
  function mncbcos() {
    var x = document.getElementById("cbcos1").value;
    var y = document.getElementById("cbcos2").value;
    var z = document.getElementById("cbcos3").value;
    var r = document.getElementById("cbcos4").value;


   
    if (x == "-1") {
        document.getElementById('cbcos1').style="border: 3px solid green; font-size:15px; text-align:center;"
        
    } else {
        document.getElementById('cbcos1').style="border: 3px solid red; font-size:15px; text-align:center;"
  }
    if (y == "2") {
        document.getElementById('cbcos2').style="border: 3px solid green; font-size:15px; text-align:center;"
        
    } else {
        document.getElementById('cbcos2').style="border: 3px solid red; font-size:15px; text-align:center;"
  }
    if (z == "0"||z == "-") {
        document.getElementById('cbcos3').style="border: 3px solid green; font-size:15px; text-align:center;"
        
    } else {
        document.getElementById('cbcos3').style="border: 3px solid red; font-size:15px; text-align:center;"
  }
    if (r == "0"||r == "-") {
        document.getElementById('cbcos4').style="border: 3px solid green; font-size:15px; text-align:center;"
        
    } else {
        document.getElementById('cbcos4').style="border: 3px solid red; font-size:15px; text-align:center;"
  }
}
  function mccbcos() {
    var x = document.getElementById("cbbcos1").value;
    var y = document.getElementById("cbbcos2").value;

   
    if (x == "2") {
        document.getElementById('cbbcos1').style="border: 3px solid green; font-size:15px; text-align:center;"
        
    } else {
        document.getElementById('cbbcos1').style="border: 3px solid red; font-size:15px; text-align:center;"
  }
    if (y == "3") {
        document.getElementById('cbbcos2').style="border: 3px solid green; font-size:15px; text-align:center;"
        
    } else {
        document.getElementById('cbbcos2').style="border: 3px solid red; font-size:15px; text-align:center;"
  }
}
  function mcccbcoss() {
    var x = document.getElementById("cbbbcos1").value;
    var y = document.getElementById("cbbbcos2").value;
    var z = document.getElementById("cbbbcos3").value;
    var r = document.getElementById("cbbbcos4").value;
    var m = document.getElementById("cbbbcos5").value;
    var n = document.getElementById("cbbbcos6").value;

   
    if (x == "-2") {
        document.getElementById('cbbbcos1').style="border: 3px solid green; font-size:15px; text-align:center;"
        
    } else {
        document.getElementById('cbbbcos1').style="border: 3px solid red; font-size:15px; text-align:center;"
  }
    if (y == "1") {
        document.getElementById('cbbbcos2').style="border: 3px solid green; font-size:15px; text-align:center;"
        
    } else {
        document.getElementById('cbbbcos2').style="border: 3px solid red; font-size:15px; text-align:center;"
    }

    if (z == "90") {
        document.getElementById('cbbbcos3').style="border: 3px solid green; font-size:15px; text-align:center;"
        
    } else {
        document.getElementById('cbbbcos3').style="border: 3px solid red; font-size:15px; text-align:center;"
  }
    if (r == "0"||r == "-") {
        document.getElementById('cbbbcos4').style="border: 3px solid green; font-size:15px; text-align:center;"
        
    } else {
        document.getElementById('cbbbcos4').style="border: 3px solid red; font-size:15px; text-align:center;"
  }
    if (m == "2") {
        document.getElementById('cbbbcos5').style="border: 3px solid green; font-size:15px; text-align:center;"
        
    } else {
        document.getElementById('cbbbcos5').style="border: 3px solid red; font-size:15px; text-align:center;"
  }
    if (n == "360") {
        document.getElementById('cbbbcos6').style="border: 3px solid green; font-size:15px; text-align:center;"
        
    } else {
        document.getElementById('cbbbcos6').style="border: 3px solid red; font-size:15px; text-align:center;"
  }
}

  function mencobaaktivitas2() { 
    var x = document.getElementById("bgel1").value;
    var y = document.getElementById("periode1").value;


    
   
    if (x == "2") {
        document.getElementById('bgel1').style="border: 3px solid green; font-size:15px; text-align:center;"
        
    } else {
        document.getElementById('bgel1').style="border: 3px solid red; font-size:15px; text-align:center;"
  }
    if (y == "180") {
        document.getElementById('periode1').style="border: 3px solid green; font-size:15px; text-align:center;"
        
    } else {
        document.getElementById('periode1').style="border: 3px solid red; font-size:15px; text-align:center;"
  }
}
  function akti31() { 
    var x = document.getElementById("311").value;
    var y = document.getElementById("312").value;

   
    if (x == "360") {
        document.getElementById('311').style="border: 3px solid green; font-size:15px; text-align:center;"
        
    } else {
        document.getElementById('311').style="border: 3px solid red; font-size:15px; text-align:center;"
  }
    if (y == "3") {
        document.getElementById('312').style="border: 3px solid green; font-size:15px; text-align:center;"
        
    } else {
        document.getElementById('312').style="border: 3px solid red; font-size:15px; text-align:center;"
  }
}
  function akti32() { 
    var x = document.getElementById("321").value;
    var y = document.getElementById("322").value;

   
    if (x == "1") {
        document.getElementById('321').style="border: 3px solid green; font-size:15px; text-align:center;"
        
    } else {
        document.getElementById('321').style="border: 3px solid red; font-size:15px; text-align:center;"
  }
    if (y == "3") {
        document.getElementById('322').style="border: 3px solid green; font-size:15px; text-align:center;"
        
    } else {
        document.getElementById('322').style="border: 3px solid red; font-size:15px; text-align:center;"
  }
}
  function akti33() { 
    var x = document.getElementById("331").value;
    var y = document.getElementById("332").value;

   
    if (x == "1") {
        document.getElementById('331').style="border: 3px solid green; font-size:15px; text-align:center;"
        
    } else {
        document.getElementById('331').style="border: 3px solid red; font-size:15px; text-align:center;"
  }
    if (y == "3") {
        document.getElementById('332').style="border: 3px solid green; font-size:15px; text-align:center;"
        
    } else {
        document.getElementById('332').style="border: 3px solid red; font-size:15px; text-align:center;"
  }
}
  function akti34() { 
    var x = document.getElementById("341").value;
    var y = document.getElementById("342").value;
    var z = document.getElementById("343").value;
    var r = document.getElementById("344").value;

   
    if (x == "kiri"||x == "Kiri") {
        document.getElementById('341').style="border: 3px solid green; font-size:15px; text-align:center;"
        
    } else {
        document.getElementById('341').style="border: 3px solid red; font-size:15px; text-align:center;"
  }
    if ( y == "kanan"||y== "Kanan") {
        document.getElementById('342').style="border: 3px solid green; font-size:15px; text-align:center;"
        
    } else {
        document.getElementById('342').style="border: 3px solid red; font-size:15px; text-align:center;"
  }
    if (z == "180") {
        document.getElementById('343').style="border: 3px solid green; font-size:15px; text-align:center;"
        
    } else {
        document.getElementById('343').style="border: 3px solid red; font-size:15px; text-align:center;"
  }
    if (r == "180") {
        document.getElementById('344').style="border: 3px solid green; font-size:15px; text-align:center;"
        
    } else {
        document.getElementById('344').style="border: 3px solid red; font-size:15px; text-align:center;"
  }
}
  function akti35() { 
    var x = document.getElementById("351").value;
    var y = document.getElementById("352").value;
    var z = document.getElementById("353").value;
    var r = document.getElementById("354").value;

   
    if (x == "bawah"||x == "Bawah") {
        document.getElementById('351').style="border: 3px solid green; font-size:15px; text-align:center;"
        
    } else {
        document.getElementById('351').style="border: 3px solid red; font-size:15px; text-align:center;"
  }
    if ( y == "1") {
        document.getElementById('352').style="border: 3px solid green; font-size:15px; text-align:center;"
        
    } else {
        document.getElementById('352').style="border: 3px solid red; font-size:15px; text-align:center;"
  }
    if (z == "atas"||z == "Atas") {
        document.getElementById('353').style="border: 3px solid green; font-size:15px; text-align:center;"
        
    } else {
        document.getElementById('353').style="border: 3px solid red; font-size:15px; text-align:center;"
  }
    if (r == "3") {
        document.getElementById('354').style="border: 3px solid green; font-size:15px; text-align:center;"
        
    } else {
        document.getElementById('354').style="border: 3px solid red; font-size:15px; text-align:center;"
  }
}
  function akti36() { 
    var x = document.getElementById("361").value;
    var y = document.getElementById("362").value;
    var z = document.getElementById("363").value;
    var r = document.getElementById("364").value;

   
    if (x == "bawah"||x == "Bawah") {
        document.getElementById('361').style="border: 3px solid green; font-size:15px; text-align:center;"
        
    } else {
        document.getElementById('361').style="border: 3px solid red; font-size:15px; text-align:center;"
  }
    if ( y == "1") {
        document.getElementById('362').style="border: 3px solid green; font-size:15px; text-align:center;"
        
    } else {
        document.getElementById('362').style="border: 3px solid red; font-size:15px; text-align:center;"
  }
    if (z == "atas"||z == "Atas") {
        document.getElementById('363').style="border: 3px solid green; font-size:15px; text-align:center;"
        
    } else {
        document.getElementById('363').style="border: 3px solid red; font-size:15px; text-align:center;"
  }
    if (r == "3") {
        document.getElementById('364').style="border: 3px solid green; font-size:15px; text-align:center;"
        
    } else {
        document.getElementById('364').style="border: 3px solid red; font-size:15px; text-align:center;"
  }
}



//   kuis identitas trigonometri
var kkm;

let wktu = document.querySelector('.waktu');
let nilaiwktu=0;

let selanjutnya = document.querySelector('.lanjut');
let datadiri = document.querySelector('.data_diri');
namanya = document.getElementById('nama');
kelasnya = document.getElementById('kelas');
sekolah = document.getElementById('sekolah');
// let sekolahfix = '';
let kelasfix = '';

//TOMBOL LANJUT
selanjutnya.addEventListener('click', function () {

    let cek = 0;
    let cek1 = 0;
    let cek2 = 0;
    let cek3 = 0;
    if (namanya.value == "") {
        if (namanya.className.indexOf('tt_salah') == -1) {
            namanya.className += ' tt_salah';
        }
    } else {
        namanya.className = namanya.className.replace('tt_salah', '');
        cek += 1;
        cek1 = 1;
    }

    if (kelasnya.value == "0") {
        if (kelasnya.className.indexOf('tt_salah') == -1) {
            kelasnya.className += ' tt_salah';
        }
    } else {
        kelasnya.className = kelasnya.className.replace('tt_salah', '');
        if (kelasnya.value == "1") {
            kelasfix = "IX A";
        } else if (kelasnya.value == "2") {
            kelasfix = "IX B";
        } else if (kelasnya.value == "3") {
            kelasfix = "IX C";
        } else if (kelasnya.value == "4") {
            kelasfix = "IX D";
        } else if (kelasnya.value == "5") {
            kelasfix = "IX E";
        } else if (kelasnya.value == "6") {
            kelasfix = "IX F";
        } else if (kelasnya.value == "7") {
            kelasfix = "IX G";
        }
        cek += 1;
        cek2 = 2;
    }

    if (sekolah.value == "") {
        if (sekolah.className.indexOf('tt_salah') == -1) {
            sekolah.className += ' tt_salah';
        }
    } else {
        sekolah.className = sekolah.className.replace('tt_salah', '');        
        cek += 1;
        cek3 = 3;
    }

    // console.log(sekolahfix);

    if (cek1 == 0) {
        alert("Masih ada data yang kosong, Isi terlebih dahulu nama!");
    } else if (cek2 == 0) {
        alert("Masih ada data yang kosong, Isi terlebih dahulu kelas!");
    } else if (cek3 == 0) {
        alert("Masih ada data yang kosong, Isi terlebih dahulu sekolah!");
    } else if (cek == 3) {
        datadiri.className += ' hilang';
        document.getElementById('data').className += ' hilang';
        document.getElementById('kiri').className = document.getElementById('kiri').className.replace('hilang', '');
        document.getElementById('kanan').className = document.getElementById('kanan').className.replace('hilang', '');
        // document.getElementById('up').className = document.getElementById('up').className.replace('hilang', '');
        // countDown();
        wktu.classList.toggle('hilang');
        // waktu
            countDownDate = new Date().getTime();
            //waktu 30 menit
            countDownDate += 1801000;
            //waktu 45 menit
            // countDownDate += 2700000;
            // countDownDate += 12000;
            //15 detik
            // countDownDate += 17000;
            var x = setInterval(function() {
            var now = new Date().getTime();
            var distance = countDownDate - now;
                
            // Perhitungan waktu untuk menit dan detik
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
                
            document.getElementById("timer").innerHTML = minutes + ":" + seconds;
                
            if (distance < 0) {
                clearInterval(x);
                document.getElementById("timer").innerHTML = "Waktu Selesai";
                nilaiwktu=1;
            }
            }, 1000);

    } else if (cek1 == 0 && cek2 == 0 && cek3 == 0){
        alert("Data masih kosong, Lengkapi dulu data anda")
    }


    // MathJax.typeset();

});


// -----------------------------------------------------------------------------------------
// mengambil data dan menampilkanya

let dat = new XMLHttpRequest();
dat.onreadystatechange = function () {

    cek = [];
    jwbs = [];
    hasilakhir = 0;
    benarr = 0;
    salahh = 0;

    if (dat.readyState == 4 && dat.status == 200) {
        // tankap apapun responsnya tangkap,lalu diubah ke objeck
        let data = JSON.parse(this.responseText);
        // melihat data 
        // console.log(data);

        // ---------------------------------
        // acak urutan soal
        //random urutan
        for (let x = 0; x < 100; x++) {
            // acak angka dengan batas length.data dan minimum 0
            let angka = Math.floor(Math.random() * data.length) + 0;
            cek.push(angka);
        }
        // membuang angka yang sama
        cek = Array.from(new Set(cek));
        console.log(cek);
        // ---------------------------------
        // ambil data tertentu

        for (let i = 0; i < cek.length; i++) {
            let nilai = cek[i];

            let soaldata = data[nilai]["soal" + nilai]["soal"];
            let jwb0 = data[nilai]["soal" + nilai]["a"];
            let jwb1 = data[nilai]["soal" + nilai]["b"];
            let jwb2 = data[nilai]["soal" + nilai]["c"];
            let jwb3 = data[nilai]["soal" + nilai]["d"];
            let jwb4 = data[nilai]["soal" + nilai]["e"];
            let bnr = data[nilai]["soal" + nilai]["benar"];

            let jwb = [jwb0, jwb1, jwb2, jwb3, jwb4];

            jwbs.push(bnr);

            // ---------------------------------
            // rangkai konten soal;
            let bg_pertanyaan = document.createElement('div');
            bg_pertanyaan.setAttribute('class', 'bg_pertanyaan');
            if (i != 0) {
                bg_pertanyaan.className += " hilang";
            }

            let no = document.createElement('div');
            no.setAttribute('class', 'no');

            let soal = document.createElement('p');
            let text_soal = document.createTextNode('Nomor ');

            let span = document.createElement('span');
            let text_span = document.createTextNode(i + 1);

            span.appendChild(text_span);
            soal.appendChild(text_soal);
            soal.appendChild(span);
            no.appendChild(soal);
            bg_pertanyaan.appendChild(no);

            // ---------------------------------

            let inti_pertanyaan = document.createElement('div');
            inti_pertanyaan.setAttribute('class', 'inti_pertanyaan');

            let pertanyaannya = document.createElement('div');
            pertanyaannya.setAttribute('class', 'pertanyaannya');

            let new_p = document.createElement('p');
            new_p.setAttribute('class', 'coba'+i)
            let text_p = document.createTextNode(soaldata);

            new_p.appendChild(text_p);
            pertanyaannya.appendChild(new_p);
            inti_pertanyaan.appendChild(pertanyaannya);
            bg_pertanyaan.appendChild(inti_pertanyaan);

            setTimeout(function(){ 
                let a = document.querySelector('.coba'+i);
                a.innerHTML =  soaldata;
            }, 3000);
            //console.log(document.querySelectorAll('.coba1'))

            // ---------------------------------

            let batas = document.createElement('div');
            batas.setAttribute('class', 'batas');

            inti_pertanyaan.appendChild(batas);
            bg_pertanyaan.appendChild(inti_pertanyaan);

            // ---------------------------------

            let soall = document.createElement('div');
            soall.setAttribute('class', 'soall');

            for (let ii = 0; ii < 5; ii++) {
                let bg_pilihan = document.createElement('label');
                bg_pilihan.setAttribute('class', 'bg_pilihan');

                let input = document.createElement('input');
                input.setAttribute('type', 'radio');
                input.setAttribute('name', 'radio' + i);
                if (ii == 0) {
                    input.setAttribute('value', 'a');
                } else if (ii == 1) {
                    input.setAttribute('value', 'b');
                } else if (ii == 2) {
                    input.setAttribute('value', 'c');
                } else if (ii == 3) {
                    input.setAttribute('value', 'd');
                } else {
                    input.setAttribute('value', 'e');
                }

                let textnya = document.createElement('span');
                textnya.setAttribute('class', 'textnya');

                let nav_pilihan = document.createElement('span');
                nav_pilihan.setAttribute('class', 'nav_pilihan');

                let new_p1 = document.createElement('p');
                let text_p1 = document.createTextNode(jwb[ii]);

                new_p1.appendChild(text_p1);
                textnya.appendChild(nav_pilihan);
                textnya.appendChild(new_p1);
                bg_pilihan.appendChild(input);
                bg_pilihan.appendChild(textnya);
                soall.appendChild(bg_pilihan);
            }

            // ---------------------------------

            inti_pertanyaan.appendChild(soall);
            bg_pertanyaan.appendChild(inti_pertanyaan);

            // ---------------------------------

            let nav_sebelum = document.createElement('div');
            nav_sebelum.setAttribute('class', 'nav_sebelum');
            if (i == 0) {
                nav_sebelum.className += " disablee";
            }

            let new_p2 = document.createElement('p');
            let text_p2 = document.createTextNode('Sebelumnya');

            new_p2.appendChild(text_p2);
            nav_sebelum.appendChild(new_p2);
            inti_pertanyaan.appendChild(nav_sebelum);
            bg_pertanyaan.appendChild(inti_pertanyaan);

            // ---------------------------------

            let nav_selanjut = document.createElement('div');
            nav_selanjut.setAttribute('class', 'nav_selanjut');
            if (i == (cek.length - 1)) {
                nav_selanjut.className += " disablee";
            }

            let new_p4 = document.createElement('p');
            let text_p4 = document.createTextNode('Selanjutnya');

            new_p4.appendChild(text_p4);
            nav_selanjut.appendChild(new_p4);
            inti_pertanyaan.appendChild(nav_selanjut);
            bg_pertanyaan.appendChild(inti_pertanyaan);

            // ---------------------------------

            // let nav_selesai = document.createElement('div');
            // nav_selesai.setAttribute('class', 'selesai');

            // let new_p3 = document.createElement('p');
            // let text_p3 = document.createTextNode('Selesai');

            // new_p3.appendChild(text_p3);
            // nav_selesai.appendChild(new_p3);
            // inti_pertanyaan.appendChild(nav_selesai);
            // bg_pertanyaan.appendChild(inti_pertanyaan);

            // ---------------------------------

            let div_jawaban = document.createElement('div');
            div_jawaban.setAttribute('class', 'pertanyaannya hilang');


            let new_pp = document.createElement('p');
            let text_pp = document.createTextNode("Jawaban  = ");

            new_pp.appendChild(text_pp);
            div_jawaban.appendChild(new_pp);

            inti_pertanyaan.appendChild(div_jawaban);

            // ---------------------------------

            let clear = document.createElement('div');
            clear.setAttribute('class', 'clear');
            inti_pertanyaan.appendChild(clear);
            bg_pertanyaan.appendChild(inti_pertanyaan);

            // letakkan di 
            const bd = document.getElementById('kiri');
            bd.appendChild(bg_pertanyaan);
        }

        // akhir if
        // perintah tombol selanjutnya
        // ---------------------------------

        let bg_pertanyaannya = document.querySelectorAll('.bg_pertanyaan');
        let tmbl_selanjutnya = document.querySelectorAll('.nav_selanjut');
        for (let i = 0; i < tmbl_selanjutnya.length - 1; i++) {
            tmbl_selanjutnya[i].addEventListener('click', function () {

                let bgnya = tmbl_selanjutnya[i].parentElement.parentElement;
                // menghilangkan bg_sekarang
                bgnya.className += " hilang";
                // menampilkan bg_pertanyaan selanjutnya
                bg_pertanyaannya[i + 1].className = bg_pertanyaannya[i + 1].className.replace("hilang", "");
            });

        }

        // ---------------------------------
        // perintah tombol kembali
        let tmbl_sebelumnya = document.querySelectorAll('.nav_sebelum');
        for (let i = 0; i < tmbl_sebelumnya.length; i++) {
            tmbl_sebelumnya[i].addEventListener('click', function () {
                if (i != 0) {
                    let bgnya = tmbl_sebelumnya[i].parentElement.parentElement;
                    bgnya.className += " hilang";
                    // menampilkan bg_pertanyaan selanjutnya
                    bg_pertanyaannya[i - 1].className = bg_pertanyaannya[i - 1].className.replace("hilang", "");
                }
            });
        }

        // ---------------------------------
        // tangkap soall pilihan yang dklik dan beri warna di nav soal
        let soallnya = document.querySelectorAll('.soall');
        let soal_navnya = document.querySelectorAll('.soal_nav');

        for (let i = 0; i < soallnya.length; i++) {
            soallnya[i].addEventListener('click', function () {

                let pilihannya = document.querySelectorAll('.bg_pilihan input');
                for (let j = 0; j < pilihannya.length; j++) {
                    pilihannya[j].addEventListener('click', function () {
                        soal_navnya[i].className = soal_navnya[i].className.replace("belum", " sudah");
                    });
                }


            });
        }

        // ---------------------------------
        // cek jawaban
        let selesai = document.querySelector('.selesai');
        let pil_user = [];
        jawabannya = [];
        jawabannya_no = [];

        var xx =setInterval(function(){
            if(nilaiwktu ==1){
                console.log("ok");
                clearInterval(xx);

                hasilakhir = 0;
                benarr = 0;
                salahh = jwbs.length;

                let pils_soal = document.querySelectorAll('input');


                for (let i = 0; i < jwbs.length; i++) {
                    for (let j = 0; j < pils_soal.length; j++) {

                        if (j == 0) {

                        } else {
                            // menonaktifkan pilihan
                            // pils_soal[j].setAttribute('disabled', 'true');

                            if (pils_soal[j].attributes.name.nodeValue == 'radio' + i) {
                                if (pils_soal[j].checked == true) {
                                    // cek jawaban dengan kunci
                                    // console.log(pils_soal[j].value);
                                    // console.log(jwbs[i]);
                                    pil_user.push(pils_soal[j].value);
                                    if (pils_soal[j].value == jwbs[i]) {
                                        hasilakhir = hasilakhir + 10;
                                        // console.log(hasilakhir);
                                        benarr = benarr + 1;
                                    } else {
                                        hasilakhir = hasilakhir;
                                        // console.log(hasilakhir);
                                    }
                                }
                                else{
                                    pil_user.push("x");
                                }
                            }
                        }


                    }

                }



                for (let i = 0; i < cek.length; i++) {
                    for (let j = 0; j < cek.length; j++) {
                        if (i == cek[j]) {
                            jawabannya.push(pil_user[j]);
                            jawabannya_no.push(cek[j]);
                        }
                    }
                }
                // console.log("jwb_user_urut_no :" + jawabannya_no);
                // console.log("jwb_user_urut :" + jawabannya);


                // simpan kedatabase----------
                let waktunya = waktu();
                let harinya = hari();

                createTask(sekolah.value.toUpperCase(), namanya.value.toUpperCase(), kelasfix, hasilakhir, waktunya, harinya, jawabannya);

                let namainput = document.querySelector('.nama');
                namainput.innerText = namanya.value.toUpperCase();

                let sekolahinput = document.querySelector('.sekolah');
                sekolahinput.innerText = sekolah.value.toUpperCase();

                let kelasinput = document.querySelector('.kelas');
                kelasinput.innerText = kelasfix;
                
                let hariinput = document.querySelector('.hari');
                hariinput.innerText = harinya;

                let waktuinput = document.querySelector('.waktu');
                waktuinput.innerText = waktunya;

                let hasillinput = document.querySelector('.hasill');
                hasillinput.innerText = hasilakhir;

                let kirihilang = document.querySelector('.kiri');
                kirihilang.className += ' hilang';

                let kananhilang = document.querySelector('.kanan');
                kananhilang.className += ' hilang';

                let datanya = document.querySelector('.dataaa');
                datanya.className = datanya.className.replace('hilang', '');

                if(hasilakhir>=kkm3){
                    let next = document.getElementById("next");
                    next.className = next.className.replace("hilang","");
                } else {
                    let ulang = document.getElementById("ulang");
                    ulang.className = ulang.className.replace("hilang","");
                }

                wktu.classList.toggle('hilang');

                
                //nilai disimpan ke local storage
            localStorage.setItem("nkuis3",hasilakhir);
            console.log(localStorage);

            }
        },1000);

        selesai.addEventListener('click', function () {
            let sarat = 0;

            for (let t = 0; t < jwbs.length; t++) {
                if ((soal_navnya[t].className.indexOf('sudah') == 10)) {
                    sarat = sarat + 1;
                }
            }

            if (sarat == jwbs.length) {
                // array kunci
                hasilakhir = 0;
                benarr = 0;
                salahh = jwbs.length;

                let pils_soal = document.querySelectorAll('input');


                for (let i = 0; i < jwbs.length; i++) {
                    for (let j = 0; j < pils_soal.length; j++) {

                        if (j == 0) {

                        } else {
                            // menonaktifkan pilihan
                            // pils_soal[j].setAttribute('disabled', 'true');

                            if (pils_soal[j].attributes.name.nodeValue == 'radio' + i) {
                                if (pils_soal[j].checked == true) {
                                    // cek jawaban dengan kunci
                                    // console.log(pils_soal[j].value);
                                    // console.log(jwbs[i]);
                                    pil_user.push(pils_soal[j].value);
                                    if (pils_soal[j].value == jwbs[i]) {
                                        hasilakhir = hasilakhir + 10;
                                        benarr = benarr + 1;
                                    } else {
                                        hasilakhir = hasilakhir;
                                    }
                                }
                            }
                        }
                    }
                }
                for (let i = 0; i < cek.length; i++) {
                    for (let j = 0; j < cek.length; j++) {
                        if (i == cek[j]) {
                            jawabannya.push(pil_user[j]);
                            jawabannya_no.push(cek[j]);
                        }
                    }
                }
                // console.log("jwb_user_urut_no :" + jawabannya_no);
                // console.log("jwb_user_urut :" + jawabannya);
                // simpan kedatabase----------
                // console.log(namanya.value);
                // console.log(sekolah.value);
                // console.log(kelasfix);
                // console.log(hasilakhir);
                
                let harinya = hari();
                let waktunya = waktu();

                createTask(sekolah.value.toUpperCase(), namanya.value.toUpperCase(), kelasfix, hasilakhir, waktunya, harinya, jawabannya);

                let namainput = document.querySelector('.nama');
                namainput.innerText = namanya.value.toUpperCase();

                let sekolahinput = document.querySelector('.sekolah');
                sekolahinput.innerText = sekolah.value.toUpperCase();

                let kelasinput = document.querySelector('.kelas');
                kelasinput.innerText = kelasfix;
                // kelasinput.innerText = kelasnya.value.toUpperCase(); 
                
                let hariinput = document.querySelector('.hari');
                hariinput.innerText = harinya;

                let waktuinput = document.querySelector('.waktu');
                waktuinput.innerText = waktunya;

                let hasillinput = document.querySelector('.hasill');
                hasillinput.innerText = hasilakhir;

                let kirihilang = document.querySelector('.kiri');
                kirihilang.className += ' hilang';

                let kananhilang = document.querySelector('.kanan');
                kananhilang.className += ' hilang';

                let datanya = document.querySelector('.dataaa');
                datanya.className = datanya.className.replace('hilang', '');

                if(hasilakhir>=kkm3){
                    let next = document.getElementById("next");
                    next.className = next.className.replace("hilang","");
                } else {
                    let ulang = document.getElementById("ulang");
                    ulang.className = ulang.className.replace("hilang","");
                }

            } else {
                alert('Masih Ada Soal Yang Belum Dijawab, Periksa Kembali . . . !');
            }

                //nilai disimpan ke local storage
            localStorage.setItem("nkui2",hasilakhir);
            console.log(localStorage);

        });

        // ---------------------------------
        // nav_soal diklik
        let klik_nav_soal = document.querySelectorAll('.soal_nav');
        for (let l = 0; l < klik_nav_soal.length; l++) {
            klik_nav_soal[l].addEventListener('click', function () {
                let pindah_bgsoalnya = document.querySelectorAll('.bg_pertanyaan');
                for (let k = 0; k < pindah_bgsoalnya.length; k++) {

                    if (k == l) {
                        pindah_bgsoalnya[k].className = pindah_bgsoalnya[k].className.replace(" hilang", " ");
                    } else {
                        if (pindah_bgsoalnya[k].className.indexOf('hilang') == -1) {
                            pindah_bgsoalnya[k].className += ' hilang';
                        }
                    }
                }
            });
    
        }
        MathJax.typeset()
    }


}
dat.open('GET', '3.kuis3.json', true);
dat.send();


// menyimpan ke dalam databasenya

var d = new Date();
var t = d.getTime();
var counter = t;

// ambil jamnya
window.setTimeout("waktu()", 1000);

function waktu() {
    var tanggal = new Date();
    setTimeout("waktu()", 1000);
    return (tanggal.getHours() + ":" + tanggal.getMinutes() + ":" + tanggal.getSeconds());
}

// harinya
function hari() {
    tanggallengkap = new String();
    namahari = ("Minggu Senin Selasa Rabu Kamis Jumat Sabtu");
    namahari = namahari.split(" ");
    namabulan = ("Januari Februari Maret April Mei Juni Juli Agustus September Oktober November Desember");
    namabulan = namabulan.split(" ");
    tgl = new Date();
    hari = tgl.getDay();
    tanggal = tgl.getDate();
    bulan = tgl.getMonth();
    tahun = tgl.getFullYear();
    tanggallengkap = namahari[hari] + ", " + tanggal + " " + namabulan[bulan] + " " + tahun;
    return (tanggallengkap);
}


function createTask(sekolah, nama, kelas, nilai, waktunya, hari, jawab) {
    counter += 1;
    var task = {
        id: counter,
        sekolah: sekolah,
        nama: nama,
        kelas: kelas,
        nilai: nilai,        
        waktu: waktunya,
        hari: hari,
        jawabsiswa: jawab
    }

    let database = firebase.database().ref("kuis3/" + counter);
    database.set(task);

}