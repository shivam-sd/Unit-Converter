// var feet = document.getElementById("feet");
// var inch = document.getElementById("inch");

// feet.addEventListener("input", function() {
//     console.log("change ho gya");
//     let f = this.value;
//     let i = f*12;
//     inch.value = i;
// });

// inch.addEventListener("input", function() {
//     var i  = this.value;
//     var f  = i/12;
//     if(!Number.isInteger(f)){
//         f = f.toFixed(3);
//     }
//     feet.value = f;
// });

let feet = document.getElementById("feet");
let inch = document.getElementById("inch");

feet.addEventListener("input" , function() {
    let f = this.value;
    let i = f*12;
    inch.value = i;
});

inch.addEventListener("input" , function()  {
    let i = this.value;
    let f = i/12;
    if(!Number.isInteger(f)){
     f = f.toFixed(3);
    }
    feet.value = f;
});