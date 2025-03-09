let number = Number(prompt("moi nhap vao so luong phan tu"));
let am = 0;
if (Number.isInteger(number)&&number > 0) {
    let number1 = prompt("moi nhap phan tu cua mang").split(",").map(Number);
        for (let i = 0; i < number1.length; i++){
            if (number1=[]) {
                alert("magn khong co phan ut");
            } else {
                    for (let i = 0; i < number1.length; i++) {
                        if (number1[i] < 0) {
                        am++;
                    }
                } alert(am);
            } alert("loi");
        }
}else{alert("loi du lieu")}
