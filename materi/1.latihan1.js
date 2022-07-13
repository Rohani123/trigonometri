//  interaktif 1.1
function interaktif1(){
    var D=document.getElementById('D').value;
    var S=document.getElementById('S').value;
    var M=document.getElementById('M').value;
  
    if(x==""){
      alert("Silahkan isi jawaban terlebih Dahulu!");
    } else if(x==0) {
      alert("Jawaban masih ada yang kosong, isi terlebih dahulu!");
    }else if(D!='m'){
      document.getElementById('D').style="border: 3px solid red; font-size:15px; text-align:center;"
    }
  else{
      document.getElementById('D').style="border: 3px solid green; font-size:15px; text-align:center;"
  }
  
  if(x==""){
    alert("Silahkan isi jawaban terlebih Dahulu!");
  } else if(x==0) {
    alert("Jawaban masih ada yang kosong, isi terlebih dahulu!");
  }else if (S!='n'){
    document.getElementById('S').style="border: 3px solid red; font-size:15px; text-align:center;"
  }
  else{
    document.getElementById('S').style="border: 3px solid green; font-size:15px; text-align:center;"
  }
  
  if(x==""){
    alert("Silahkan isi jawaban terlebih Dahulu!");
  } else if(x==0) {
    alert("Jawaban masih ada yang kosong, isi terlebih dahulu!");
  }else if (M!='o'){
    document.getElementById('M').style="border: 3px solid red; font-size:15px; text-align:center;"
  }
  else{
    document.getElementById('M').style="border: 3px solid green; font-size:15px; text-align:center;"
  }
  
  
  }

//   interaktif 1.2
function pinteraktif2(){
    var MN=document.getElementById('MN').value;
    var NO=document.getElementById('NO').value;
    var OM=document.getElementById('OM').value;
    var prumus=document.getElementById('prumus').value;
  
  if (MN=='10'){
      document.getElementById('MN').style="border: 3px solid green; font-size:15px; text-align:center;"
    }
  else{
      document.getElementById('MN').style="border: 3px solid red; font-size:15px; text-align:center;"
  }
  
  if (NO=='12'){
    document.getElementById('NO').style="border: 3px solid green; font-size:15px; text-align:center;"
  }
  else{
    document.getElementById('NO').style="border: 3px solid red; font-size:15px; text-align:center;"
  }
  
  if (OM=='6'){
    document.getElementById('OM').style="border: 3px solid green; font-size:15px; text-align:center;"
  }
  else{
    document.getElementById('OM').style="border: 3px solid red; font-size:15px; text-align:center;"
  }
  if (prumus=='B'||prumus=='b'){
    document.getElementById('prumus').style="border: 3px solid green; font-size:15px; text-align:center;"
  }
  else{
    document.getElementById('prumus').style="border: 3px solid red; font-size:15px; text-align:center;"
  }
  
  }


  
  function pinteraktif22(){
    var hasilcontoh1=document.getElementById('hasilcontoh1').value;
    var jawabcoba1;
    

    if(hasilcontoh1==""){
      alert("Silahkan isi jawaban terlebih Dahulu!");
      return false;
    } else if(hasilcontoh1==0) {
      alert("Jawaban masih ada yang kosong, isi terlebih dahulu!");
      return false;
    }else if (hasilcontoh1 == "0,8"||hasilcontoh1 == "0,833") {
      // jawaban = "Incorrect"; document.getElementById("coba1").style.color = "red";
      document.getElementById('hasilcontoh1').style="border: 3px solid green; font-size:15px; text-align:center;"
      jawabcoba1 = document.getElementById('hasilcontoh1');
      jawabcoba1 = `<div class="pembahasan mt-3 mr-3 p-3" style="background-color:green;color:white;">
                          Jawaban Anda benar <br> </div>
                          </div>`;  
      
  } else {
      // jawaban = "Correct"; document.getElementById("coba1").style.color = "green";
      document.getElementById('hasilcontoh1').style="border: 3px solid red; font-size:15px; text-align:center;"
      jawabcoba1 = document.getElementById('hasilcontoh1');
      jawabcoba1 = `<div class="pembahasan mt-3 mr-3 p-3" style="background-color:red;color:white;">
                          Jawaban Anda salah <br> </div>
                          <h5>Perhatikan jawaban berikut ini</h5>
                          <img src="../img/jawaban interakif cos.PNG" alt="">
                          <img src="../img/jawaban interakif cos1.PNG" alt="">
                          <br>                     
                          </div>`;  
  }
  document.getElementById("jawabcoba1").innerHTML = jawabcoba1;
  }


  function pinteraktif23(){
    var sisim=document.getElementById('sisim').value;
    var prumus2=document.getElementById('prumus2').value;
  
  
  if (sisim=='12'){
    document.getElementById('sisim').style="border: 3px solid green; font-size:15px; text-align:center;"
  }
  else{
    document.getElementById('sisim').style="border: 3px solid red; font-size:15px; text-align:center;"
  }
  if (prumus2=='B'||prumus2=='b'){
    document.getElementById('prumus2').style="border: 3px solid green; font-size:15px; text-align:center;"
  }
  else{
    document.getElementById('prumus2').style="border: 3px solid red; font-size:15px; text-align:center;"
  }
  
  }

  function pinteraktif231() {
    var hasilcontoh2 = document.getElementById("hasilcontoh2").value;
    var jawabcoba2;
    
   
    if(hasilcontoh2== "" ){
      alert("Silahkan isi jawaban terlebih Dahulu!");
      return false;
    } else if(hasilcontoh2==0) {
      alert("Jawaban masih ada yang kosong, isi terlebih dahulu!");
      return false;
    }else if (hasilcontoh2 == "6") {
        // jawaban = "Incorrect"; document.getElementById("coba1").style.color = "red";
        document.getElementById('hasilcontoh2').style="border: 3px solid green; font-size:15px; text-align:center;"
        jawabcoba2 = document.getElementById('hasilcontoh2');
        jawabcoba2 = `<div class="pembahasan mt-3 mr-3 p-3" style="background-color:green;color:white;">
                            Jawaban Anda benar <br> </div>
                            </div>`;  
        
    } else {
        // jawaban = "Correct"; document.getElementById("coba1").style.color = "green";
        document.getElementById('hasilcontoh2').style="border: 3px solid red; font-size:15px; text-align:center;"
        jawabcoba2 = document.getElementById('hasilcontoh2');
        jawabcoba2 = `<div class="pembahasan mt-3 mr-3 p-3" style="background-color:red;color:white;">
                            Jawaban Anda salah <br> </div>
                            <h5>Perhatikan jawaban berikut ini</h5>
                            <img src="../img/jawaban interakif cos2.PNG" alt="">
                            <br>                     
                            </div>`;  
    }
    document.getElementById("jawabcoba2").innerHTML = jawabcoba2;
  }


