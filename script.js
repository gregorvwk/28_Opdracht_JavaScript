const addTheWordCool = function(array){
    // add your code KAN NIET!
    return array.push("cool");
}
console.log("Add cool:", addTheWordCool(["nice", "awesome", "tof"]));
// resultaat: ["nice", "awesome", "tof", "cool"]


const amountOfElementsInArray = function(array){
    return array.push();
}
console.log(amountOfElementsInArray(['appels', 'peren', 'citroenen'])); 

const selectBelgiumFromBenelux = function(array){
    return array[0];
}
console.log(selectBelgiumFromBenelux(["Belgie", "Nederland", "Luxemburg"])); 
  // resultaat: "Belgie"

const lastElementInArray = function(array){
    return array[3];
}
  console.log(lastElementInArray(["Haas", "Cavia", "Kip", "Schildpad"])); 
  // resultaat: "Schildpad"

  const presidents = ["Trump", "Obama", "Bush", "Clinton"] 
  
  const impeachTrumpSlice = function(array) {
    return presidents.slice(1);
  }
  const impeachTrumpSplice = function(array) {
    return presidents.splice(1);
  }
  
  console.log(impeachTrumpSlice(presidents)); // ["Obama", "Bush", "Clinton"]
  console.log(impeachTrumpSplice(presidents)); // ["Obama", "Bush", "Clinton"]

const stringsTogether = function(array){
    return array.join(" ");
}

  console.log(stringsTogether(['Winc', 'Academy', 'is', 'leuk', ';-}'])) 
  //resultaat: "Winc Academy is leuk ;-}"

  const combineArrays = function(array){
      return array.concat([4,5,6]);
  }

  console.log(combineArrays([1,2,3]));
  // resultaat: [1,2,3,4,5,6]
  