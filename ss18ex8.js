let a = +prompt("Nhap chieu dai canh thu nhat");
let b = +prompt("Nhap chieu dai canh thu hai");
let c = +prompt("Nhap chieu dai canh thu ba");
if(a + b > c && a + c >b && b + c > a){
    if(a === b && b === c){
        document.write("Đó là một tam giác đều");
    }else if(a*a + b*b === c*c || a * a + c * c === b * b || b * b + c * c === a * a){
        document.write("Đó là một tam giác vuông");
    }else if( a === b || a === c || b === c) {
        document.write("Đó là một tam giác cân");
    }else{
        document.write("Đó là một tam giác thường");
    }
}else{
    document.write("Đó không là một tam giác");
}