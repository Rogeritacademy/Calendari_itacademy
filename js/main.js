var el = document.querySelector('#calc');
var agost = [];
var resultat = document.querySelector('.resultat');
var festius = ['2018-05-01', '2018-05-21', '2018-07-30', '2018-07-31', '2018-09-11', '2018-09-24', '2018-10-12', '2018-11-01'];

function ompleAgost() {
  for (var inici=20180801;inici<=20180831;inici++) {
    var txt = inici.toString();
    var dataguions01 = txt.slice(0, 4) + "-" + txt.slice(4);
    var dataguions02 = dataguions01.slice(0, 7) + "-" + dataguions01.slice(7);
    festius.push(dataguions02);
  }
}

if(el){
  el.addEventListener("click", function(){
    var dia_inici = document.querySelector('#dia_inici').value;
    var dia_final = moment(dia_inici,'DD/MM/YYYY').addWorkdays(87, festius).locale('ca').format('LL');
    resultat.innerHTML = 'Acabes el curs el dia: ' + dia_final;
  });
}

ompleAgost();
