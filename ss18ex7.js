let a = +prompt("Mời bạn nhập vào số a");
let b = +prompt("Mời bạn nhập vào số b");
let calculation = prompt("Mời bạn nhập vào các phép tính (+, -, *, /):");
let result;
if (calculation === "+") {
    result = a + b;
} else if (calculation === "-") {
    result = a - b;
} else if (calculation === "*") {
    result = a * b;
} else if (calculation === "/") {
    if (b === 0) {
        result = "Không thể chia cho 0!";
    } else {
        result = a / b;
    }
} else {
    result = "Phép tính không hợp lệ!";
}
alert("Kết quả của phép tính trên: " +  a + "+ " + b + " = " + result);
