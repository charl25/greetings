const greetButton = document.querySelector(".greetBtn");
const greetTxt = document.querySelector(".greetText");
const name = document.querySelector(".greetArea");

greetButton.addEventListener('click', function(){

    var person = name.value.trim();
    greetTxt.innerHTML = person;
})