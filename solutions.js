function setAlarm(employed, vacationing) {

    return employed && !vacationing;
}

setAlarm(true, true) 

setAlarm(false, false) 

setAlarm(false, true)

setAlarm(true, false)

console.log(setAlarm(true, true));   

console.log(setAlarm(false, false)); 

console.log(setAlarm(false, true)); 

console.log(setAlarm(true, false));

function oddNumberCount(number) {
    if (number <= 0) {
       
        console.log("Please provide a positive number.");

        return 0;
    }

    let count = 0;

    for (let i = 1; i < number; i += 2) {
        
        count++;
    }

    return count;
}

// Examples
console.log(oddNumberCount(7));   

console.log(oddNumberCount(16));  

function trollsBeGone(sentence) {
    // vowels
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

const result = sentence.split('').filter(char => !vowels.includes(char)).join('');

    return result;
}

// Example
console.log(trollsBeGone("This website is for losers LOL")); 


const bankInfo = {
    savings: 600,

    checking: 800,

    moneyMarket: 200,

    creditCard: -2000
};


function bankAccountSummary(account) {
  
    return Object.values(account).reduce((total, value) => total + value, 0);
}


const bankTotal = bankAccountSummary(bankInfo);

console.log("Bank Total:", bankTotal); 


function inTheRed(total) {

    return total < 0;

}


const isRed = inTheRed(bankTotal);

console.log("Is in the red?", isRed);

