//who
const buttonOne = document.querySelector("#btn_event-Listener");
const textOne = document.querySelector("h1");
//what
function changeColors () {
    document.body.style.backgroundColor = generateRandomColor();
    textOne.style.color = generateRandomColor();
}
function generateRandomColor() {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    return "#" + randomColor
}
//when
buttonOne.addEventListener("click", changeColors);
console.log(buttonOne)