//   interaktif tangen 
function pinteraktif31(){
    var p=document.getElementById('p').value;
    var q=document.getElementById('q').value;
    var r=document.getElementById('r').value;
    var prumus1=document.getElementById('prumus1').value;
 
  
  if (p=='6'){
      document.getElementById('p').style="border: 3px solid green; font-size:15px; text-align:center;"
    }
  else{
      document.getElementById('p').style="border: 3px solid red; font-size:15px; text-align:center;"
  }
  
  if (q=='6'){
    document.getElementById('q').style="border: 3px solid green; font-size:15px; text-align:center;"
  }
  else{
    document.getElementById('q').style="border: 3px solid red; font-size:15px; text-align:center;"
  }
  
  if (r=='8,4'){
    document.getElementById('r').style="border: 3px solid green; font-size:15px; text-align:center;"
  }
  else{
    document.getElementById('r').style="border: 3px solid red; font-size:15px; text-align:center;"
  }
  if (prumus1=='C'||prumus1=='c'){
    document.getElementById('prumus1').style="border: 3px solid green; font-size:15px; text-align:center;"
  }
  else{
    document.getElementById('prumus1').style="border: 3px solid red; font-size:15px; text-align:center;"
  }
  


  }
  function pinteraktif32(){
    var hasilcontoh3=document.getElementById('hasilcontoh3').value;
    var jawabcoba3;

    if(hasilcontoh3==""){
      alert("Silahkan isi jawaban terlebih Dahulu!");
      return false;
    } else if(hasilcontoh3==0) {
      alert("Jawaban masih ada yang kosong, isi terlebih dahulu!");
      return false;
    }else if (hasilcontoh3=='1'){
      document.getElementById('hasilcontoh3').style="border: 3px solid green; font-size:15px; text-align:center;"
      jawabcoba3 = document.getElementById('hasilcontoh3');
      jawabcoba3 = `<div class="pembahasan mt-3 mr-3 p-3" style="background-color:green;color:white;">
                          Jawaban Anda benar <br> </div>
                          </div>`;  
    }
    else{
      document.getElementById('hasilcontoh3').style="border: 3px solid red; font-size:15px; text-align:center;"
      jawabcoba3 = document.getElementById('hasilcontoh2');
      jawabcoba3 = `<div class="pembahasan mt-3 mr-3 p-3" style="background-color:red;color:white;">
                          Jawaban Anda salah <br> </div>
                          <h5>Perhatikan jawaban berikut ini</h5>
                          <img src="../img/jawaban interakif tan1.PNG" alt="">
                          <br>                     
                          </div>`;  
  }
  document.getElementById("jawabcoba3").innerHTML = jawabcoba3;
  }
