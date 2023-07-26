//Create  a  function  that  filters  out  negative numbers


function negativeNumbers(array){
    return array.filter((num) => num > -1)
  }

  console.log(negativeNumbers([30, 55, -30, 4, 26, -8, -2]));