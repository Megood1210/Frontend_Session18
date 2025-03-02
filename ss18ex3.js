let loginName = prompt("Nhap ten dang nhap");
if(loginName === "ADMIN"){
    let password = prompt("Nhap mat khau");
    if(password === "TheMaster"){
        document.write("Welcome");
    }else if(password == "null"){
        document.write("Cancelled");
    }else{
        document.write("Wrong password");
    }
}else if( loginName == "null"){
    document.write("Cancelled");
}else{
    document.write("I Don't know you");
}