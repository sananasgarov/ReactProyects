function SwapCase(str) {
    let swapped = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i].toUpperCase()) {
            swapped += str[i].toLowerCase();
        } else {
            swapped += str[i].toUpperCase();
        }
    }
    return swapped;
}
let swapped = SwapCase("asdssaSSDSAasd");
console.log(swapped);