function pinteraktif41(){
    var siDe=document.getElementById('siDe').value;
    var prumus3=document.getElementById('prumus3').value;
 
  
  if (siDe=='12'){
      document.getElementById('siDe').style="border: 3px solid green; font-size:15px; text-align:center;"
    }
  else{
      document.getElementById('p').style="border: 3px solid red; font-size:15px; text-align:center;"
  }
  
  if (prumus3=='C'||prumus3=='c'){
    document.getElementById('prumus3').style="border: 3px solid green; font-size:15px; text-align:center;"
  }
  else{
    document.getElementById('prumus3').style="border: 3px solid red; font-size:15px; text-align:center;"
  }
  

  }
  function pinteraktif42(){
    var hasilcontoh3=document.getElementById('hasilcontoh4').value;
    var jawabcoba4;

    if(hasilcontoh3==""){
      alert("Silahkan isi jawaban terlebih Dahulu!");
      return false;
    } else if(hasilcontoh3==0) {
      alert("Jawaban masih ada yang kosong, isi terlebih dahulu!");
      return false;
    }else if (hasilcontoh3=='20,8'){
      document.getElementById('hasilcontoh4').style="border: 3px solid green; font-size:15px; text-align:center;"
      jawabcoba4 = document.getElementById('hasilcontoh4');
      jawabcoba4 = `<div class="pembahasan mt-3 mr-3 p-3" style="background-color:green;color:white;">
                          Jawaban Anda benar <br> </div>
                          </div>`;  
    }
    else{
      document.getElementById('hasilcontoh4').style="border: 3px solid red; font-size:15px; text-align:center;"
      jawabcoba4 = document.getElementById('hasilcontoh4');
      jawabcoba4 = `<div class="pembahasan mt-3 mr-3 p-3" style="background-color:red;color:white;">
                          Jawaban Anda salah <br> </div>
                          <h5>Perhatikan jawaban berikut ini</h5>
                          <img src="../img/jawaban interakif tan2.PNG" alt="">
                          <img src="../img/jawaban interakif tan3.PNG" alt="">
                          <img src="../img/jawaban interakif tan4.PNG" alt="">
                          <br>                     
                          </div>`;  
  }
  document.getElementById("jawabcoba4").innerHTML = jawabcoba4;
  }











  function Functiontwo() {
    var x = document.getElementById("hasilcontoh4").value;
    var jawaban1;
    
   
    if (x == "21"||x == "20,786"||x == "20,79"||x == "20,797"||x == "20,8") {
        // jawaban = "Incorrect"; document.getElementById("coba1").style.color = "red";
        jawaban1 = document.getElementById('hasilcontoh4');
        jawaban1 = `<div class="pembahasan mt-3 mr-3 p-3" style="background-color:green;color:white;">
                            Jawaban Anda benar <br> </div>
                            </div>`;  
        
    } else {
        // jawaban = "Correct"; document.getElementById("coba1").style.color = "green";
        jawaban1 = document.getElementById('hasilcontoh4');
        jawaban1 = `<div class="pembahasan mt-3 mr-3 p-3" style="background-color:red;color:white;">
                            Jawaban Anda salah <br> </div>
                            <h5>Perhatikan jawaban berikut ini</h5>
                            <img src="../img/jawaban latihan perbandingan 2.PNG" alt="">
                            <br>                     
                            </div>`;  
    }
    document.getElementById("jawaban1").innerHTML = jawaban1;
  }


