const sheep = [
    true,
    true,
    true,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    true,
    false,
    true,
    false,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    false,
    true,
    true,
];
let tsheeps = [];
let fsheeps = [];
function countSheeps() {
    sheep.forEach((value, index) => {
        if (value) {
            tsheeps.push("1");
        } else {
            fsheeps.push("0");
        }
    });
}
countSheeps();
console.log(tsheeps.length);
