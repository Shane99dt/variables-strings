console.log("Hello world")

const sentence = "My name is Dushen"
console.log(sentence)

const firstName = "Dushen"
console.log(`Nice to meet you ${firstName}`)

let food = "Croissant is meh"
food = food.replace("meh", "so good")

console.log(food)

const basic = "This is Cool"
const basicUp = basic.toUpperCase()
const basicDown = basic.toLowerCase()

console.log(basic)
console.log(basicUp)
console.log(basicDown)

const word = "banana"
const letters = word.split("")
console.log(letters)

const age = 22
const template = `I'm ${age} years old`
console.log(template)

const longSentence = "I think this will be a very long line because i'm typing this without any reason, but i don't know where will be my line breaks. So I'm just typing anyway."
console.log(longSentence)

const lineBreakedSentence = "This will be \n a multiline \n phrase. \nI just added line breaks.\nThat's \nit"
console.log(lineBreakedSentence)

const characterCodes = " So here's the first character null \0 what is that? \n then simple quote \' i think it just added a simple quote or what?\' \n then the third is double quote,\n i'll just add two \"inside the quote i think\" \n barre oblique inversée \\ added two of it and typing inside\\ \n retour chariot, what is this? \r inverse slash with letter r.\n vertical tab? \v i donno \v added two times.\n The tabulation \t its just the letter \"t\" with slash, i hope that works.\n so return back ? \b same with letter b. \n what will the page break do? \f who knows, this is after that slash with f\n that's it we'll see"

console.log(characterCodes)