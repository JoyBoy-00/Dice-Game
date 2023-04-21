// to take names and return them
function begin1() {
    var person1 = prompt("Enter the name of 1st person");
    document.querySelectorAll(".row h2")[0].textContent = person1;
    return person1;
}
function begin2(){
    var person2 = prompt("Enter the name of 2nd person");
    document.querySelectorAll(".row h2")[1].textContent = person2;
    return person2;
}


// to check for click and keyboard press 
var person1 = "Person-1";
var person2 = "Person-2";
document.querySelector("button").addEventListener("click", function () {
    if (this.innerHTML == "Play") {
        doIt("Enter");
    }
    else if (this.innerHTML == "Start") {
        person1 = begin1();
        person2 = begin2();
        document.querySelector("button").textContent = "Play";
    }
});
document.addEventListener("keydown", function (ev) {
    doIt(ev.key);
})


// fuction to execute dice rolls 
function doIt(option) {

    if (option == "Enter") {

        var random = Math.random();
        var choice = Math.floor(random * 6) + 1;
        if (choice == 1) {
            document.querySelector("i.dice-1").setAttribute("class", "dice-1 fa-solid fa-dice-one fa-10x");
        }
        else if (choice == 2) {
            document.querySelector("i.dice-1").setAttribute("class", "dice-1 fa-solid fa-dice-two fa-10x");
        }
        else if (choice == 3) {
            document.querySelector("i.dice-1").setAttribute("class", "dice-1 fa-solid fa-dice-three fa-10x");
        }
        else if (choice == 4) {
            document.querySelector("i.dice-1").setAttribute("class", "dice-1 fa-solid fa-dice-four fa-10x");
        }
        else if (choice == 5) {
            document.querySelector("i.dice-1").setAttribute("class", "dice-1 fa-solid fa-dice-five fa-10x");
        }
        else {
            document.querySelector("i.dice-1").setAttribute("class", "dice-1 fa-solid fa-dice-six fa-10x");
        }

        var random2 = Math.random();
        var choice2 = Math.floor(random2 * 6) + 1;
        if (choice2 == 1) {
            document.querySelector("i.dice-2").setAttribute("class", "dice-2 fa-solid fa-dice-one fa-10x");
        }
        else if (choice2 == 2) {
            document.querySelector("i.dice-2").setAttribute("class", "dice-2 fa-solid fa-dice-two fa-10x");
        }
        else if (choice2 == 3) {
            document.querySelector("i.dice-2").setAttribute("class", "dice-2 fa-solid fa-dice-three fa-10x");
        }
        else if (choice2 == 4) {
            document.querySelector("i.dice-2").setAttribute("class", "dice-2 fa-solid fa-dice-four fa-10x");
        }
        else if (choice2 == 5) {
            document.querySelector("i.dice-2").setAttribute("class", "dice-2 fa-solid fa-dice-five fa-10x");
        }
        else {
            document.querySelector("i.dice-2").setAttribute("class", "dice-2 fa-solid fa-dice-six fa-10x");
            // document.getElementsByClassName("dice-2").setAttribute("class", "dice-2 fa-solid fa-dice-six fa-10x");
        }

        if (choice > choice2) {

            document.querySelectorAll("h1")[0].innerHTML = "🚩 " + person1 + " Wins";
        }
        else if (choice < choice2) {
            document.querySelectorAll("h1")[0].innerHTML = person2 + " Wins 🚩";
        }
        else {
            document.querySelectorAll("h1")[0].innerHTML = "Draw";
        }
    }
    else
        alert("Wrong Key Pressed");
}