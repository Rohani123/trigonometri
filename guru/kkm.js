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

let idnya = [];

const db = firebase.database();
const dbkkm = db.ref('kkm').on('value', handleSuccess, handleError)

let getKKM;
function handleSuccess(items){
    getKKM = items.val();

    let kkm1 = getKKM[0]['kkm'];
    let kkm2 = getKKM[1]['kkm'];
    let kkm3 = getKKM[2]['kkm'];

    var kkm1html = document.querySelector('.kkm1');
    kkm1html.innerHTML = kkm1;

    var editkkm1 = document.querySelector('.editKKM1');
    editkkm1.value = kkm1;

    var kkm2html = document.querySelector('.kkm2');
    kkm2html.innerHTML = kkm2;

    var editkkm2 = document.querySelector('.editKKM2');
    editkkm2.value = kkm2;

    var kkm3html = document.querySelector('.evaluasi');
    kkm3html.innerHTML = kkm3;

    var editevaluasi = document.querySelector('.editEvaluasi');
    editevaluasi.value = kkm3;
}

function handleError(err){
    console.log(err);
}

function setKKM1(){
    const kkminput = document.getElementById('kkm1').value;

    var task = {
        id: 0,
        kkm: kkminput
    }
    
    let database = firebase.database().ref("kkm/" + 0);
    database.set(task);
}

function setKKM2(){
    const kkminput = document.getElementById('kkm2').value;

    var task = {
        id: 1,
        kkm: kkminput
    }
    
    let database = firebase.database().ref("kkm/" + 1);
    database.set(task);
}

function setKKM3(){
    const kkminput = document.getElementById('evaluasi').value;

    var task = {
        id: 2,
        kkm: kkminput
    }
    
    let database = firebase.database().ref("kkm/" + 2);
    database.set(task);
}