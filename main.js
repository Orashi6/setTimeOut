
setInterval(function () {

    const body = document.querySelector("body");
    const soat = document.querySelector(".hour");
    const minute = document.querySelector(".minute");
    const sek = document.querySelector(".secunds");


    let time = new Date().getHours();
    soat.innerHTML = `${time}`;


    let minut = new Date().getMinutes();
    minute.innerHTML = `${minut}`;



    let soniya = new Date().getSeconds();
    sek.innerHTML = `${soniya}`
 
}, 1000); 
