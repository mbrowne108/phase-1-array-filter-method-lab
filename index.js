function findMatching(array, name) {
    let newArray = []
    array.filter(function(driver){
      if (driver.toLowerCase() === name.toLowerCase()){newArray.push(driver)}
    })
    return newArray;
}

function fuzzyMatch(array, letters) {
    let newArray = []
    array.filter(function(driver){
      if (driver.substring(0,2) === letters){newArray.push(driver)}
    })
    return newArray;
}

function matchName(array, name) {
    let newArray = []
    array.filter(function(driver){
      if (driver.name === name){newArray.push(driver)}
    })
    return newArray;
}