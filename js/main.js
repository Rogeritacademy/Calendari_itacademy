var el = document.querySelector('#calc');
var agost = [];
var resultat = document.querySelector('.resultat');
var festius = ['2018-05-01', '2018-05-21', '2018-07-30', '2018-07-31', '2018-09-11', '2018-09-24', '2018-10-12', '2018-11-01', '2018-12-06', '2018-12-25', '2018-12-26', '2019-01-06'];

(function ompleAgost() {
  for (var inici = 20180801; inici <= 20180831; inici++) {
    var data = inici.toString();
    var dataguions_primer = data.slice(0, 4) + "-" + data.slice(4);
    var dataguions_segon = dataguions_primer.slice(0, 7) + "-" + dataguions_primer.slice(7);
    festius.push(dataguions_segon);
  }
})();

if (el) {
  el.addEventListener("click", function() {
    var dia_inici = document.querySelector('#dia_inici').value;
    var comprova = moment(dia_inici, 'DD/MM/YYYY', true).isValid();
    if(comprova == true) {
      var dia_final = moment(dia_inici, 'DD/MM/YYYY').addWorkdays(87, festius).locale('ca').format('LL');
      resultat.innerHTML = 'Acabes el curs el dia ' + dia_final;
    } else {
      resultat.innerHTML = 'Format de data incorrecte';
    }
  });
}