//   Latihan 3.1.1
function Functionthree() {
    var x = document.getElementById("latihan1").value;
    var jawaban2;
    
   
    if (x == "3") {
        // jawaban = "Incorrect"; document.getElementById("coba1").style.color = "red";
        jawaban2 = document.getElementById('latihan1');
        jawaban2 = `<div class="pembahasan mt-3 mr-3 p-3" style="background-color:green;color:white;">
                            Jawaban Anda benar <br> </div>
                            </div>`;  
        
    } else {
        // jawaban = "Correct"; document.getElementById("coba1").style.color = "green";
        jawaban2 = document.getElementById('latihan1');
        jawaban2 = `<div class="pembahasan mt-3 mr-3 p-3" style="background-color:red;color:white;">
                            Jawaban Anda salah <br> </div>
                            <h5>Perhatikan jawaban berikut ini</h5>
                            <img src="../img/jawaban latihan perbandingan 3.PNG" alt="" style="float:right; margin:1px">
                            <br> <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>                    
                            </div>`;  
    }
    document.getElementById("jawaban2").innerHTML = jawaban2;
  }
  
// mari mencoba1
function pmencoba1(){
    var mir=document.getElementById('mir').value;
    var dep=document.getElementById('dep').value;
    var sam=document.getElementById('sam').value;
    var x = document.getElementById("pcoba1").value;
    var jawaban3;
  
  if (mir=='5'){
      document.getElementById('mir').style="border: 3px solid green; font-size:15px; text-align:center;"
    }
  else{
      document.getElementById('mir').style="border: 3px solid red; font-size:15px; text-align:center;"
  }
  
  if (dep=='3'){
    document.getElementById('dep').style="border: 3px solid green; font-size:15px; text-align:center;"
  }
  else{
    document.getElementById('dep').style="border: 3px solid red; font-size:15px; text-align:center;"
  }
  
  if (sam=='4'){
    document.getElementById('sam').style="border: 3px solid green; font-size:15px; text-align:center;"
  }
  else{
    document.getElementById('sam').style="border: 3px solid red; font-size:15px; text-align:center;"
  }
  
  if (x == "0,6") {
    // jawaban = "Incorrect"; document.getElementById("coba1").style.color = "red";
    document.getElementById('pcoba1').style="border: 3px solid green; font-size:15px; text-align:center;"
    jawaban3 = document.getElementById('pcoba1');
    jawaban3 = `<div class="pembahasan mt-3 mr-3 p-3" style="background-color:green;color:white;">
                        Jawaban Anda benar <br> </div>
                        </div>`;  
    
} else {
    // jawaban = "Correct"; document.getElementById("coba1").style.color = "green";
    document.getElementById('pcoba1').style="border: 3px solid red; font-size:15px; text-align:center;"
    jawaban3 = document.getElementById('pcoba1');
    jawaban3 = `<div class="pembahasan mt-3 mr-3 p-3" style="background-color:red;color:white;">
                        Jawaban Anda salah <br> </div>
                        <h5>Perhatikan jawaban berikut ini</h5>
                        <img src="../img/jawaban latihan perbandingan 4.PNG" alt="" style="float:right; margin:1px">
                        <br> <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>                    
                        </div>`;  
}
document.getElementById("jawaban3").innerHTML = jawaban3;
  }


  function Latihan21() {
    var x = document.getElementById("jwb_a").value;
    var jawab1;

    if(x==""){
      alert("Silahkan isi jawaban terlebih Dahulu!");
      return false;
    } else if(x==0) {
      alert("Jawaban masih ada yang kosong, isi terlebih dahulu!");
      return false;
    }else if(x == "0,6") {
      jawab1 = document.getElementById('jwb_a');
      jawab1 = `<div class="pembahasan mt-3 mr-3 p-3" style="background-color:green;color:white;">
                          Jawaban Anda benar <br> </div>
                          </div>`;  
    } else {
      // jawaban = "Correct"; document.getElementById("coba1").style.color = "green";
      jawab1 = document.getElementById('jwb_a');
      jawab1 = `<div class="pembahasan mt-3 mr-3 p-3" style="background-color:red;color:white;">
                          Jawaban Anda salah <br> </div>
                         
                          <img src="../img/jawaban latihan perbandingan 5.PNG" alt="">
                          <br>                     
                          </div>`;  
  }
  document.getElementById("jawab1").innerHTML = jawab1;
}
    
   
  function Latihan22() {
    var x = document.getElementById("jwb_b").value;
    var jawab2;
    
   
    if(x==""){
      alert("Silahkan isi jawaban terlebih Dahulu!");
      return false;
    } else if(x==0) {
      alert("Jawaban masih ada yang kosong, isi terlebih dahulu!");
      return false;
    }else if (x == "3") {
        // jawaban = "Incorrect"; document.getElementById("coba1").style.color = "red";
        jawab2 = document.getElementById('jwb_a');
        jawab2 = `<div class="pembahasan mt-3 mr-3 p-3" style="background-color:green;color:white;">
                            Jawaban Anda benar <br> </div>
                            </div>`;  
        
    } else {
        // jawaban = "Correct"; document.getElementById("coba1").style.color = "green";
        jawab2 = document.getElementById('jwb_b');
        jawab2 = `<div class="pembahasan mt-3 mr-3 p-3" style="background-color:red;color:white;">
                            Jawaban Anda salah <br> </div>
                            <img src="../img/jawaban latihan perbandingan 6.PNG" alt=""><br> 
                            
                            <br>                     
                            </div>`;  
    }
    document.getElementById("jawab2").innerHTML = jawab2;
  }

  function Latihan1() {
    var x = document.getElementById("lat1").value;
    var jawab3;
    
   
    if(x==""){
      alert("Silahkan isi jawaban terlebih Dahulu!");
      return false;
    } else if(x==0) {
      alert("Jawaban masih ada yang kosong, isi terlebih dahulu!");
      return false;
    }else if (x == "17") {
        // jawaban = "Incorrect"; document.getElementById("coba1").style.color = "red";
        jawab3 = document.getElementById('lat1');
        jawab3 = `<div class="pembahasan mt-3 mr-3 p-3" style="background-color:green;color:white;">
                            Jawaban Anda benar <br> </div>
                            </div>`;  
        
    } else {
        // jawaban = "Correct"; document.getElementById("coba1").style.color = "green";
        jawab3 = document.getElementById('lat1');
        jawab3 = `<div class="pembahasan mt-3 mr-3 p-3" style="background-color:red;color:white;">
                            Jawaban Anda salah <br> </div>
                            <img src="../img/jawaban latihan perbandingan 7.PNG" alt=""> <br> 
                            <img src="../img/jawaban latihan perbandingan 72.PNG" alt=""> <br> 
                            

                            <br>                     
                            </div>`;  
    }
    document.getElementById("jawab3").innerHTML = jawab3;
  }

