let originalWord="hello"
let characters=originalWord.split("")
let reversedWord=""
for(let i=characters.length-1;i>=0;i--){
    reversedWord=reversedWord+characters[i]
}
console.log("Original Word:"+originalWord)
console.log("Reversed Word:"+reversedWord)
if(originalWord===reversedWord){
    console.log("It's a Palindrome...")
}
else{
    console.log("Not a Palindrome!")
}