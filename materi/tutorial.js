const firebaseConfig = {
  apiKey: "AIzaSyDwAH__oTGUNC1jt3cRVuYpXjeytmNUE88",
  authDomain: "trigonometri-kelas10-skripsi.firebaseapp.com",
  databaseURL: "https://trigonometri-kelas10-skripsi-default-rtdb.firebaseio.com",
  projectId: "trigonometri-kelas10-skripsi",
  storageBucket: "trigonometri-kelas10-skripsi.appspot.com",
  messagingSenderId: "907994505560",
  appId: "1:907994505560:web:32a07bc64f19e45aa4c52d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database();
const dbkkm = db.ref('kkm/').on('value', kkmSuccess, handleError);
let loop1;
// ini kkm nya bisa di ubah ubah
// misalkan kada mau make kkm bisa aja di 0 kan
let kkm1 = 60; 
let kkm2 = 0;
let kkm3 = 60;
let kkm4 = 90;

function kkmSuccess(items1) {
  kkm1 = items1.val()[0]['kkm'];
  kkm2 = items1.val()[1]['kkm'];
  kkm3 = items1.val()[2]['kkm'];
  kkm4 = items1.val()[3]['kkm'];
  
}
function handleError(error) {
  console.log(error);
}

console.log(localStorage);


function kuis1(){
    var hasilakhir = localStorage.getItem("nkuis1");
   
    if (parseInt(hasilakhir)>=parseInt(kkm1)){
      window.location.href='1.kuis1.html';
    } else{
      $('#exampleModal').modal('show')
    }
}
function kuis2(){
    var hasilakhir = localStorage.getItem("nkuis2");
    // var hasilakhir = 75;
    if (parseInt(hasilakhir)>=parseInt(kkm2)){
      window.location.href='2.kuis2.html';
    } else{
      $('#exampleModal').modal('show')
    }
}
function kuis3(){
    var hasilakhir = localStorage.getItem("nkuis3");
   
    if (parseInt(hasilakhir)>=parseInt(kkm3)){
      window.location.href='3.kuis3.html';
    } else{
      $('#exampleModal').modal('show')
    }
}



function evaluasi(){
  var hasilakhir = localStorage.getItem("kkm4");
  if (parseInt(hasilakhir)>=parseInt(kkm4)){
    window.location.href='evaluasi.html';
  } else{
    $('#exampleModal').modal('show')
  }
}

