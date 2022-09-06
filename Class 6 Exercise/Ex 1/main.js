const s= (side1 + side2 + side3) / 2; 
const area = Math.sqrt(s *((s-side1) * (s-side2) * (s-side3)));
function Area() {
    let side1 = parseInt(document.getElementById("side1").value);
    let side2 = parseInt(document.getElementById("side2").value);
    let side3 = parseInt(document.getElementById("side3").value);
    console.log(typeof(side1));
    const s= (side1 + side2 + side3) / 2; 
    const area = Math.sqrt(s *((s-side1) * (s-side2) * (s-side3)));
    document.getElementById("display").innerHTML = area.toFixed(2);
}

// const side1 = parseInt(document.getElementById("side1").value);
// let side2 = parseInt(document.getElementById("side2").value);

// function calculateArea (base, height) {
//     const area=base * height / 2;
//     console.log(area)
// }


// calculateArea(side1, side2);
