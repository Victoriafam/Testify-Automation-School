//Create a length converter function


function lengthConverter(lenCon,to){
    let result=0;
        const unit = {
            'cm': 500,
            'km': 0.001,
            'mm': 1000,
        }
        for(let key in unit){
            result = lenCon * unit[to];
        }
        return result;
    }
    console.log(lengthConverter(27, 'cm'));