//  sudut depresi 1.4

function sudutdepresi(){
    var jrk=document.getElementById('jrk').value;
    var depresi=document.getElementById('depresi').value;
    var hasiljrk=document.getElementById('hasiljrk').value;
    var tggiBimo=document.getElementById('tggiBimo').value;
    var jawaban4;
  
  if (jrk==""){
      alert("Jawaban masih ada yang kosong, isi terlebih dahulu!");
      return false;
    }
  else if(jrk=='16,75'||jrk=='16.75'){
      document.getElementById('jrk').style="border: 3px solid green; font-size:15px; text-align:center;"
  }
  else{
      document.getElementById('jrk').style="border: 3px solid red; font-size:15px; text-align:center;"
  }
  
  if (depresi==""){
    alert("Jawaban masih ada yang kosong, isi terlebih dahulu!");
    return false;
  }
  else if (depresi=='45'){
    document.getElementById('depresi').style="border: 3px solid green; font-size:15px; text-align:center;"
  }
  else{
    document.getElementById('depresi').style="border: 3px solid red; font-size:15px; text-align:center;"
  }

  
  if (tggiBimo==""){
    alert("Jawaban masih ada yang kosong, isi terlebih dahulu!");
    return false;
  }
  else if (tggiBimo=='1,75'){
    document.getElementById('tggiBimo').style="border: 3px solid green; font-size:15px; text-align:center;"
  }
  else{
    document.getElementById('tggiBimo').style="border: 3px solid red; font-size:15px; text-align:center;"
  }
  
  if (hasiljrk==""){
    alert("Jawaban masih ada yang kosong, isi terlebih dahulu!");
    return false;
  }
  else if (hasiljrk == "16,75"||hasiljrk == "16.75") {
    // jawaban = "Incorrect"; document.getElementById("coba1").style.color = "red";
    document.getElementById('hasiljrk').style="border: 3px solid green; font-size:15px; text-align:center;"
    jawaban4 = document.getElementById('hasiljrk');
    jawaban4 = `<div class="pembahasan mt-3 mr-3 p-3" style="background-color:green;color:white;">
                        Jawaban Anda benar <br> </div>
                        </div>`;  
    
} else {
    // jawaban = "Correct"; document.getElementById("coba1").style.color = "green";
    document.getElementById('hasiljrk').style="border: 3px solid red; font-size:15px; text-align:center;"
    jawaban4 = document.getElementById('hasiljrk');
    jawaban4 = `<div class="pembahasan mt-3 mr-3 p-3" style="background-color:red;color:white;">
                        Jawaban Anda salah <br> </div>
                        <h5>Perhatikan jawaban berikut ini</h5>
                        <img src="../img/jawaban latihan perbandingan 8.PNG" > <br>
                        <img src="../img/jawaban latihan perbandingan 9.PNG" > <br>
                        <img src="../img/jawaban latihan perbandingan 10.PNG" > <br>
                        <img src="../img/jawaban latihan perbandingan 11.PNG" > <br>
                        <br> <br<br>                    
                        </div>`;  
}
document.getElementById("jawaban4").innerHTML = jawaban4;
  }
