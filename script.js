{

    function welcome() {
        console.log("Cześć :)");
    }

   

    const toogleTextSize = () => {
        const body = document.querySelector(".body");
        const nextText = document.querySelector(".nextText");

        body.classList.toggle("body--bigText");
        nextText.innerText = body.classList.contains("body--bigText") ? "mniejszą" : "większą";
    };

    const init = () => {
        const changeTextButton = document.querySelector(".changeText");
        changeTextButton.addEventListener("click", toogleTextSize);
    };

const showTelnumber= () =>{
     const showNumber = document.querySelector(".showNumber")

    showNumber.innerText = "tel:123-456-780";
    };
    const init2 = () => {
        const jsDutyButton = document.querySelector(".jsDuty");
    jsDutyButton.addEventListener("click", showTelnumber);
    }
    welcome();
    init ();
    init2();
}