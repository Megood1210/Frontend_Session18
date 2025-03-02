let mathGrade = +prompt("Nhap diêm Toan");
let literatureGrade = +prompt("Nhap diêm Van");
let englishGrade = +prompt("Nhap diem Anh");
let avg =(mathGrade + literatureGrade + englishGrade) /3;
if(avg >= 8.0){
    document.write(`Học lực: Giỏi`);
}else if(avg < 8 && avg >= 6.5 ){
    document.write(`Học lực: Khá`);
}else if(avg < 6.5 && avg >= 5 ){
    document.write(`Học lực: Trung bình`);
}else{
    document.write(`Học lực: Yếu`);
}