// ================================================================================================================
// ======================================LATIHAN SUDUT DEPRESI DAN SUDUT ELEVASI=========================================================================

function no1(){
    var nomer1=document.getElementById('nomer1').value;
    var jawab4;

  if (nomer1==""){
      alert("Jawaban masih ada yang kosong, isi terlebih dahulu!");
      return false;
    }
  else if (nomer1 == "Depresi"||nomer1 == "depresi") {
        // jawaban = "Incorrect"; document.getElementById("coba1").style.color = "red";
        document.getElementById('nomer1').style="border: 3px solid green; font-size:15px; text-align:center;"
        jawab4 = document.getElementById('nomer1');
        jawab4 = `<div class="pembahasan mt-3 mr-3 p-3" style="background-color:green;color:white;">
                            Jawaban Anda benar <br> </div>
                            </div>`;  
        
    } else {
        // jawaban = "Correct"; document.getElementById("coba1").style.color = "green";
        document.getElementById('nomer1').style="border: 3px solid red; font-size:15px; text-align:center;"
        jawab4 = document.getElementById('nomer1');
        jawab4 = `<div class="pembahasan mt-3 mr-3 p-3" style="background-color:red;color:white;">
                            Jawaban Anda salah <br> </div>
                            
                            <img src="../img/jawaban latihan sudut eldep 1.PNG" > <br>
                            <br> <br<br>                    
                            </div>`;  
    }
    document.getElementById("jawab4").innerHTML = jawab4;
}
function no2(){
    var nomer2=document.getElementById('nomer2').value;
    var jawab5;

  if (nomer2==""){
      alert("Jawaban masih ada yang kosong, isi terlebih dahulu!");
      return false;
    }
  else if (nomer2 == "45") {
        // jawaban = "Incorrect"; document.getElementById("coba1").style.color = "red";
        document.getElementById('nomer2').style="border: 3px solid green; font-size:15px; text-align:center;"
        jawab5 = document.getElementById('nomer2');
        jawab5 = `<div class="pembahasan mt-3 mr-3 p-3" style="background-color:green;color:white;">
                            Jawaban Anda benar <br> </div>
                            </div>`;  
        
    } else {
        // jawaban = "Correct"; document.getElementById("coba1").style.color = "green";
        document.getElementById('nomer2').style="border: 3px solid red; font-size:15px; text-align:center;"
        jawab5 = document.getElementById('nomer2');
        jawab5 = `<div class="pembahasan mt-3 mr-3 p-3" style="background-color:red;color:white;">
                            Jawaban Anda salah <br> </div>
                            <img src="../img/jawaban latihan sudut eldep 2.PNG" > 
                            <br> <br<br>                    
                            </div>`;  
    }
    document.getElementById("jawab5").innerHTML = jawab5;
}

