const fs = require('fs');
const readline = require('readline');

function readLineByLine() {
  let total = 0;
  let index = 0;
  const rl = readline.createInterface({
    input: fs.createReadStream('triangle.txt'),
    crlfDelay: Infinity
  });

  rl.on('line', (line) => {
    const lineAsArray = line?.split(" ").filter(text => !!text).map(text => Number(text));
    if(lineAsArray[index] < lineAsArray[index +1]) {
      total += lineAsArray[index + 1];
      index += 1;
    } else {
      total += lineAsArray[index];
    }
  });

  rl.on('close', () => {
    console.log(total);
  })
}

readLineByLine();