/*Our football team has finished the championship.

Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.

For example: ["3:1", "2:2", "0:1", ...]

Points are awarded for each match as follows:

if x > y: 3 points (win)
if x < y: 0 points (loss)
if x = y: 1 point (tie)
We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.

Notes:

our team always plays 10 matches in the championship
0 <= x <= 4
0 <= y <= 48 */


const games = ["1:1","2:2","3:3","4:4","2:2","3:3","4:4","3:3","4:4","4:4"];
function points(games) {
  const gamesInt = games.map((game) => {
    return game.split(":").map((score) => parseInt(score));
  });

  let sum = 0;
  for (let i = 0; i < gamesInt.length; i++) {
    if(gamesInt[i][0] > gamesInt[i][1]){
     sum = sum + 3 //?
    }else if (gamesInt[i][0] == gamesInt[i][1]){
      sum = sum + 1 //?
    }else{
       sum = sum + 0 //?
    }
  }
  return sum //?
}
points(games);
