let array = prompt("Mời nhập vào mảng").split(",").map(Number);
let so = [];
for (let i = 0; i < array.length; i++) {
    if (!isNaN(array[i])) {
    so.push(array[i]);
    }
}
if (so.length > 0) {
    alert(so);
} else {
    alert("Không có ký tự số trong mảng.");
}
