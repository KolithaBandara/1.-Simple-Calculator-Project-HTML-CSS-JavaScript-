let clear;

let present;
let increment;
let decrement;
let divide;
let multi;

let nine;
let eight;
let seven;
let six;
let five;
let four;
let three;
let two;
let one;
let zero;
let zero_00

let equal;
let dot;


// Row 01
function btn_c(){
    clear = document.getElementById("btn-c").value;
    document.getElementById("cal-display").innerHTML = " ";
}
function btn_present(){
    present = document.getElementById("btn-present").value;
    document.getElementById("cal-display").innerHTML = present;
}
function btn_increment(){
    increment = document.getElementById("btn-increment").value;
    document.getElementById("cal-display").innerHTML = increment;
}


// Row 02
function btn_7(){
    seven = document.getElementById("btn-7").value;
    document.getElementById("cal-display").innerHTML = seven;
}
function btn_8(){
    eight = document.getElementById("btn-8").value;
    document.getElementById("cal-display").innerHTML = eight;
}
function btn_9(){
    nine = document.getElementById("btn-9").value;
    document.getElementById("cal-display").innerHTML = nine;
}
function btn_decrement(){
    decrement = document.getElementById("btn-decrement").value;
    document.getElementById("cal-display").innerHTML = decrement;
}


// Row 03
function btn_6(){
    six = document.getElementById("btn-6").value;
    document.getElementById("cal-display").innerHTML = six;
}
function btn_5(){
    five = document.getElementById("btn-5").value;
    document.getElementById("cal-display").innerHTML = five;
}
function btn_4(){
    four = document.getElementById("btn-4").value;
    document.getElementById("cal-display").innerHTML = four;
}
function btn_multi(){
    multi = document.getElementById("btn-multi").value;
    document.getElementById("cal-display").innerHTML = multi;
}


// Row 04
function btn_3(){
    three = document.getElementById("btn-3").value;
    document.getElementById("cal-display").innerHTML = three;
}
function btn_2(){
    two = document.getElementById("btn-2").value;
    document.getElementById("cal-display").innerHTML = two;
}
function btn_1(){
    one = document.getElementById("btn-1").value;
    document.getElementById("cal-display").innerHTML = one;
}
function btn_divide(){
    divide = document.getElementById("btn-divide").value;
    document.getElementById("cal-display").innerHTML = divide;
}


// Row 05
function btn_dot(){
    dot = document.getElementById("btn-dot").value;
    document.getElementById("cal-display").innerHTML = dot;
}
function btn_0(){
    zero = document.getElementById("btn-0").value;
    document.getElementById("cal-display").innerHTML = zero;
}
function btn_00(){
    zero_00 = document.getElementById("btn-00").value;
    document.getElementById("cal-display").innerHTML = zero_00;
}
function btn_equal(){
    equal = document.getElementById("btn-equal").value;
    document.getElementById("cal-display").innerHTML = equal;
}