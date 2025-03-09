let number = prompt("moi nhap vao day so").split(",").map(Number);
let a = number[0];
for (let i = 0; i < number.length; i++){
    if (a < number[i]) {
        a = number[i];
        alert("so lon nhat" + a);
        alert("vi tri"+i)
    }
}