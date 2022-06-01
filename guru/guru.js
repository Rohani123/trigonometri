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


    window.onload=function(){
        dataKkm();
        dataKuis1();
    }
  //--------------------------Ambil semua data nilai kontrol          
  function dataKuis1(){
    firebase.database().ref('kontrol/').once('value',
    function(AllRecords1){
        AllRecords1.forEach(
            function(CurrentRecord){
                var kuis1=CurrentRecord.val().kuis1;
                var kuis2=CurrentRecord.val().kuis2;
                var kuis3=CurrentRecord.val().kuis3;
                var kuis4=CurrentRecord.val().kuis4;
                var evaluasi=CurrentRecord.val().evaluasi;

                KuisToTable1(kuis1,kuis2,kuis3,kuis4,evaluasi);
            }
        );
    });
}

//---------------------------------mengisi tabel-----------------------------
function KuisToTable1(kuis1,kuis2,kuis3,kuis4,evaluasi){

    if (kuis1==1){
        on1.style.background="green";
    }else{
        off1.style.background="red";
    }

    if (kuis2==1){
        on2.style.background="green";
    }else{
        off2.style.background="red";
    }
    if (kuis3==1){
        on3.style.background="green";
    }else{
        off3.style.background="red";
    }
    if (evaluasi==1){
        on4.style.background="green";
    }else{
        off4.style.background="red";
    }

}


//----------------------------------batas-------------------------------

//==================================menambahkan KKM=====================

//----------------------------------------------------------------------
kkm1= document.getElementById("kkm1");
kkm2= document.getElementById("kkm2");
kkm3= document.getElementById("kkm3");
kkm4= document.getElementById("kkm4");

function km1(){
    firebase.database().ref('KKM/1/').update(
        {kuis1:kkm1.value});
        alert("KKM Kuis 1 berhasil diperbaharui");
        location.reload();
}
function km2(){
    firebase.database().ref('KKM/1/').update(
        {kuis2:kkm2.value});
        alert("KKM Kuis 2 berhasil diperbaharui");
        location.reload();
}
function km3(){
    firebase.database().ref('KKM/1/').update(
        {kuis2:kkm3.value});
        alert("KKM Kuis 3 berhasil diperbaharui");
        location.reload();
}

function km4(){
    firebase.database().ref('KKM/1/').update(
        {evaluasi:kkm4.value});
        alert("KKM Evaluasi berhasil diperbaharui");
        location.reload();
}


//mengambil data KKM di firebase

//--------------------------Ambil semua data KKM          
function dataKkm(){
    firebase.database().ref('KKM/').once('value',
    function(AllRecords1){
        AllRecords1.forEach(
            function(CurrentRecord){
                var kuis1=CurrentRecord.val().kuis1;
                var kuis2=CurrentRecord.val().kuis2;
                var kuis3=CurrentRecord.val().kuis3;
                var evaluasi=CurrentRecord.val().evaluasi;

                datak(kuis1,kuis2,kuis3,evaluasi);
            }
        );

    });
   

}
function datak(kuis1,kuis2,kuis3,evaluasi){
    if(kuis1!=""){
        isi1=document.getElementById("isi1");
        isi1.innerText=kuis1;
    }
    if(kuis2!=""){
        isi2=document.getElementById("isi2");
        isi2.innerText=kuis2;
    }
    if(kuis3!=""){
        isi3=document.getElementById("isi3");
        isi3.innerText=kuis3;
    }
    if(evaluasi!=""){
        isi4=document.getElementById("isi4");
        isi4.innerText=evaluasi;
    }

    
}