function no3(){
    var nomer3=document.getElementById('nomer3').value;
    var jawab6;

  if (nomer3==""){
      alert("Jawaban masih ada yang kosong, isi terlebih dahulu!");
      return false;
    }
  else if(nomer3 == "15") {
        // jawaban = "Incorrect"; document.getElementById("coba1").style.color = "red";
        document.getElementById('nomer3').style="border: 3px solid green; font-size:15px; text-align:center;"
        jawab6 = document.getElementById('nomer3');
        jawab6 = `<div class="pembahasan mt-3 mr-3 p-3" style="background-color:green;color:white;">
                            Jawaban Anda benar <br> </div>
                            </div>`;  
        
    } else {
        // jawaban = "Correct"; document.getElementById("coba1").style.color = "green";
        document.getElementById('nomer3').style="border: 3px solid red; font-size:15px; text-align:center;"
        jawab6 = document.getElementById('nomer3');
        jawab6 = `<div class="pembahasan mt-3 mr-3 p-3" style="background-color:red;color:white;">
                           Jawaban Anda salah <br> </div>
                            
                            <img src="../img/jawaban latihan sudut eldep 3.PNG" > 
                            <br> <br<br>                    
                            </div>`;  
    }
    document.getElementById("jawab6").innerHTML = jawab6;
}

function no4(){
    var nomer4=document.getElementById('nomer4').value;
    var jawab7;


    if (nomer4==""){
      alert("Jawaban masih ada yang kosong, isi terlebih dahulu!");
      return false;
    }
   else if (nomer4 == "185,2") {
    // jawaban = "Incorrect"; document.getElementById("coba1").style.color = "red";
    document.getElementById('nomer4').style="border: 3px solid green; font-size:15px; text-align:center;"
    jawab7 = document.getElementById('nomer4');
    jawab7 = `<div class="pembahasan mt-3 mr-3 p-3" style="background-color:green;color:white;">
                        Jawaban Anda benar <br> </div>
                        </div>`;  
    
} else {
    // jawaban = "Correct"; document.getElementById("coba1").style.color = "green";
    document.getElementById('nomer4').style="border: 3px solid red; font-size:15px; text-align:center;"
    jawab7 = document.getElementById('nomer4');
    jawab7 = `<div class="pembahasan mt-3 mr-3 p-3" style="background-color:red;color:white;">
                        Jawaban Anda salah <br> </div>
                        <h5>Perhatikan jawaban berikut ini</h5>
                        <img src="../img/jawaban latihan sudut eldep 4gambar.PNG" >  <br>
                        <img src="../img/jawaban latihan sudut eldep 4.PNG" >  <br>
                        <img src="../img/jawaban latihan sudut eldep 4.2.PNG" >  <br>

                        <br> <br<br>                    
                        </div>`;  
}
document.getElementById("jawab7").innerHTML = jawab7;
  }
function no5(){
    var nomer5=document.getElementById('nomer5').value;
    var jawab8;


    if (nomer5==""){
      alert("Jawaban masih ada yang kosong, isi terlebih dahulu!");
      return false;
    }
    else if(nomer5 == "50") {
    // jawaban = "Incorrect"; document.getElementById("coba1").style.color = "red";
    document.getElementById('nomer5').style="border: 3px solid green; font-size:15px; text-align:center;"
    jawab8 = document.getElementById('nomer5');
    jawab8 = `<div class="pembahasan mt-3 mr-3 p-3" style="background-color:green;color:white;">
                        Jawaban Anda benar <br> </div>
                        </div>`;  
    
} else {
    // jawaban = "Correct"; document.getElementById("coba1").style.color = "green";
    document.getElementById('nomer5').style="border: 3px solid red; font-size:15px; text-align:center;"
    jawab8 = document.getElementById('nomer5');
    jawab8 = `<div class="pembahasan mt-3 mr-3 p-3" style="background-color:red;color:white;">
                        Jawaban Anda salah <br> </div>
                        
                        <img src="../img/jawaban latihan sudut eldep 5.PNG" > 
                        <br> <br<br>                    
                        </div>`;  
}
document.getElementById("jawab8").innerHTML = jawab8;
  }

