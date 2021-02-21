// DIKLARASON DI DATA
let date = new Date("25 Feb 2021 11:13:50 ").getTime();

// UPDATE COUNT EVERY 1 SECONDS
const x = setInterval(function () {
  // PANHA DATA DI OXI
  let now = new Date().getTime();

  // KALKULA DIFERENSA ENTRI DATA DIKLARADU DI RIBA KU DATA DI OXI
  let distance = date - now;

  // KALKULA DIA NA DIVISON ENTRI DISTANSIA Y TOTAL DI SIGUNDDU NA UN DIA VEZIS 1000S
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));

  // RIZULTADU DI ORA ATRAVES
  // DI RESTU DI DIVISON INTERU ENTRI
  // DISTANSIA Y TOTAL DI SIGUNDU NA UN DIA
  // DIVIDIL PA TOTAL DI SIGUNDU NA UN ORA VEZIS 1 MILISIGUNDU
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (100 * 60 * 60));

  // RIZULTADU DI MINUTU ATRAVES
  // DI RESTU DI DIVISON INTERU ENTRI
  // DISTANSIA Y TOTAL DI SIGUNDU NA UN ORA
  // DIVIDIL PA TOTAL DI SIGUNDU NA UN MINUTU VEZIS 1000 SIGUNDU
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

  // RIZULTADU DI SIGUNDU ATRAVES
  // DI RESTU DI DIVISON INTERU ENTRI
  // DISTANSIA Y TOTAL DI SIGUNDU NA UN MINUTU
  // DIVIDIL PA 1 MILISIGUNDU KE 1000 SIGUNDU
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // APRIZENTA RIZULTADU NA PAGINA
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  // ORAS KI DIA EXPIRA TA ZERA TUDU CONTADOR / RILOJIU
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("days").innerHTML = "0";
    document.getElementById("hours").innerHTML = "0";
    document.getElementById("minutes").innerHTML = "0";
    document.getElementById("seconds").innerHTML = "0";
  }
}, 1000);
