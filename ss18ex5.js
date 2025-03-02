let experienceYear = prompt("Nhap so nam kinh nghiem");
let rating;
if (experienceYear < 1) {
    rating = " Nhân viên mới vào nghề";
} else if (experienceYear <= 3) {
    rating = "Nhân viên có kinh nghiệm";
} else if (experienceYear <= 6) {
    rating = "Nhân viên là chuyên viên";
} else {
    rating = "Nhân viên là quản lý";
}
document.write(`Nhân viên có ${experienceYear} năm kinh nghiệm`);
document.write("<br>");
document.write(`${rating}`);