function no6(){
    var nomer6=document.getElementById('nomer6').value;
    var jawab9;


    if (nomer6==""){
      alert("Jawaban masih ada yang kosong, isi terlebih dahulu!");
      return false;
    }
   else if (nomer6 == "235,5") {
    // jawaban = "Incorrect"; document.getElementById("coba1").style.color = "red";
    document.getElementById('nomer6').style="border: 3px solid green; font-size:15px; text-align:center;"
    jawab9 = document.getElementById('nomer6');
    jawab9 = `<div class="pembahasan mt-3 mr-3 p-3" style="background-color:green;color:white;">
                        Jawaban Anda benar <br> </div>
                        </div>`;  
    
} else {
    // jawaban = "Correct"; document.getElementById("coba1").style.color = "green";
    document.getElementById('nomer6').style="border: 3px solid red; font-size:15px; text-align:center;"
    jawab9 = document.getElementById('nomer6');
    jawab9 = `<div class="pembahasan mt-3 mr-3 p-3" style="background-color:red;color:white;">
                        Jawaban Anda salah <br> </div>
                        <h5>Perhatikan jawaban berikut ini</h5>
                        <img src="../img/jawaban latihan sudut eldep 6gambar.PNG" >  <br>
                        <img src="../img/jawaban latihan sudut eldep 6.PNG" >  <br>
                        <br> <br<br>                    
                        </div>`;  
}
document.getElementById("jawab9").innerHTML = jawab9;
  }


  function perbandingan1(){
    var nsam1=document.getElementById('nsam1').value;
    var omir1=document.getElementById('omir1').value;

    if (nsam1=='OA'||nsam1=='AO'){
        document.getElementById('nsam1').style="border: 3px solid green; font-size:15px; text-align:center;"
      }
    else{
        document.getElementById('nsam1').style="border: 3px solid red; font-size:15px; text-align:center;"
    }
    
    if (omir1=='BO'||omir1=='OB'){
      document.getElementById('omir1').style="border: 3px solid green; font-size:15px; text-align:center;"
    }
    else{
      document.getElementById('omir1').style="border: 3px solid red; font-size:15px; text-align:center;"
    }
  }


  function perbandingan2(){
    var mdep2=document.getElementById('mdep2').value;
    var nsam2=document.getElementById('nsam2').value;

  
  if (mdep2=='BA'||mdep2=='AB'){
    document.getElementById('mdep2').style="border: 3px solid green; font-size:15px; text-align:center;"
  }
  else{
    document.getElementById('mdep2').style="border: 3px solid red; font-size:15px; text-align:center;"
  }
  if (nsam2=='AO'||nsam2=='OA'){
    document.getElementById('nsam2').style="border: 3px solid green; font-size:15px; text-align:center;"
  }
  else{
    document.getElementById('nsam2').style="border: 3px solid red; font-size:15px; text-align:center;"
  }

}  
  
//   function Functionfour() {
//     var x = document.getElementById("pcoba1").value;
//     var jawaban3;
    
   
//     if (x == "3") {
//         // jawaban = "Incorrect"; document.getElementById("coba1").style.color = "red";
//         jawaban3 = document.getElementById('pcoba1');
//         jawaban3 = `<div class="pembahasan mt-3 mr-3 p-3" style="background-color:green;color:white;">
//                             Jawaban Anda benar <br> </div>
//                             </div>`;  
        
//     } else {
//         // jawaban = "Correct"; document.getElementById("coba1").style.color = "green";
//         jawaban3 = document.getElementById('pcoba1');
//         jawaban3 = `<div class="pembahasan mt-3 mr-3 p-3" style="background-color:red;color:white;">
//                             Jawaban Anda salah <br> </div>
//                             <h5>Perhatikan jawaban berikut ini</h5>
//                             <img src="../img/jawaban latihan perbandingan 3.PNG" alt="" style="float:right; margin:1px">
//                             <br> <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>                    
//                             </div>`;  
//     }
//     document.getElementById("jawaban3").innerHTML = jawaban3;
//   }

// mencoba 2







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
        }kkm
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

                if(hasilakhir>=kkm1){
                    let next = document.getElementById("next");
                    next.className = next.className.replace("hilang","");
                } else {
                    let ulang = document.getElementById("ulang");
                    ulang.className = ulang.className.replace("hilang","");
                }

                wktu.classList.toggle('hilang');

                
                //nilai disimpan ke local storage
            localStorage.setItem("nkuis1",hasilakhir);
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

                if(hasilakhir>=kkm1){
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
            localStorage.setItem("nkuis1",hasilakhir);
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
dat.open('GET', '1.kuis1.json', true);
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

    let database = firebase.database().ref("kuis1/" + counter);
    database.set(task);

}
