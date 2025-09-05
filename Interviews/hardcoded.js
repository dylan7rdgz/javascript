function decode_message(encoded_str) {
    const reversedWords = []
    for (let i=0; i<encoded_str.length; i++) {
        let word = ""
        while (i<encoded_str.length && encoded_str[i] == " ") {
            i++;
        }
        while (i<encoded_str.length && encoded_str[i] != " ") {
            word += encoded_str[i]
            i++;
        }
        const reverseWord = word.split("").reverse().join("");
        console.log(reverseWord, reverseWord.length)
        reversedWords.push(reverseWord)
    }
    console.log(reversedWords)
    const result = reversedWords.join(" ")
    return result
}

const encoded_str = "  hello   world  "
const result = decode_message(encoded_str)

console.log(result)
console.log(result.length)