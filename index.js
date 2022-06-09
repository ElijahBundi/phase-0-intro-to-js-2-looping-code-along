// Code your solutions in this file
/*
for(let age =30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`)
}
*/
/*
const gifts = ["teddy bear", "drone", "doll"]

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`)
    }
    return gifts
}
console.log(wrapGifts(gifts))
*/

const thankYouMessage = []

function writeCards(stringArray, eventName) {
    for (let i = 0; i < stringArray.length; i++) {
        thankYouMessage.push(`Thank you, ${stringArray[i]}, for the wonderful ${eventName} gift!`)
    }
    return thankYouMessage
}

function countDown(number) {
    let positiveInteger = number
    while (positiveInteger >= 0) {
        console.log(positiveInteger--);
    }
}




















