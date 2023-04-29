const rate1 = document.querySelector("#rate");
const nameText = document.querySelector("#nameText");

rate1.onclick = magic;


function magic(){
    console.log("hello World");
    nameText.innerText = "hello";
}