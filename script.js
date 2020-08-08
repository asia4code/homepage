
console.log("Cześć :)");




let changeTextButton = document.querySelector(".changeText");
let body = document.querySelector(".body");
let nextText = document.querySelector(".nextText")

changeTextButton.addEventListener("click", () => {
    body.classList.toggle("body--bigText");
    nextText.innerText = body.classList.contains("body--bigText") ? "mniejszą" : "większą";
});


let jsDutyButton = document.querySelector (".jsDuty");
let showNumber = document.querySelector(".showNumber")

jsDutyButton.addEventListener("click", () => {
    showNumber.innerText="tel:123-456-780";
});