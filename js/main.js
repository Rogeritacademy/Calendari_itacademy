var el = document.querySelector('#calc');
var resultat = document.querySelector('.resultat');
var festius2018 = ['2018-05-21', '2018-06-01', '2018-07-30', '2018-07-31', '2018-09-10', '2018-09-11', '2018-09-24', '2018-10-12', '2018-11-01', '2018-11-02', '2018-12-06', '2018-12-07', '2018-12-24', '2018-12-25', '2018-12-26', '2019-12-27', '2019-12-28', '2019-12-31'];
var festius2019 = ['2019-01-06', '2019-01-02', '2019-01-03', '2019-01-04', '2019-01-05', '2019-04-18', '2019-04-19', '2019-04-22', '2019-05-01', '2019-05-02', '2019-05-03', '2019-09-09', '2019-09-10', '2019-09-11', '2019-11-01', '2019-12-05', '2019-12-06', '2019-12-23', '2019-12-24', '2019-12-25', '2019-12-26', '2019-12-27', '2019-12-30', '2019-12-31'];
var festius2020 = ['2020-01-01', '2020-01-02', '2020-01-03', '2020-01-06', '2020-03-30', '2020-03-31'];
var festius_totals = festius2018.concat(festius2019, festius2020);

(function ompleAgosts() {
  for (var inici2018 = 20180801; inici2018 <= 20180831; inici2018++) {
    var data2018 = inici2018.toString();
    var dataguions_primer2018 = data2018.slice(0, 4) + "-" + data2018.slice(4);
    var dataguions_segon2018 = dataguions_primer2018.slice(0, 7) + "-" + dataguions_primer2018.slice(7);
    festius_totals.push(dataguions_segon2018);
  }
  for (var inici2019 = 20190801; inici2019 <= 20190831; inici2019++) {
    var data2019 = inici2019.toString();
    var dataguions_primer2019 = data2019.slice(0, 4) + "-" + data2019.slice(4);
    var dataguions_segon2019 = dataguions_primer2019.slice(0, 7) + "-" + dataguions_primer2019.slice(7);
    festius_totals.push(dataguions_segon2019);
  }
})();

if (el) {
  el.addEventListener("click", function() {
    var dia_inici = document.querySelector('#dia_inici').value;
    var comprova = moment(dia_inici, 'DD/MM/YYYY', true).isValid();
    if (comprova == true) {
      var dia_final = moment(dia_inici, 'DD/MM/YYYY').addWorkdays(87, festius_totals).locale('ca').format('LL');
      var dia_final_format = moment(dia_inici, 'DD/MM/YYYY').addWorkdays(87, festius_totals);

      var current = moment().startOf('day');
      var given = moment(dia_final_format, 'DD/MM/YYYY');
      var diff = moment().weekdayCalc(current, given, [1, 2, 3, 4, 5], festius_totals);
      var message = '';
      console.log('diff:', diff);
      console.log('cursats:', 88 - diff);
/*
      if (current > given) {
        message = 'Que hi fas aquí? Ets un repetidor? ;-)';
      } else if (diff > 44) {
        message = 'Tranqui, encara no has passat de la meitat de dies';
      } else if (diff < 44) {
        message = 'Ja han passat més de la meitat dels dies';
      } else if (diff < 30) {
        message = 'Ja queda poquet';
      } else if (diff < 20) {
        message = 'Recta Final!';
      } else if (diff < 10) {
        message = 'Al loro, que ja queda poc!';
      }
*/
//      resultat.innerHTML = 'Acabes el curs el dia ' + dia_final + '<br><br>Et queden ' + diff + ' dies lectius.<br><br>' + message;

      resultat.innerHTML = 'Acabes el curs el dia ' + dia_final;

    } else {
      resultat.innerHTML = 'Format de data incorrecte';
    }
  });
}
