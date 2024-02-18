const games = [
  "1:1",
  "2:2",
  "3:3",
  "4:4",
  "2:2",
  "3:3",
  "4:4",
  "3:3",
  "4:4",
  "4:4",
];


const points = () => {
  return games
    .map((value) => value.split(":").map(Number))
    .map(([x, y]) => (x > y ? 3 : x < y ? 0 : 1))
    .reduce((result, current) => result+current); //?
};

console.log(points());
