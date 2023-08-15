// Code your solutions in this file

const names = (["Guadalupe", "Ollie", "Aki"])
function writeCards(names) {
    let array = [];
    for( let i=0; i<names.length; i += 1) {
        array.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
}
return array;
}
function countDown() {
    let n = 10;
    while (n>=0) {
        console.log(n --);
    }
}