//Print a table containing multiplication tables

let result = 'x ';
for (let i = 0; i < 12; i++) {

    for (let j = 0; j < 12; j++) {

        if(i == 0 && j > 0){
          result += '[' + j + ']';
        }
        else if(j == 0 && i>0){
          result += '[' + i + '] ';
        }
        else if(i>0 && j>0){
        result += (i*j) + ' ';
        }
    }
    result += '\n'
}

console.log(result);