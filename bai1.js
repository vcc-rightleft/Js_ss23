let numbers = prompt("Mời nhập vào các số, cách nhau bởi dấu phẩy").split(",").map(Number);
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] >= 10) {
        console.log(numbers[i]);
    }
}
