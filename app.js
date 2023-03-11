let myAns1 = document.getElementById("ans1");
let myAns2 = document.getElementById("ans2");
let plus1 = document.getElementById("plus1");
let plus2 = document.getElementById("plus2");

plus1.onclick = function () {
    myAns1.classList.toggle("show")
    plus1.classList.toggle("move")
};
plus2.onclick = function () {
    myAns2.classList.toggle("show")
    plus2.classList.toggle("move")
};

    

