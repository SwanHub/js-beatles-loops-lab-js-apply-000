
function theBeatlesPlay(musicians, instruments) {
  var theBand = [];
  for (var i = 0; i < musicians.length; i++) {
    theBand.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return theBand;
}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(array) {
  var i = 0;
  
  while (i < array.length) { 
    array[i] = `${array[i]}!!!`;
    i++;}
    
    return array;
  
}

