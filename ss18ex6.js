let year = prompt("Nhap mot nam bat ky"); 
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    document.write(year + " là năm nhuận");
} else {
    document.write(year + " không phải năm nhuận");
}
