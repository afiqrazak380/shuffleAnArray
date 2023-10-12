
const card = ['A','1','2','3','4','5','6','7','8','9','J','K','Q']; // input array 

shuffle(card); // invoke shuffle function with card as input

console.log(card); // print the shuffled cards
console.log(card[0]) // print the first card that was shuffled

function shuffle(arr){
  
  let currentIndex = arr.length; // the initial current index is 13

  while(currentIndex != 0){
    let randomIndex = Math.floor(Math.random()*currentIndex); // Math.floor and < Math.random
    currentIndex -= 1;
    
    //  let temp = arr[currentIndex];
    //  arr[currentIndex] = arr[randomIndex];
    //  arr[randomIndex] = temp;

    [arr[currentIndex],arr[randomIndex]]=[arr[randomIndex],arr[currentIndex]]

  }

  return arr
}
